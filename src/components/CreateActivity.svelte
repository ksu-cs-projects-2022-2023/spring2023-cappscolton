<script lang="ts">
  export let name = "";
  export let url = "";
  export let toolProviderId = "";
  export let toolProviderSet: { id: string; name: string }[] = [];
</script>

<h1 class="text-2xl font-bold">Create Activity</h1>
<form action="/api/activity" method="post">
  <table class="table-auto">
    <div class="my-2 container mx-auto">
      <label>
        <span class="label-text">Activity Name*</span>
        <input
          name="name"
          type="text"
          placeholder="Activity name"
          class="input input-bordered w-full max-w-xs"
          bind:value={name}
        />
      </label>
    </div>

    <div class="my-2 container mx-auto">
      <label>
        <span class="label-text">Activity URL*</span>
        <input
          name="ltiUrl"
          type="text"
          placeholder="LTI URL"
          class="input input-bordered w-full max-w-xs"
          bind:value={url}
        />
      </label>
    </div>

    <div class="my-2 container mx-auto">
      <label>
        <span class="label-text">Correctness Threshold</span>
        <input
          name="correctnessThreshold"
          type="number"
          placeholder="100"
          value="100"
          min="0"
          max="100"
          class="input input-bordered w-full max-w-xs"
        />
      </label>
    </div>

    <div class="my-2 container mx-auto">
      <div>
        <label>
          <span class="label-text">Tool Provider*</span>
          <select
            name="toolProviderId"
            bind:value={toolProviderId}
            class="select select-bordered w-full max-w-xs"
            >\
            <option value="no" />
            {#each toolProviderSet as toolProvider}
              <option value={toolProvider.id}>{toolProvider.name}</option>
            {/each}
          </select>
        </label>
      </div>
    </div>
  </table>

  <div class="my-2">
    <input
      type="submit"
      class="btn btn-primary"
      value="Create Activity"
      disabled={name == "" || url == "" || toolProviderId == ""}
    />
  </div>
</form>
