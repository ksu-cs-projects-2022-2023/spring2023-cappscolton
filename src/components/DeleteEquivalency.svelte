<script>
  export let deleteConcept = "";
</script>

<div class="">
  <h1 class="text-2xl font-bold">Delete Equivalency</h1>
  <form action="/api/equivalency/delete" method="post">
    <table class="table-auto">
      <div class="my-2 container mx-auto">
        <label>
          <span class="label-text">Equivalency Name*</span>
          <input
            name="name"
            type="text"
            placeholder="Equivalency Name"
            class="input input-bordered w-full max-w-xs"
            bind:value={deleteConcept}
          />
        </label>
      </div>

      <div class="my-2 container mx-auto">
        <input
          type="submit"
          class="btn content-center btn-primary"
          value="Delete Equivalency"
          disabled={deleteConcept == ""}
        />
      </div>
    </table>
  </form>
</div>
