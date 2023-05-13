import hmacSHA1 from "crypto-js/hmac-sha1";
import Base64 from "crypto-js/enc-base64";
import { makeQueryParams, getRandom, getBaseString } from "./utils";

const MAX_NONCE = 1000000;

export function OAuth1Signature({
  oauth_consumer_key,
  oauth_shared_secret,
  method = "POST",
  query_params = {},
  url = "",
  oauth_timestamp = Math.round(Date.now() / 1000), // current unix timestamp,
  nonce = getRandom(MAX_NONCE),
  oauth_version = "1.0",
}: {
  oauth_consumer_key: string;
  oauth_shared_secret: string;
  method?: string;
  query_params?: { [name: string]: any };
  url?: string;
  oauth_timestamp?: number;
  nonce?: number;
  oauth_version?: string;
}) {
  var nonce: number = getRandom(MAX_NONCE);

  const oauthParams = {
    ...query_params,
    oauth_consumer_key: oauth_consumer_key,
    oauth_nonce: nonce,
    oauth_signature_method: "HMAC-SHA1",
    oauth_timestamp: oauth_timestamp,
    oauth_version: oauth_version,
  };

  const encodedParams = makeQueryParams(oauthParams);
  const baseString = getBaseString(url, method, encodedParams);

  // BOOKMARK: this is for testing OAuth Signature problems. Uncomment this and compare the logged base string to the one provided by Saltire.
  // console.log(`baseString: ${baseString}`);

  const oauthSignature = hmacSHA1(
    baseString,
    `${oauth_shared_secret}&`
  ).toString(Base64);

  const signedParams: { [name: string]: any } = {
    ...oauthParams,
    oauth_signature: oauthSignature,
    url: url,
  };

  return signedParams;
}
