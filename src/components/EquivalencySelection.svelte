<script lang="ts">
  export let activityId: string;
  export let equivalencySet: { id: string; concept: string }[];
</script>

<div>
  <select name={activityId} class="select select-bordered w-full max-w-xs"
    >\
    <option value="no" />
    {#each equivalencySet as equivalency}
      <option value={equivalency.id}>{equivalency.concept}</option>
    {/each}
  </select>
</div>
