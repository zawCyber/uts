import clientPromise from "../../../lib/mongodb";

export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db("zaw");
    const comments = await db.collection("comments").find().toArray();
    return new Response(JSON.stringify(comments), { status: 200 });
  } catch (error) {
    return new Response("Failed to fetch comments", { status: 500 });
  }
}

export async function POST(req) {
  try {
    const { name, email, message } = await req.json();
    const client = await clientPromise;
    const db = client.db("zaw");
    await db.collection("comments").insertOne({ name, email, message, createdAt: new Date() });
    return new Response("Comment added", { status: 201 });
  } catch (error) {
    return new Response("Failed to post comment", { status: 500 });
  }
}
