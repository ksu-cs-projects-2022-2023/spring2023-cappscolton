<script>
  /** @type {import('./$types').PageData} */
  export let data;
  export let lis_outcome_service_url = encodeURIComponent(
    data.post.lti.lis_outcome_service_url
  );
  export let lis_result_sourcedid = encodeURIComponent(
    data.post.lti.lis_result_sourcedid
  );
</script>

<div class="navbar m-1 bg-neutral">
  <div class="navbar-start">
    <div class="dropdown">
      <label tabindex="0" class="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h8m-8 6h16"
          />
        </svg>
      </label>
      <ul
        tabindex="0"
        class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
      >
        <li><a>Item 1</a></li>
        <li tabindex="0">
          <a class="justify-between">
            ELA
            <svg
              class="fill-current"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"
              />
            </svg>
          </a>
          <ul class="p-2">
            <li><a>Activity Options</a></li>
            <li><a>Research 2</a></li>
          </ul>
        </li>
        <li><a>Assignments</a></li>
      </ul>
    </div>
    <a class="btn btn-ghost normal-case text-xl">ELA Platform</a>
  </div>
  <div class="navbar-center hidden lg:flex">
    <ul class="menu menu-horizontal px-1">
      <li><a href="https://{data.post.platform.url}">Home</a></li>
      <li tabindex="0">
        <a>
          ELA
          <svg
            class="fill-current"
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
          >
            <path
              d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"
            />
          </svg>
        </a>
        <ul class="p-2">
          <li><a>Activity Options</a></li>
          <li><a>Research</a></li>
          c
        </ul>
      </li>
      <li><a>Assignments</a></li>
    </ul>
  </div>
  <div class="navbar-end">
    <a class="btn" href="https://k-state.test.instructure.com/courses/1146"
      >Canvas</a
    >
  </div>
</div>

<div class="alert alert-info shadow-lg">
  <div>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      class="stroke-current flex-shrink-0 w-6 h-6"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
    <span>{data.post.debug.oauth_signature}</span>
  </div>
</div>

<div class="card lg:card-side bg-base-100 shadow-xl">
  <figure>
    <img src="/images/codio.png" alt="Activity" style="width: 530px" />
  </figure>
  <div class="card-body">
    <h2 class="card-title">Codio</h2>
    <p>Select codio as your equivalent learning activity</p>
    <div class="card-actions justify-end">
      <form action={data.post.codio.url} method="post">
        <input
          type="hidden"
          name="context_id"
          value={data.post.lti.context_id}
        />
        <input
          type="hidden"
          name="context_label"
          value={data.post.lti.context_label}
        />
        <input
          type="hidden"
          name="context_title"
          value={data.post.lti.context_title}
        />
        <input
          type="hidden"
          name="custom_canvas_api_domain"
          value={data.post.lti.custom_canvas_api_domain}
        />
        <input
          type="hidden"
          name="custom_canvas_assignment_id"
          value={data.post.lti.custom_canvas_assignment_id}
        />
        <input
          type="hidden"
          name="custom_canvas_assignment_points_possible"
          value={data.post.lti.custom_canvas_assignment_points_possible}
        />
        <input
          type="hidden"
          name="custom_canvas_assignment_title"
          value={data.post.lti.custom_canvas_assignment_title}
        />
        <input
          type="hidden"
          name="custom_canvas_course_id"
          value={data.post.lti.custom_canvas_course_id}
        />
        <input
          type="hidden"
          name="custom_canvas_enrollment_state"
          value={data.post.lti.custom_canvas_enrollment_state}
        />
        <input
          type="hidden"
          name="custom_canvas_module_id"
          value={data.post.lti.custom_canvas_module_id}
        />
        <input
          type="hidden"
          name="custom_canvas_module_item_id"
          value={data.post.lti.custom_canvas_module_item_id}
        />
        <input
          type="hidden"
          name="custom_canvas_user_id"
          value={data.post.lti.custom_canvas_user_id}
        />
        <input
          type="hidden"
          name="custom_canvas_user_login_id"
          value={data.post.lti.custom_canvas_user_login_id}
        />
        <input
          type="hidden"
          name="custom_canvas_workflow_state"
          value={data.post.lti.custom_canvas_workflow_state}
        />
        <input
          type="hidden"
          name="ext_ims_lis_basic_outcome_url"
          value={data.post.lti.ext_ims_lis_basic_outcome_url}
        />
        <input
          type="hidden"
          name="ext_lti_assignment_id"
          value={data.post.lti.ext_lti_assignment_id}
        />
        <input
          type="hidden"
          name="ext_outcome_data_values_accepted"
          value={data.post.lti.ext_outcome_data_values_accepted}
        />
        <input
          type="hidden"
          name="ext_outcome_result_total_score_accepted"
          value={data.post.lti.ext_outcome_result_total_score_accepted}
        />
        <input
          type="hidden"
          name="ext_outcome_submission_needs_additional_review_accepted"
          value={data.post.lti
            .ext_outcome_submission_needs_additional_review_accepted}
        />
        <input
          type="hidden"
          name="ext_outcome_submission_prioritize_non_tool_grade_accepted"
          value={data.post.lti
            .ext_outcome_submission_prioritize_non_tool_grade_accepted}
        />
        <input
          type="hidden"
          name="ext_outcome_submission_submitted_at_accepted"
          value={data.post.lti.ext_outcome_submission_submitted_at_accepted}
        />
        <input
          type="hidden"
          name="ext_outcomes_tool_placement_url"
          value={data.post.lti.ext_outcomes_tool_placement_url}
        />
        <input type="hidden" name="ext_roles" value={data.post.lti.ext_roles} />
        <input
          type="hidden"
          name="launch_presentation_document_target"
          value={data.post.lti.launch_presentation_document_target}
        />
        <input
          type="hidden"
          name="launch_presentation_locale"
          value={data.post.lti.launch_presentation_locale}
        />
        <input
          type="hidden"
          name="launch_presentation_return_url"
          value={data.post.lti.launch_presentation_return_url}
        />
        <input
          type="hidden"
          name="lis_outcome_service_url"
          value={data.post.lti.lis_outcome_service_url}
        />
        <input
          type="hidden"
          name="lis_person_contact_email_primary"
          value={data.post.lti.lis_person_contact_email_primary}
        />
        <input
          type="hidden"
          name="lis_person_name_family"
          value={data.post.lti.lis_person_name_family}
        />
        <input
          type="hidden"
          name="lis_person_name_full"
          value={data.post.lti.lis_person_name_full}
        />
        <input
          type="hidden"
          name="lis_person_name_given"
          value={data.post.lti.lis_person_name_given}
        />
        <input
          type="hidden"
          name="lis_person_sourcedid"
          value={data.post.lti.lis_person_sourcedid}
        />
        <input
          type="hidden"
          name="lis_result_sourcedid"
          value={data.post.lti.lis_result_sourcedid}
        />
        <input
          type="hidden"
          name="lti_message_type"
          value={data.post.lti.lti_message_type}
        />
        <input
          type="hidden"
          name="lti_version"
          value={data.post.lti.lti_version}
        />
        <input
          type="hidden"
          name="oauth_callback"
          value={data.post.lti.oauth_callback}
        />
        <input
          type="hidden"
          name="resource_link_id"
          value={data.post.lti.resource_link_id}
        />
        <input
          type="hidden"
          name="resource_link_title"
          value={data.post.lti.resource_link_title}
        />
        <input type="hidden" name="roles" value={data.post.lti.roles} />
        <input
          type="hidden"
          name="tool_consumer_info_product_family_code"
          value={data.post.lti.tool_consumer_info_product_family_code}
        />
        <input
          type="hidden"
          name="tool_consumer_info_version"
          value={data.post.lti.tool_consumer_info_version}
        />
        <input
          type="hidden"
          name="tool_consumer_instance_contact_email"
          value={data.post.lti.tool_consumer_instance_contact_email}
        />
        <input
          type="hidden"
          name="tool_consumer_instance_guid"
          value={data.post.lti.tool_consumer_instance_guid}
        />
        <input
          type="hidden"
          name="tool_consumer_instance_name"
          value={data.post.lti.tool_consumer_instance_name}
        />
        <input type="hidden" name="user_id" value={data.post.lti.user_id} />

        <input
          type="hidden"
          name="user_image"
          value={data.post.lti.user_image}
        />

        <input
          type="hidden"
          name="oauth_signature_method"
          value={data.post.codio.oauth_signature_method}
        />

        <input
          type="hidden"
          name="oauth_consumer_key"
          value={data.post.codio.oauth_consumer_key}
        />
        <input
          type="hidden"
          name="oauth_nonce"
          value={data.post.codio.oauth_nonce}
        />
        <input
          type="hidden"
          name="oauth_timestamp"
          value={data.post.codio.oauth_timestamp}
        />
        <input
          type="hidden"
          name="oauth_version"
          value={data.post.codio.oauth_version}
        />
        <input
          type="hidden"
          name="oauth_signature"
          value={data.post.codio.oauth_signature}
        />
        <input
          type="hidden"
          name="codio_course_target_id"
          value={data.post.codio.codio_course_target_id}
        />
        <button type="submit" class="btn btn-primary">Send </button>
      </form>
    </div>
  </div>
</div>

<div class="card lg:card-side bg-base-100 shadow-xl">
  <figure>
    <img src="/images/codio.png" alt="Activity" style="width: 530px" />
  </figure>
  <div class="card-body">
    <h2 class="card-title">Mock</h2>
    <p>Send mock LTI Outcome</p>
    <div class="card-actions justify-end">
      <form
        action="/api/outcome?lis_outcome_service_url={lis_outcome_service_url}&lis_result_sourcedid={lis_result_sourcedid}"
        method="post"
      >
        <button type="submit" class="btn btn-primary">Send </button>
      </form>
    </div>
  </div>
</div>
