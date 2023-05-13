<script lang="ts">
  import EquivalenciesTable from "$components/EquivalenciesTable.svelte";
  import type { PageData } from "./$types";
  export let data: PageData;

  import { onMount } from "svelte";

  onMount(async () => {
    for (const equivalency of data.activeEquivalencies) {
      for (const activity of equivalency.activities) {
        var selectInput = document.getElementsByName(activity.id)[0];
        // @ts-ignore
        selectInput.value = equivalency.id;
      }
    }
  });
</script>

<EquivalenciesTable
  equivalencySet={data.equivalencySet}
  action="assign"
  activities={data.unassignedActivities}
/>

{#each data.activeEquivalencies as equivalency}
  <div class="">
    <EquivalenciesTable
      equivalencySet={data.equivalencySet}
      action="remove"
      activities={equivalency.activities}
    />
  </div>
{/each}
