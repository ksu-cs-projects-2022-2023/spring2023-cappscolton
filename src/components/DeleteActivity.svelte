<script>
  export let deleteName = "";
</script>

<div class="">
  <h1 class="text-2xl font-bold">Delete Activity</h1>
  <form action="/api/activity/delete" method="post">
    <table class="table-auto">
      <div class="my-2 container mx-auto">
        <label>
          <span class="label-text">Activity Name*</span>
          <input
            name="name"
            type="text"
            placeholder="Activity Name"
            class="input input-bordered w-full max-w-xs"
            bind:value={deleteName}
          />
        </label>
      </div>

      <div class="my-2 container mx-auto">
        <input
          type="submit"
          class="btn content-center btn-primary"
          value="Delete Activity"
          disabled={deleteName == ""}
        />
      </div>
    </table>
  </form>
</div>
