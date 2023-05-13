<script lang="ts">
  import LtiForm from "$components/LtiForm.svelte";
  import { each } from "svelte/internal";
  import type { PageData } from "./$types";
  export let data: PageData;
</script>

{#each data.data as elaData}
  <div class="card lg:card-side bg-base-100 shadow-xl">
    <figure>
      <img
        src="/images/{elaData.tool}.png"
        alt="Activity"
        style="width: 530px"
      />
    </figure>
    <div class="card-body">
      <h2 class="card-title">
        {elaData.name}
      </h2>
      <h2 class="card-title">
        concept: {elaData.concept}
      </h2>
      <p>
        Select {elaData.name} in {elaData.tool} as your equivalent learning activity
      </p>
      <div class="card-actions justify-end">
        <!-- prettier-ignore -->
        <LtiForm
        endpoint={`${elaData.ltiUrl}`}
        parameters={
        
          [
            ...Object.entries(elaData.value.oauth).map(([x, y]) => ({
            param_name: x,
            value: y,})),

            ...Object.entries(elaData.value.lti).map(([x, y]) => ({
            param_name: x,
            value: y,}))
          ]
          
        }/>
      </div>
    </div>
  </div>
{/each}
