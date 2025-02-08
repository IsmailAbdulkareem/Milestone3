import { client } from "@/sanity/lib/client";

export async function GET(req: Request) {
  try {
    const orders = await client.fetch(`*[_type == "order"]`);
    return new Response(JSON.stringify(orders), { status: 200 });
  }  catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred';
    return new Response(JSON.stringify({ error: errorMessage }), { status: 500 });
  }
}