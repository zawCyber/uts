import clientPromise from "../../../lib/mongodb";
import fs from "fs";
import path from "path";

const dbPath = path.join(process.cwd(), "db.json");

export async function POST(req) {
  try {
    const data = await req.json();

    // Tambahkan timestamp
    const newRating = {
      ...data,
      createdAt: new Date().toISOString()
    };

    // Baca file db.json
    const file = fs.readFileSync(dbPath, "utf8");
    const json = JSON.parse(file);

    // Tambah data rating
    json.ratings.push(newRating);

    // Tulis ulang file
    fs.writeFileSync(dbPath, JSON.stringify(json, null, 2));

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
    const file = fs.readFileSync(dbPath, "utf8");
    const json = JSON.parse(file);

    return new Response(JSON.stringify(json.ratings), {
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
