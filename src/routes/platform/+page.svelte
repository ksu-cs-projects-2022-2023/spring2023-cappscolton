<script>
  import Navbar from "./components/Navbar.svelte";
  import LtiParam from "./components/LtiParam.svelte";
  import LtiForm from "./components/LtiForm.svelte";
  /** @type {import('./$types').PageData} */
  export let data;
</script>

<Navbar {data} />

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
      <!-- prettier-ignore -->
      <LtiForm
        endpoint={data.post.codio.url}
        parameters={
        
          [
            ...Object.entries(data.post.codio).map(([x, y]) => ({
            param_name: x,
            value: y,})),

            ...Object.entries(data.post.lti).map(([x, y]) => ({
            param_name: x,
            value: y,}))
          ]
          
        }/>
    </div>
  </div>
</div>

<div class="card lg:card-side bg-base-100 shadow-xl">
  <figure><img src="/images/connect.png" alt="Activity" /></figure>
  <div class="card-body">
    <h2 class="card-title">McGraw-Hill Connect (eTextbook)</h2>
    <p>Select eTextbook as your equivalent learning activity</p>
    <div class="card-actions justify-end">
      <button class="btn btn-primary">Start</button>
    </div>
  </div>
</div>

<div class="card lg:card-side bg-base-100 shadow-xl">
  <figure><img src="/images/connect.png" alt="Activity" /></figure>
  <div class="card-body">
    <h2 class="card-title">Saltire</h2>
    <p>Select Saltire (debug) as your equivalent learning activity</p>
    <div class="card-actions justify-end">
      <!-- prettier-ignore -->
      <LtiForm
        endpoint={data.post.debug.url}
        parameters={
        
          [
            ...Object.entries(data.post.debug).map(([x, y]) => ({
            param_name: x,
            value: y,})),

            ...Object.entries(data.post.lti).map(([x, y]) => ({
            param_name: x,
            value: y,}))
          ]
          
        }/>

      <form action={data.post.debug.url} method="post">
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
          name="custom_canvas_user_login_id"
          value={data.post.lti.custom_canvas_user_login_id}
        />
        <input type="hidden" name="ext_roles" value={data.post.lti.ext_roles} />
        <input
          type="hidden"
          name="launch_presentation_document_target"
          value={data.post.lti.launch_presentation_document_target}
        />
        <input
          type="hidden"
          name="launch_presentation_height"
          value={data.post.lti.launch_presentation_height}
        />
        <input
          type="hidden"
          name="launch_presentation_locale"
          value={data.post.lti.launch_presentation_locale}
        />
        <input
          type="hidden"
          name="launch_presentation_width"
          value={data.post.lti.launch_presentation_width}
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
          name="tool_consumer_instance_contact_email"
          value={data.post.lti.tool_consumer_instance_contact_email}
        />
        <input
          type="hidden"
          name="tool_consumer_instance_guid"
          value={data.post.lti.tool_consumer_instance_guid}
        />
        <input type="hidden" name="user_id" value={data.post.lti.user_id} />
        <input
          type="hidden"
          name="user_image"
          value={data.post.lti.user_image}
        />
        <input
          type="hidden"
          name="custom_canvas_api_domain"
          value={data.post.lti.custom_canvas_api_domain}
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
          name="custom_canvas_user_id"
          value={data.post.lti.custom_canvas_user_id}
        />
        <input
          type="hidden"
          name="launch_presentation_return_url"
          value={data.post.lti.launch_presentation_return_url}
        />
        <input
          type="hidden"
          name="oauth_callback"
          value={data.post.lti.oauth_callback}
        />
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
          name="custom_canvas_workflow_state"
          value={data.post.lti.custom_canvas_workflow_state}
        />
        <input
          type="hidden"
          name="tool_consumer_instance_name"
          value={data.post.lti.tool_consumer_instance_name}
        />
        <input
          type="hidden"
          name="oauth_consumer_key"
          value={data.post.debug.oauth_consumer_key}
        />
        <input
          type="hidden"
          name="oauth_nonce"
          value={data.post.debug.oauth_nonce}
        />
        <input
          type="hidden"
          name="oauth_signature_method"
          value={data.post.debug.oauth_signature_method}
        />
        <input
          type="hidden"
          name="oauth_timestamp"
          value={data.post.debug.oauth_timestamp}
        />
        <input
          type="hidden"
          name="oauth_version"
          value={data.post.debug.oauth_version}
        />
        <input
          type="hidden"
          name="oauth_signature"
          value={data.post.debug.oauth_signature}
        />
        <button type="submit" class="btn btn-primary">Start </button>
      </form>
    </div>
  </div>
</div>
