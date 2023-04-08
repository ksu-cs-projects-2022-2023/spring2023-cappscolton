export function makeQueryParams(oauthParams : { [name: string]: any }) {
	var test: {[name: string]: any} = Object.entries(oauthParams);
	function stringMapFunc(thing: any) { return encodeURIComponent(thing) }
	function entryMapFunc(entry: [string,any]) { return entry.map(stringMapFunc).join('=') };
	return test.map(entryMapFunc)
		.sort()
		.join('&');
}

export function getRandom(max: number) {
	return Math.floor(Math.random() * max);
}

export function getBaseString(url: string, method: string, params : any) {
	return [method.toUpperCase(), encodeURIComponent(url), encodeURIComponent(params)].join('&');
}

// modified from https://github.com/fernando-mf/oauth1-signature to work in ES Module with TS