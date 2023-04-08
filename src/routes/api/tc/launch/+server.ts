import type { RequestHandler } from "./$types";

export const GET = (async ({ request, url, platform }) => {
    return new Response('{"result":"success"}');
}) satisfies RequestHandler;