import clientPromise from "../../../lib/mongodb"; 

export async function POST(req) {
  try {
    const data = await req.json();

    const newRating = {
      ...data,
      createdAt: new Date().toISOString(),
    };

    const client = await clientPromise;
    const db = client.db(); // otomatis pakai database dari URI kamu
    const ratings = db.collection("ratings");

    await ratings.insertOne(newRating);

    return new Response(JSON.stringify({ message: "Rating saved" }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Failed to save rating:", error);
    return new Response(JSON.stringify({ error: "Failed to save rating" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}

export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db();
    const ratings = db.collection("ratings");

    const data = await ratings.find().sort({ createdAt: -1 }).toArray();

    return new Response(JSON.stringify(data), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Failed to fetch ratings:", error);
    return new Response(JSON.stringify({ error: "Failed to fetch ratings" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
