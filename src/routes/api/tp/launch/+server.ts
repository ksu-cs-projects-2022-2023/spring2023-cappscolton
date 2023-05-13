import type { RequestHandler } from "./$types";
import { redirect } from "@sveltejs/kit";

// Receive launch request from canvas - redirect to platform page
export const POST = (async () => {
  // TODO: validate oauth signature from canvas (low prio)
  throw redirect(302, "/platform");
}) satisfies RequestHandler;
