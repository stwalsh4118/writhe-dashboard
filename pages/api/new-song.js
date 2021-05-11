import { connectToDatabase } from "../../js/mongodb";
export default async(req, res) => {
    const { db } = await connectToDatabase();
    const movies = await db
        .collection("spotify-songs")
        .find({})
        .limit(20)
        .toArray();
    res.json(movies);
};