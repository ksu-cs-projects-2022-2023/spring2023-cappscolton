import type { RequestHandler } from "./$types";

// This exists to act like Codio. I want to see what they're receiving from my fetch() in /api/tc/launch/+server.ts
/** @type {import('./$types').RequestHandler} */
export async function POST(event) {
    // console.log(await event.request);
    // console.log(JSON.stringify(await event.request.body));
    // console.log(await event.request.text());
    var data = await event.request.body;
    console.log(`RCV: ${data}`);
    return new Response(data);
}