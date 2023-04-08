import type { RequestHandler } from "./$types";
import { OAuth1Signature } from "../../../lib/oauth/oauth1-signature";
import sha1 from "crypto-js/sha1";

export const POST = (async ({ params, request, url, platform }) => {
  const base_platform_url = "spring2023-cappscolton.pages.dev";
  const lis_outcome_service_url = `${url.searchParams.get(
    "lis_outcome_service_url"
  )}`;
  const lis_result_sourcedid = `${url.searchParams.get(
    "lis_result_sourcedid"
  )}`;

  const custom_params = {
    codio_course_target_id: "61f1d78d48cd9f566a356ed6762579e3",
    context_id: "b8c5113f9cf20ad709401b7ee652e42a7b82d7b6",
    context_label: "Scantron",
    context_title: "Scantron+Test",
    custom_canvas_api_domain: "k-state.test.instructure.com",
    custom_canvas_assignment_id: "1733736",
    custom_canvas_assignment_points_possible: "1",
    custom_canvas_assignment_title: "cjcapps",
    custom_canvas_course_id: "1146",
    custom_canvas_enrollment_state: "active",
    custom_canvas_module_id: "",
    custom_canvas_module_item_id: "4114122",
    custom_canvas_user_id: "62569",
    custom_canvas_user_login_id: "f1d42697690b23e2b1e5596b5a904090d20c143f",
    custom_canvas_workflow_state: "available",
    ext_ims_lis_basic_outcome_url:
      "https://k-state.test.instructure.com/api/lti/v1/tools/17275/ext_grade_passback",
    ext_lti_assignment_id: "be03e635-16e7-4248-ad3e-bfe5ab6af00c",
    ext_outcome_data_values_accepted: "url,text",
    ext_outcome_result_total_score_accepted: "true",
    ext_outcome_submission_needs_additional_review_accepted: "true",
    ext_outcome_submission_prioritize_non_tool_grade_accepted: "true",
    ext_outcome_submission_submitted_at_accepted: "true",
    ext_outcomes_tool_placement_url:
      "https://k-state.test.instructure.com/api/lti/v1/turnitin/outcomes_placement/17274",
    ext_roles:
      "urn:lti:instrole:ims/lis/Instructor,urn:lti:instrole:ims/lis/Student,urn:lti:role:ims/lis/Instructor,urn:lti:sysrole:ims/lis/User",
    launch_presentation_document_target: "iframe",
    launch_presentation_locale: "en",
    launch_presentation_return_url:
      "https://k-state.test.instructure.com/courses/1146/external_content/success/external_tool_redirect",
    lis_outcome_service_url: lis_outcome_service_url,
    lis_person_contact_email_primary: "cjcapps@ksu.edu",
    lis_person_name_family: "Student",
    lis_person_name_full: "Test+Student",
    lis_person_name_given: "Test",
    lis_person_sourcedid: "854562293",
    lis_result_sourcedid: lis_result_sourcedid,
    lti_message_type: "basic-lti-launch-request",
    lti_version: "LTI-1p0",
    oauth_callback: "about:blank",
    resource_link_id: "3a740810769778b1e070ab11261fe61b200f4ac7",
    resource_link_title: "ELA+Mastery",
    roles: "Learner",
    tool_consumer_info_product_family_code: "canvas",
    tool_consumer_info_version: "cloud",
    tool_consumer_instance_contact_email: "cjcapps@ksu.edu",
    tool_consumer_instance_guid:
      "7db438071375c02373713c12c73869ff2f470b68.k-state.instructure.com",
    tool_consumer_instance_name: "Kansas+State+University",
    user_id: "470f037ac35b6581c4545419bbd0c2d7f5db0a5f",
    user_image: "https://canvas.instructure.com/images/messages/avatar-50.png",
  };

  const signature = OAuth1Signature({
    oauth_consumer_key: "9e148d82-db3b-4669-b38b-a103624600b6",
    oauth_shared_secret: "85042382-aeff-496e-a3f6-eb7467f18489", // await platform?.env.KV_CACHE.get("LTI_CLIENT_SECRET"),
    method: "POST",
    query_params: custom_params,
    url: ``,
  });

  // The grades passed back are in the form of a
  // float between 0 and 1, corresponding to a percentage
  const grade = 0.98;

  // The body of the grade posting request is an XML document
  // with a specific structure:
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
          <imsx_POXEnvelopeRequest xmlns="http://www.imsglobal.org/services/ltiv1p1/xsd/imsoms_v1p0">
            <imsx_POXHeader>
              <imsx_POXRequestHeaderInfo>
                <imsx_version>V1.0</imsx_version>
                <imsx_messageIdentifier>999999123</imsx_messageIdentifier>
              </imsx_POXRequestHeaderInfo>
            </imsx_POXHeader>
            <imsx_POXBody>
              <replaceResultRequest>
                <resultRecord>
                  <sourcedGUID>
                    <sourcedId>${lis_result_sourcedid}</sourcedId>
                  </sourcedGUID>
                  <result>
                    <resultScore>
                      <language>en</language>
                      <textString>${grade}</textString>
                    </resultScore>
                  </result>
                </resultRecord>
              </replaceResultRequest>
            </imsx_POXBody>
          </imsx_POXEnvelopeRequest>`;

  const oauth_body_hash = sha1(xml);

  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/xml",
      Authorization: `OAuth realm="",oauth_version="1.0",oauth_nonce="${signature.oauth_nonce}",oauth_timestamp="${signature.oauth_timestamp}",oauth_body_hash="${oauth_body_hash}",oauth_consumer_key="${signature.oauth_consumer_key}",oauth_signature_method="HMAC-SHA1",oauth_signature="${signature.signature}"`,
    },
    body: xml,
  };

  console.log(options.headers);

  const fetch_url = lis_outcome_service_url;

  await fetch(fetch_url, options)
    .then(async (response) => console.log(await response.json()))
    .then((data) => {
      console.log(data);
    })
    .catch((error) => console.error(`cjcapps error: ${error}`));

  return new Response("outcome sent");
}) satisfies RequestHandler;
