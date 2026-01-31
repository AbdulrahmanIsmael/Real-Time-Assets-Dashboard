import assets from "@/lib/db/assets-data";

export async function GET() {
  return Response.json(assets);
}
