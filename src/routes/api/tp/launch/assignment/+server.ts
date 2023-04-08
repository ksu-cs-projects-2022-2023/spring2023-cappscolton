import type { RequestHandler } from "./$types";
import { redirect } from '@sveltejs/kit';

// Receive launch request from canvas - redirect to platform page
export const POST = (async ({ params, request, url, platform }) => {
    // TODO: validate oauth signature from canvas (low prio)
    var formEncodedParams = await request.text()
    var paramArray = formEncodedParams.split('&');

    const resultMap = new Map();

    paramArray.forEach(str => {
        const [key, value] = str.split("=");
        resultMap.set(key, value);
    });

    console.log(resultMap.get("lis_outcome_service_url"));
    console.log(resultMap.get("lis_result_sourcedid"));

    throw redirect(302, `/platform/assignment?lis_outcome_service_url%3D${resultMap.get("lis_outcome_service_url")}&lis_result_sourcedid%3D${resultMap.get("lis_result_sourcedid")}`);
}) satisfies RequestHandler;