/** @type {import('./$types').PageLoad} */

// Runs prepare some data for rendering on ELA Platform home screen
export async function load({ fetch, url, params }) {
    var base_platform_url = "https://sk-cloudflare-test.pages.dev";
    const res = await fetch(`${base_platform_url}/api/tc/launch`);
    console.log(res.json());
    return {
        post: {
            lti: `Data: ${res}`,
        }
    };
}