<script lang="ts">
  import CreateActivity from "$components/CreateActivity.svelte";
  import CreateEquivalency from "$components/CreateEquivalency.svelte";
  import CreateToolProvider from "$components/CreateToolProvider.svelte";
  import DeleteActivity from "$components/DeleteActivity.svelte";
  import DeleteEquivalency from "$components/DeleteEquivalency.svelte";
  import DeleteToolProvider from "$components/DeleteToolProvider.svelte";
  import type { PageData } from "./$types";
  export let data: PageData;

  let deleteName = "";
  let name = "";
  let url = "";

  let concept = "";
  let deleteConcept = "";

  let toolProviderName = "";
  let oauthSecret = "";
  let oauthKey = "";
  let tpDeleteName = "";
</script>

<div class="flex container mx-auto">
  <div class="mx-12">
    <div class="my-12">
      <CreateActivity {name} {url} toolProviderSet={data.toolProviderSet} />
    </div>
    <div class="my-12">
      <DeleteActivity {deleteName} />
    </div>
  </div>

  <div class="mx-12">
    <div class="my-12">
      <CreateEquivalency {concept} />
    </div>
    <div class="my-12">
      <DeleteEquivalency {deleteConcept} />
    </div>
  </div>

  <div class="mx-12">
    <div class="my-12">
      <CreateToolProvider name={toolProviderName} {oauthSecret} {oauthKey} />
    </div>
    <div class="my-12">
      <DeleteToolProvider {tpDeleteName} />
    </div>
  </div>
</div>
