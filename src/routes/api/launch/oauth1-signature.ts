import OAuth from "oauth-1.0a";
import hmacSHA1 from "crypto-js/hmac-sha512";
import Base64, { stringify } from 'crypto-js/enc-base64';

import { makeQueryParams, getRandom, getBaseString } from './utils';

const MAX_NONCE = 1000000;

export function OAuth1Signature({oauth_consumer_key,
								oauth_shared_secret, method = 'GET',
								query_params = {},
								url = '',
								oauth_timestamp = Math.round(Date.now() / 1000),
								nonce = getRandom(MAX_NONCE),
								oauth_version = '1.0'}
								:
								{oauth_consumer_key: string,
								oauth_shared_secret: string,
								method?: string,
								query_params?: { [name: string]: any },
								url?: string,
								oauth_timestamp?: number, // current unix timestamp,
								nonce?: number,
								oauth_version?: string}) {


	var nonce: number = getRandom(MAX_NONCE);

	const oauthParams = {
		...query_params,
		oauth_consumer_key: oauth_consumer_key,
		oauth_nonce: nonce,
		oauth_signature_method: 'HMAC-SHA1',
		oauth_timestamp: oauth_timestamp,
		oauth_version: oauth_version,
	}

	const encodedParams = makeQueryParams(oauthParams);
	const baseString = getBaseString(url, method, encodedParams);

	const oauthSignature = hmacSHA1(baseString, oauth_shared_secret).toString(Base64);
    
    // crypto
	// 	.createHmac('SHA1', qs.escape(consumerSecret) + '&')
	// 	.update(baseString, 'utf8')
	// 	.digest('base64');

	const signedParams : { [name: string]: any } = {
		...oauthParams,
		oauth_signature: oauthSignature,
	};

	return {
		params: signedParams,
		signature: oauthSignature,
	};
}

// different oauth lib
// const signature = new OAuth({
//   consumer: {
//     key: "9e148d82-db3b-4669-b38b-a103624600b6",
//     secret: await platform?.env.KV_CACHE.get("LTI_CLIENT_SECRET"),
//   },
//   signature_method: "HMAC-SHA1",
//   hash_function(base_string, key) {
//     return hmacSHA512(base_string, key).toString(CryptoJS.enc.Base64);
//   },
// });


// heavily modified from https://github.com/fernando-mf/oauth1-signature to work in ES Module with TS