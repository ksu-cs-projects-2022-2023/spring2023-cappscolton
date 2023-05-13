import type { PageServerLoad } from "./$types";
import { OAuth1Signature } from "../../lib/oauth/oauth1-signature.js";

type OutputType = {};

// Runs prepare some data for rendering on ELA Platform home screen
export const load: PageServerLoad<OutputType> = async ({}) => {};
