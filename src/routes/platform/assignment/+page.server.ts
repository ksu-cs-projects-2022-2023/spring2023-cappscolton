/** @type {import('./$types').PageLoad} */
import { OAuth1Signature } from '../../../lib/oauth/oauth1-signature.js';

// Runs prepare some data for rendering on ELA Platform home screen
export async function load({ fetch, url, params }) {
    const param_component = url.toString().split('?')[1];
    let param_list = param_component.split('&');
    let param_map = new Map();
    param_list.forEach(str => {
        let entry = str.replace("%3D", '=');
        let parts = entry.split('=');
        param_map.set(parts[0], parts[1]);
    })

    const lis_outcome_service_url = `${decodeURIComponent(param_map.get('lis_outcome_service_url'))}`;
    const lis_result_sourcedid = `${decodeURIComponent(param_map.get('lis_result_sourcedid'))}`;

    const base_platform_url = "spring2023-cappscolton.pages.dev";
    const codio_lti_url = `apollo.codio.com/lti/7f5a917c-79c4-4c15-85c8-f0c137e22cd4_f06dcf59c1f5b2e1fb72e985b467e181`//`sk - cloudflare - test.pages.dev / mock`;
    const saltire_url = `saltire.lti.app/tool`

    const custom_params = {
        codio_course_target_id: "61f1d78d48cd9f566a356ed6762579e3",
        context_id: "b8c5113f9cf20ad709401b7ee652e42a7b82d7b6",
        context_label: "Scantron",
        context_title: "Scantron+Test",
        custom_canvas_api_domain: "k-state.test.instructure.com",
        custom_canvas_assignment_id: "1733736",
        custom_canvas_assignment_points_possible: "0",
        custom_canvas_assignment_title: "cjcapps",
        custom_canvas_course_id: "1146",
        custom_canvas_enrollment_state: "active",
        custom_canvas_module_id: "",
        custom_canvas_module_item_id: "4114122",
        custom_canvas_user_id: "133612",
        custom_canvas_user_login_id: "cjcapps",
        custom_canvas_workflow_state: "available",
        ext_ims_lis_basic_outcome_url: "https://k-state.test.instructure.com/api/lti/v1/tools/17275/ext_grade_passback",
        ext_lti_assignment_id: "be03e635-16e7-4248-ad3e-bfe5ab6af00c",
        ext_outcome_data_values_accepted: "url,text",
        ext_outcome_result_total_score_accepted: "true",
        ext_outcome_submission_needs_additional_review_accepted: "true",
        ext_outcome_submission_prioritize_non_tool_grade_accepted: "true",
        ext_outcome_submission_submitted_at_accepted: "true",
        ext_outcomes_tool_placement_url: "https://k-state.test.instructure.com/api/lti/v1/turnitin/outcomes_placement/17275",
        ext_roles: "urn:lti:instrole:ims/lis/Instructor,urn:lti:instrole:ims/lis/Student,urn:lti:role:ims/lis/Instructor,urn:lti:sysrole:ims/lis/User",
        launch_presentation_document_target: "iframe",
        launch_presentation_locale: "en",
        launch_presentation_return_url: "https://k-state.test.instructure.com/courses/1146/external_content/success/external_tool_redirect",
        lis_outcome_service_url: lis_outcome_service_url,
        lis_person_contact_email_primary: "cjcapps@ksu.edu",
        lis_person_name_family: "Capps",
        lis_person_name_full: "Colton+Capps",
        lis_person_name_given: "Colton",
        lis_person_sourcedid: "854562293",
        lis_result_sourcedid: lis_result_sourcedid,
        lti_message_type: "basic-lti-launch-request",
        lti_version: "LTI-1p0",
        oauth_callback: "about:blank",
        resource_link_id: "3a740810769778b1e070ab11261fe61b200f4ac7",
        resource_link_title: "cjcapps",
        roles: "Instructor",
        tool_consumer_info_product_family_code: "canvas",
        tool_consumer_info_version: "cloud",
        tool_consumer_instance_contact_email: "notifications@instructure.com",
        tool_consumer_instance_guid: "7db438071375c02373713c12c73869ff2f470b68.k-state.instructure.com",
        tool_consumer_instance_name: "Kansas+State+University",
        user_id: "37d9b9f242b5878f1b8a34c2283e06647edfb240",
        user_image: "https://canvas.instructure.com/images/messages/avatar-50.png",
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
        oauth_consumer_key: "9e148d82-db3b-4669-b38b-a103624600b6",
        oauth_shared_secret: "85042382-aeff-496e-a3f6-eb7467f18489", // await platform?.env.KV_CACHE.get("LTI_CLIENT_SECRET"),
        method: 'POST',
        query_params: {
            ...custom_params, codio_course_target_id: `61f1d78d48cd9f566a356ed6762579e3`
        },
        url: `https://${saltire_url}`
    });

    return {
        post: {
            platform: {
                url: base_platform_url
            },
            lti: {
                codio_course_target_id: signedParams.codio_course_target_id,
                context_id: signedParams.context_id,
                context_label: signedParams.context_label,
                context_title: signedParams.context_title,
                custom_canvas_api_domain: signedParams.custom_canvas_api_domain,
                custom_canvas_assignment_id: signedParams.custom_canvas_assignment_id,
                custom_canvas_assignment_points_possible: signedParams.custom_canvas_assignment_points_possible,
                custom_canvas_assignment_title: signedParams.custom_canvas_assignment_title,
                custom_canvas_course_id: signedParams.custom_canvas_course_id,
                custom_canvas_enrollment_state: signedParams.custom_canvas_enrollment_state,
                custom_canvas_module_id: signedParams.custom_canvas_module_id,
                custom_canvas_module_item_id: signedParams.custom_canvas_module_item_id,
                custom_canvas_user_id: signedParams.custom_canvas_user_id,
                custom_canvas_user_login_id: signedParams.custom_canvas_user_login_id,
                custom_canvas_workflow_state: signedParams.custom_canvas_workflow_state,
                ext_ims_lis_basic_outcome_url: signedParams.ext_ims_lis_basic_outcome_url,
                ext_lti_assignment_id: signedParams.ext_lti_assignment_id,
                ext_outcome_data_values_accepted: signedParams.ext_outcome_data_values_accepted,
                ext_outcome_result_total_score_accepted: signedParams.ext_outcome_result_total_score_accepted,
                ext_outcome_submission_needs_additional_review_accepted: signedParams.ext_outcome_submission_needs_additional_review_accepted,
                ext_outcome_submission_prioritize_non_tool_grade_accepted: signedParams.ext_outcome_submission_prioritize_non_tool_grade_accepted,
                ext_outcome_submission_submitted_at_accepted: signedParams.ext_outcome_submission_submitted_at_accepted,
                ext_outcomes_tool_placement_url: signedParams.ext_outcomes_tool_placement_url,
                ext_roles: signedParams.ext_roles,
                launch_presentation_document_target: signedParams.launch_presentation_document_target,
                launch_presentation_locale: signedParams.launch_presentation_locale,
                launch_presentation_return_url: signedParams.launch_presentation_return_url,
                lis_outcome_service_url: signedParams.lis_outcome_service_url,
                lis_person_contact_email_primary: signedParams.lis_person_contact_email_primary,
                lis_person_name_family: signedParams.lis_person_name_family,
                lis_person_name_full: signedParams.lis_person_name_full,
                lis_person_name_given: signedParams.lis_person_name_given,
                lis_person_sourcedid: signedParams.lis_person_sourcedid,
                lis_result_sourcedid: signedParams.lis_result_sourcedid,
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
                url: signedParams.url,
                oauth_signature_method: 'HMAC-SHA1',
                oauth_consumer_key: signedParams.oauth_consumer_key,
                oauth_nonce: signedParams.oauth_nonce,
                oauth_timestamp: signedParams.oauth_timestamp,
                oauth_version: signedParams.oauth_version,
                oauth_signature: signedParams.oauth_signature,
                codio_course_target_id: signedParams.codio_course_target_id,
            },
            debug: {
                url: debugSignedParams.url,
                oauth_signature_method: 'HMAC-SHA1',
                oauth_consumer_key: debugSignedParams.oauth_consumer_key,
                oauth_nonce: debugSignedParams.oauth_nonce,
                oauth_timestamp: debugSignedParams.oauth_timestamp,
                oauth_version: debugSignedParams.oauth_version,
                oauth_signature: debugSignedParams.oauth_signature,
                codio_course_target_id: debugSignedParams.codio_course_target_id,
            }
        }
    };
}