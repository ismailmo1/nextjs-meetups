import { useRouter } from "next/router";
import NewMeetupForm from "../../components/meetups/NewMeetupForm";
const NewMeetupPage = () => {
  const router = useRouter();

  const addMeetupHandler = async (meetupInput) => {
    const response = await fetch("/api/new-meetup", {
      method: "POST",
      body: JSON.stringify(meetupInput),
      headers: { "Content-Type": "application/json" },
    });

    const data = await response.json();
    console.log(data);
    router.push("/");
  };

  return <NewMeetupForm onAddMeetup={addMeetupHandler} />;
};

export default NewMeetupPage;
