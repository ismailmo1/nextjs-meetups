import { MongoClient, ObjectId } from "mongodb";
import MeetupDetail from "../../components/MeetupDetail";

const MeetupDetailPage = (props) => {
  return (
    <MeetupDetail
      image={props.meetupData.image}
      title={props.meetupData.title}
      description={props.meetupData.description}
      address={props.meetupData.address}
    />
  );
};

export const getStaticPaths = async () => {
  // dynamic pages with static props need to know id of page to store pre-generated pages

  const client = await MongoClient.connect(
    `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}/meetups?retryWrites=true&w=majority`
  );
  const db = client.db();

  const meetingsCollection = db.collection("meetups");

  const meetups = await meetingsCollection.find({}, { _id: 1 }).toArray();
  client.close();

  return {
    fallback: "blocking",
    paths: meetups.map((meetup) => ({
      params: {
        title: meetup.title,
        address: meetup.address,
        description: meetup.description,
        image: meetup.image,
        meetupId: meetup._id.toString(),
      },
    })),
  };
};

export const getStaticProps = async (context) => {
  // fetch meetup data
  const { meetupId } = context.params;
  const client = await MongoClient.connect(
    `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}/meetups?retryWrites=true&w=majority`
  );
  const db = client.db();

  const meetingsCollection = db.collection("meetups");

  const meetup = await meetingsCollection.findOne({ _id: ObjectId(meetupId) });
  client.close();
  return {
    props: {
      meetupData: {
        id: meetup._id.toString(),
        title: meetup.title,
        address: meetup.address,
        description: meetup.description,
        image: meetup.image,
      },
    },
  };
};

export default MeetupDetailPage;
