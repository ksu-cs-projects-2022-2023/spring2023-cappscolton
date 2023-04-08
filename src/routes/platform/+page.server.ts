/** @type {import('./$types').PageLoad} */
import { OAuth1Signature } from '../../lib/oauth/oauth1-signature.js';

// Runs prepare some data for rendering on ELA Platform home screen
export async function load({ fetch, url, params }) {
    var base_platform_url = "spring2023-cappscolton.pages.dev";
    var codio_lti_url = `apollo.codio.com/lti/course_navigation`;
    var saltire_url = `saltire.lti.app/tool`

    const custom_params = {
        context_id: `b8c5113f9cf20ad709401b7ee652e42a7b82d7b6`,
        context_label: `Scantron`,
        context_title: `Scantron+Test`,
        custom_canvas_api_domain: `${base_platform_url}`,
        custom_canvas_course_id: `1146`,
        custom_canvas_enrollment_state: `active`,
        custom_canvas_user_id: `133612`,
        custom_canvas_user_login_id: `cjcapps`,
        custom_canvas_workflow_state: `available`,
        ext_roles: `urn:lti:instrole:ims/lis/Instructor,urn:lti:instrole:ims/lis/Student,urn:lti:role:ims/lis/Instructor,urn:lti:sysrole:ims/lis/User`,
        launch_presentation_document_target: `iframe`,
        launch_presentation_height: `400`,
        launch_presentation_locale: `en`,
        launch_presentation_return_url: `https://${base_platform_url}/courses/1146/external_content/success/external_tool_redirect`,
        launch_presentation_width: `800`,
        lis_person_contact_email_primary: `cjcapps@ksu.edu`,
        lis_person_name_family: `Capps`,
        lis_person_name_full: `Colton+Capps`,
        lis_person_name_given: `Colton`,
        lis_person_sourcedid: `854562293`,
        lti_message_type: `basic-lti-launch-request`,
        lti_version: `LTI-1p0`,
        oauth_callback: `about:blank`,
        resource_link_id: `b8c5113f9cf20ad709401b7ee652e42a7b82d7b6`,
        resource_link_title: `codio`,
        roles: `Instructor`,
        tool_consumer_info_product_family_code: `canvas`,
        tool_consumer_info_version: `cloud`,
        tool_consumer_instance_contact_email: `cjcapps@ksu.edu`,
        tool_consumer_instance_guid: `7db438071375c02373713c12c73869ff2f470b68.${base_platform_url}`,
        tool_consumer_instance_name: `Kansas+State+University`,
        user_id: `37d9b9f242b5878f1b8a34c2283e06647edfb240`,
        user_image: `https://canvas.instructure.com/images/messages/avatar-50.png`,
    };

    const signedParams = OAuth1Signature({
        oauth_consumer_key: "9e148d82-db3b-4669-b38b-a103624600b6",
        oauth_shared_secret: "85042382-aeff-496e-a3f6-eb7467f18489", // await platform?.env.KV_CACHE.get("LTI_CLIENT_SECRET"),
        method: 'POST',
        query_params: {
            ...custom_params, codio_course_target_id: `61f1d78d48cd9f566a356ed6762579e3`
        },
        url: `https://${codio_lti_url}`
    });

    const debugSignedParams = OAuth1Signature({
        oauth_consumer_key: "jisc.ac.uk",
        oauth_shared_secret: "secret", // await platform?.env.KV_CACHE.get("LTI_CLIENT_SECRET"),
        method: 'POST',
        query_params: custom_params,
        url: `https://${saltire_url}`
    });

    return {
        post: {
            platform: {
                url: base_platform_url
            },
            lti: {
                context_id: signedParams.context_id,
                context_label: signedParams.context_label,
                context_title: signedParams.context_title,
                custom_canvas_api_domain: signedParams.custom_canvas_api_domain,
                custom_canvas_course_id: signedParams.custom_canvas_course_id,
                custom_canvas_enrollment_state: signedParams.custom_canvas_enrollment_state,
                custom_canvas_user_id: signedParams.custom_canvas_user_id,
                custom_canvas_user_login_id: signedParams.custom_canvas_user_login_id,
                custom_canvas_workflow_state: signedParams.custom_canvas_workflow_state,
                ext_roles: signedParams.ext_roles,
                launch_presentation_document_target: signedParams.launch_presentation_document_target,
                launch_presentation_height: signedParams.launch_presentation_height,
                launch_presentation_locale: signedParams.launch_presentation_locale,
                launch_presentation_return_url: signedParams.launch_presentation_return_url,
                launch_presentation_width: signedParams.launch_presentation_width,
                lis_person_contact_email_primary: signedParams.lis_person_contact_email_primary,
                lis_person_name_family: signedParams.lis_person_name_family,
                lis_person_name_full: signedParams.lis_person_name_full,
                lis_person_name_given: signedParams.lis_person_name_given,
                lis_person_sourcedid: signedParams.lis_person_sourcedid,
                lti_message_type: signedParams.lti_message_type,
                lti_version: signedParams.lti_version,
                oauth_callback: signedParams.oauth_callback,
                resource_link_id: signedParams.resource_link_id,
                resource_link_title: signedParams.resource_link_title,
                roles: signedParams.roles,
                tool_consumer_info_product_family_code: signedParams.tool_consumer_info_product_family_code,
                tool_consumer_info_version: signedParams.tool_consumer_info_version,
                tool_consumer_instance_contact_email: signedParams.tool_consumer_instance_contact_email,
                tool_consumer_instance_guid: signedParams.tool_consumer_instance_guid,
                tool_consumer_instance_name: signedParams.tool_consumer_instance_name,
                user_id: signedParams.user_id,
                user_image: signedParams.user_image,
            },
            codio: {
                // codio_course_target_id: `61f1d78d48cd9f566a356ed6762579e3`,
                oauth_consumer_key: signedParams.oauth_consumer_key,
                oauth_nonce: signedParams.oauth_nonce,
                oauth_signature_method: 'HMAC-SHA1',
                oauth_timestamp: signedParams.oauth_timestamp,
                oauth_version: signedParams.oauth_version,
                oauth_signature: signedParams.oauth_signature,
                codio_course_target_id: signedParams.codio_course_target_id,
                url: signedParams.url
            },
            debug: {
                oauth_consumer_key: debugSignedParams.oauth_consumer_key,
                oauth_nonce: debugSignedParams.oauth_nonce,
                oauth_signature_method: 'HMAC-SHA1',
                oauth_timestamp: debugSignedParams.oauth_timestamp,
                oauth_version: debugSignedParams.oauth_version,
                oauth_signature: debugSignedParams.oauth_signature,
                url: debugSignedParams.url
            }
        }
    };
}