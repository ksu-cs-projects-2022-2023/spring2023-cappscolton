import sha1 from "crypto-js/sha1";
import { OAuth1Signature } from "$lib/oauth/oauth1-signature";

export async function gradePassback(
  lis_outcome_service_url: string,
  lis_result_sourcedid: string,
  grade: number,
  oauthKey: string,
  oauthSecret: string
): Promise<Response> {
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

  const signature = OAuth1Signature({
    oauth_consumer_key: oauthKey,
    oauth_shared_secret: oauthSecret, // await platform?.env.KV_CACHE.get("LTI_CLIENT_SECRET"),
    method: "POST",
    query_params: {
      oauth_body_hash: oauth_body_hash,
    },
    url: `${lis_outcome_service_url}`,
  });

  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/xml",
      // prettier-ignore
      'Authorization':
        'OAuth realm=\"\",' +
        'oauth_version=\"1.0\",'+
        'oauth_nonce=\"' + signature.oauth_nonce + "\"" + 
        ',oauth_timestamp=\"' + signature.oauth_timestamp + "\"" +
        ',oauth_body_hash=\"' + signature.oauth_body_hash + "\"" +
        ',oauth_consumer_key=\"' + signature.oauth_consumer_key + "\"" + 
        ',oauth_signature_method=' + 'HMAC-SHA1' + 
        ',oauth_signature=\"' + encodeURIComponent(signature.oauth_signature) +  "\"",
    },
    body: xml,
  };

  const fetch_url = lis_outcome_service_url;

  await fetch(fetch_url, options)
    .then(async (response) => console.log(await response.text()))
    .catch((error) =>
      console.error(`error inserting into LMS gradebok: ${error}`)
    );

  return new Response("outcome sent");
}
