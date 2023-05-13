<script>
  export let tpDeleteName = "";
</script>

<div class="">
  <h1 class="text-2xl font-bold">Delete Tool Provider</h1>
  <form action="/api/toolProvider/delete" method="post">
    <table class="table-auto">
      <div class="my-2 container mx-auto">
        <label>
          <span class="label-text">Tool Provider Name*</span>
          <input
            name="name"
            type="text"
            placeholder="Tool Provider Name"
            class="input input-bordered w-full max-w-xs"
            bind:value={tpDeleteName}
          />
        </label>
      </div>

      <div class="my-2 container mx-auto">
        <input
          type="submit"
          class="btn content-center btn-primary"
          value="Delete Tool Provider"
          disabled={tpDeleteName == ""}
        />
      </div>

      <div />
    </table>
  </form>
</div>
