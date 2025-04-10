import clientPromise from "../../../lib/mongodb";

export async function POST(req) {
  const data = await req.json();

  try {
    const client = await clientPromise;
    const db = client.db();
    const contacts = db.collection("contacts");
    await contacts.insertOne(data);

    return new Response(JSON.stringify({ message: "Contact saved" }), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error: "Failed to save contact" }), { status: 500 });
  }
}
