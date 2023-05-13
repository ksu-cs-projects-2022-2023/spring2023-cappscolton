<script lang="ts">
  import type { PageData } from "./$types";
  export let data: PageData;
</script>

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
    <span />
  </div>
</div>

<div>
  <div class="m-16 conatiner">
    <div class="">Hello!</div>

    <p>
      Welcome to the Equivalent Learning Activity Delivery Platform. This
      platform aims to help students and teachers apply Mastery Learning
      techniques. This application integrates with external activity providers
      as well as the LMS (Canvas) via the LTI protocol.
    </p>
  </div>

  <div class="alert alert-error shadow-lg">
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="stroke-current flex-shrink-0 h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        ><path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
        /></svg
      >
      <span>
        Please be aware that if you reached this page directly, you may not be
        able to access your assignments. Please use the LTI Links set up in
        Canvas by your instructor.</span
      >
    </div>
  </div>
  <p />
</div>
