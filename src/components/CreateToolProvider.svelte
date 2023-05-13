<script lang="ts">
  export let name = "";
  export let oauthSecret = "";
  export let oauthKey = "";
</script>

<h1 class="text-2xl font-bold">Create Tool Provider</h1>
<form action="/api/toolProvider" method="post">
  <table class="table-auto">
    <div class="my-2 container mx-auto">
      <label>
        <span class="label-text">Tool Name*</span>
        <input
          name="name"
          type="text"
          placeholder="Tool name"
          class="input input-bordered w-full max-w-xs"
          bind:value={name}
        />
      </label>
    </div>

    <div class="my-2 container mx-auto">
      <label>
        <span class="label-text">Secret*</span>
        <input
          name="oauthSecret"
          type="text"
          placeholder="OAuth 1.0 Client Secret"
          class="input input-bordered w-full max-w-xs"
          bind:value={oauthSecret}
        />
      </label>
    </div>

    <div class="my-2 container mx-auto">
      <label>
        <span class="label-text">Key*</span>
        <input
          name="oauthKey"
          type="text"
          placeholder="OAuth 1.0 Consumer Key"
          class="input input-bordered w-full max-w-xs"
          bind:value={oauthKey}
        />
      </label>
    </div>

    <div class="my-2">
      <input
        type="submit"
        class="btn btn-primary"
        value="Create Tool Provider"
        disabled={name == "" || oauthSecret == "" || oauthKey == ""}
      />
    </div>
  </table>
</form>
