<script>
  import LtiParam from "./LtiParam.svelte";

  /** @type {import('./$types').PageData} */
  export let endpoint = "";
  export let parameters = [{ param_name: "", value: "" }];
</script>

<form action={endpoint} method="post">
  {#each parameters as parameter}
    <LtiParam value={parameter.value} name={parameter.param_name} />
  {/each}
  <button type="submit" class="btn btn-primary">Start </button>
</form>
