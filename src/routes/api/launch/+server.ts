import axios from "axios";
import OAuth from "oauth-1.0a";
import hmacSHA512 from "crypto-js/hmac-sha512";
import type { RequestHandler } from "./$types";

export const POST = (async ({ request, url, platform }) => {
  // const oauth = new OAuth({
  //   consumer: {
  //     key: "LTI_KEY",
  //     secret: await platform?.env.KV_CACHE.get("LTI_CLIENT_KEY"),
  //   },
  //   signature_method: "HMAC-SHA1",
  //   hash_function(base_string, key) {
  //     return hmacSHA512(base_string, key).toString(CryptoJS.enc.Base64);
  //   },
  // });

  // try {
  //   const response = await axios.request({
  //     url: lis_outcome_service_url,
  //     params: oauth.params,
  //     method: "post",
  //     headers: { "Content-Type": "application/xml" },
  //     data: xml,
  //   });

  //   if (response.status == 200) {
  //     // a 200 status code indicates success
  //     res.send(`You earned a grade of ${grade}.`);
  //   } else {
  //     console.error("Error response received", response.status);
  //     res.status(500).send("Server Error");
  //   }
  // } catch (err) {
  //   console.error("foobar", err);
  //   res.status(500).send("Server Error");
  // }

  const req_data = await request.formData();
  for (const pair of req_data.entries()) {
    console.log(`${pair[0]}, ${pair[1]}`);
  }
  // const lis_res = req_data.get("lis_result_sourcedid");
  // const lis_outcome = req_data.get("lis_outcome_service_url");
  // const roles = req_data.get("roles");
  // console.log(lis_res);
  // console.log(lis_outcome);
  // console.log(roles);
  return new Response();
  // region const { lis_result_sourcedid, lis_outcome_service_url} = request.body;

  // Additionally, the roles are important, because an
  // Instructor role will not have a lis_sourcedid as
  // they are not receiving grades.
  // const roles = request.body //roles.split(',');
  // if(roles.includes('Instructor')) {
  //   return new Response(`Hello instructor ${req.body.lis_person_name_family}! Try using Student View.`);
  // }

  // // The request must also contain Oauth parameters
  // // and a signature to validate it on the LMS side:
  // const signature = OAuth1Signature({
  //   consumerKey: "LTI_KEY",
  //   consumerSecret: await platform.env.KV_CACHE.get("LTI_CLIENT_KEY"),
  //   url: lis_outcome_service_url,
  //   method: 'POST',
  //   queryParams: {} // if you need to post additional query params, do it here
  // });

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

  // // Then send the request (note that this does
  // // not need to be done immediately - it can be
  // // done at a future point, but you must know the
  // // lis_sourcedid and the lis_outcome_service_url)
  // try {
  //   const response = await axios.request({
  //     url: lis_outcome_service_url,
  //     params: signature.params,
  //     method: 'post',
  //     headers: {'Content-Type': 'application/xml'},
  //     data: xml,
  //   });

  //   if(response.status == 200) {
  //     // a 200 status code indicates success
  //     return new Response(`You earned a grade of ${grade}.`);
  //   } else {
  //     console.error('Error response received', response.status);
  //     return new Response("Server Error", {status: 500});
  //   }
  // } catch(err) {
  //   console.error('foobar', err);
  //   return new Response("Server Error", {status: 500});
  // }
}) satisfies RequestHandler;

export const GET = (async ({ params, request, url, platform }) => {
  console.log(await request.text());
  console.log(url);
  console.log(platform);
  return new Response();
}) satisfies RequestHandler;
