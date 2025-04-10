import { NextResponse } from "next/server";
import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI;

export async function GET() {
  try {
    const client = await MongoClient.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    const db = client.db("portfolio");
    const testCollection = db.collection("testmongo");

    // Misalnya ambil semua dokumen
    const data = await testCollection.find().toArray();

    client.close();

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error("MongoDB error:", error);
    return NextResponse.json({ success: false, message: "Gagal koneksi MongoDB" }, { status: 500 });
  }
}
