import type { RequestHandler } from "./$types";
import { OAuth1Signature } from './oauth1-signature.js';

export const GET = (async ({ request, url, platform }) => {
    var base_platform_url = "https://sk-cloudflare-test.pages.dev";
    var canvas_lti_url = `https://sk-cloudflare-test.pages.dev/api/mock_receive_lti`; //`https://apollo.codio.com/lti/7f5a917c-79c4-4c15-85c8-f0c137e22cd4`;

    const custom_params = {
        context_id: `b8c5113f9cf20ad709401b7ee652e42a7b82d7b6`,
        context_label: `Scantron`,
        context_title: `Scantron+Test`,
        custom_canvas_user_login_id: `cjcapps`,
        ext_roles: `urn%3Alti%3Ainstrole%3Aims%2Flis%2FInstructor%2Curn%3Alti%3Ainstrole%3Aims%2Flis%2FStudent%2Curn%3Alti%3Arole%3Aims%2Flis%2FInstructor%2Curn%3Alti%3Asysrole%3Aims%2Flis%2FUser`,
        launch_presentation_document_target: `iframe`,
        launch_presentation_height: `400`,
        launch_presentation_locale: `en`,
        launch_presentation_width: `800`,
        lis_person_contact_email_primary: `cjcapps%40ksu.edu`,
        lis_person_name_family: `Capps`,
        lis_person_name_full: `Colton+Capps`,
        lis_person_name_given: `Colton`,
        lis_person_sourcedid: `854562293`,
        lti_message_type: `basic-lti-launch-request`,
        lti_version: `LTI-1p0`,
        resource_link_id: `b8c5113f9cf20ad709401b7ee652e42a7b82d7b6`,
        resource_link_title: `ela+%28cjcapps%29`,
        roles: `Instructor`,
        tool_consumer_instance_contact_email: `cjcapps%40ksu.edu`,
        tool_consumer_instance_guid: `7db438071375c02373713c12c73869ff2f470b68.${base_platform_url}`,
        user_id: `37d9b9f242b5878f1b8a34c2283e06647edfb240`,
        //oauth_callback:`about%3Ablank`, // TODO is this required???
        //user_image:`https%3A%2F%2Fcanvas.instructure.com%2Fimages%2Fmessages%2Favatar-50.png`
        //custom_canvas_api_domain:`${base_url}`,
        //custom_canvas_course_id:`1146`,
        //custom_canvas_enrollment_state:`active`,
        //custom_canvas_user_id:`133612`,
        //launch_presentation_return_url:`https%3A%2F%2F${base_url}%2Fcourses%2F1146%2Fexternal_content%2Fsuccess%2Fexternal_tool_redirect`
        //tool_consumer_info_product_family_code:`canvas`,
        //tool_consumer_info_version:`cloud`,
        //custom_canvas_workflow_state:`available`,
        //tool_consumer_instance_name:`Kansas+State+University`,
    };

    const signature = OAuth1Signature({
        oauth_consumer_key: "9e148d82-db3b-4669-b38b-a103624600b6",
        oauth_shared_secret: "85042382-aeff-496e-a3f6-eb7467f18489", // await platform?.env.KV_CACHE.get("LTI_CLIENT_SECRET"),
        method: 'POST',
        query_params: custom_params,
        url: `${base_platform_url}/api/tc/launch`
    });

    const options = {
        method: "POST",
        headers: { "Content-Type": "application/xml" },
        body: JSON.stringify("test")
        // // The grades passed back are in the form of a
        // // float between 0 and 1, corresponding to a percentage
        // const grade = 0.98;

        // // The body of the grade posting request is an XML document
        // // with a specific structure:
        // const xml = `<?xml version="1.0" encoding="UTF-8"?>
        //   <imsx_POXEnvelopeRequest xmlns="http://www.imsglobal.org/services/ltiv1p1/xsd/imsoms_v1p0">
        //     <imsx_POXHeader>
        //       <imsx_POXRequestHeaderInfo>
        //         <imsx_version>V1.0</imsx_version>
        //         <imsx_messageIdentifier>999999123</imsx_messageIdentifier>
        //       </imsx_POXRequestHeaderInfo>
        //     </imsx_POXHeader>
        //     <imsx_POXBody>
        //       <replaceResultRequest>
        //         <resultRecord>
        //           <sourcedGUID>
        //             <sourcedId>${lis_result_sourcedid}</sourcedId>
        //           </sourcedGUID>
        //           <result>
        //             <resultScore>
        //               <language>en</language>
        //               <textString>${grade}</textString>
        //             </resultScore>
        //           </result>
        //         </resultRecord>
        //       </replaceResultRequest>
        //     </imsx_POXBody>
        //   </imsx_POXEnvelopeRequest>`;
    };

    const urlparams = new URLSearchParams(Array.from(Object.entries(signature.params)));     // console.log(urlparams);
    const fetch_url = `${canvas_lti_url}?${urlparams}`;

    fetch(fetch_url, options)
        .then((response) =>
            console.log(response.body))
        .then((data) => {
            console.log(data);
        })
        .catch(error => console.error(`cjcapps error: ${error}`));

    return new Response('{"result":"success"}');
}) satisfies RequestHandler;
