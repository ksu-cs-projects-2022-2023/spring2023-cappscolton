import type { RequestHandler } from "./$types";


// This exists to act like Codio. I want to see what they're receiving from my fetch() in /api/launch/+server.ts POST
/** @type {import('./$types').RequestHandler} */
export async function POST (event) {
    console.log(await event.request);
    console.log(JSON.stringify(await event.request.body));
    console.log(await event.request.text());
    //console.log(await event.request.json()); This causes an error, probably cuz it's empty atm?

    return new Response();
}

// Not in use
export const GET = (async ({ params, request, url, platform }) => {
    var text = await request.text()
    console.log(`Request text: ${text}`);
    console.log(`URL: ${url}`);
    console.log(`Platform (undefined if not Cloudflare): ${platform}`);
    return new Response();
}) satisfies RequestHandler;