<script lang="ts">
  import EquivalencySelection from "./EquivalencySelection.svelte";
  export let equivalencySet: { id: string; concept: string }[];
  export let activities: { id: string; name: string; equivalencyId: string }[];
  export let action = "";
</script>

<div class="my-8 border-2 rounded-lg">
  <form id="myForm" action="/api/equivalency/{action}" method="post">
    <div class="overflow-x-auto">
      <table class="table table-zebra w-full">
        <!-- head -->
        <thead>
          <tr>
            <th />
            <th>Activity Title</th>
            <th />
            <th>Equivalency Concept</th>
          </tr>
        </thead>

        <tbody>
          {#each activities as activity, i}
            <tr>
              <!-- <label class="label cursor-pointer"> -->
              <th />
              <td>{activity.name}</td>
              <td />
              <td>
                <EquivalencySelection
                  activityId={activity.id}
                  equivalencySet={Object.assign(equivalencySet)}
                />
              </td>
            </tr>
          {/each}
        </tbody>
      </table>
    </div>
    <div class="">
      <!-- <input
        class="m-2 input input-bordered"
        type="text"
        placeholder="Concept*"
        readonly={action == "remove"}
        bind:value={concept}
      /> -->

      <input
        type="submit"
        class="m-2 btn btn-primary"
        value="{action} Equivalencies"
      />
    </div>
  </form>
</div>
