// api/new-meetup
import { MongoClient } from "mongodb";

const handler = async (req, res) => {
  if (req.method === "POST") {
    const data = req.body;

    const client = await MongoClient.connect(
      `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}/meetups?retryWrites=true&w=majority`
    );
    const db = client.db();

    const meetingsCollection = db.collection("meetups");
    const result = await meetingsCollection.insertOne(data);
    client.close();
    res.status(201).json({ message: "meetup added successfully" });
  }
};

export default handler;
