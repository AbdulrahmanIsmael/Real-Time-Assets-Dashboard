import assets from "@/lib/db/assets.json";

export async function GET() {
  return Response.json(assets);
}
