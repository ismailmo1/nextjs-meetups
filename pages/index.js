import MeetupList from "../components/meetups/MeetupList";

const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "First Meetup",
    image:
      "https://media.cntraveler.com/photos/5fc6818f3cfe1de2cab79372/master/pass/Amsterdam-GettyImages-840603854.jpg",
    address: "Address, 12345, City",
    description: "First meetup ever",
  },
  {
    id: "m2",
    title: "Second Meetup",
    image:
      "https://www.investopedia.com/thmb/7SehEV5rH9Hcy7zO3vuRQVbeYjw=/1626x915/smart/filters:no_upscale()/pedestrian-architecture-road-skyline-traffic-street-71505-pxhere.com-ea7fd4d112754938828312ff123c084c.jpg",
    address: "Address 2, 56789, City 2 ",
    description: "Second meetup ever",
  },
];
const HomePage = () => {
  return <MeetupList meetups={DUMMY_MEETUPS} />;
};

export default HomePage;
