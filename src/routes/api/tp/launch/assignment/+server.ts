import type { RequestHandler } from "./$types";
import { redirect } from "@sveltejs/kit";

// Receive launch request from canvas - redirect to platform page
export const POST = (async ({ params, request, url, platform }) => {
  // TODO: validate oauth signature from canvas (low prio)
  var formData = await request.formData();

  if (formData.get("user_id") == null) {
    console.log(
      "no user_id sent from canvas: you are probaby logged in as canvas admin"
    );
  }

  throw redirect(
    302,
    // params that I want to forward to the platform,
    // so that I can store them and use them to identify facts about the LMS / course / user
    // prettier-ignore
    `/platform/assignment/${
      encodeURIComponent(formData.get("lis_outcome_service_url")!.toString()
    )}/${
      encodeURIComponent(formData.get("lis_result_sourcedid")!.toString()
    )}/${
      encodeURIComponent(formData.get("roles")!.toString())
    }/${
      encodeURIComponent(formData.get("user_id")!.toString())
    }/${
      encodeURIComponent(formData.get("context_id")!.toString())
    }/${
      encodeURIComponent(formData.get("lis_person_name_family")!.toString())
    }/${
      encodeURIComponent(formData.get("lis_person_name_given")!.toString())
    }/${
      encodeURIComponent(formData.get("lis_person_contact_email_primary")!.toString())
    }`
  );
}) satisfies RequestHandler;
