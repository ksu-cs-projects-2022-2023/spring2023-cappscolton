<script lang="ts">
  import RadialMastery from "$components/RadialMastery.svelte";

  export let mastery = 0;
  export let n = 3;
  export let masteryThreshold = 90;
  export let name = "";
</script>

<tr>
  <th>
    <label>
      <input type="checkbox" class="checkbox" checked={true} />
    </label>
  </th>
  <td>
    <div class="flex items-center space-x-3">
      <div class="avatar">
        <div class="mask mask-squircle w-12 h-12">
          <!-- <img src="" alt="Avatar Tailwind CSS Component" /> -->
        </div>
      </div>
      <div>
        <div class="font-bold">{name}</div>
      </div>
    </div>
  </td>
  <td>
    Beginner
    <!-- {mastery < masteryThreshold / n
      ? "Beginner"
      : mastery < masteryThreshold / (n / 2)
      ? "Intermediate"
      : "Master"} -->
    <br />
    <span class="badge badge-ghost badge-sm">Student</span>
  </td>
  <td>
    <RadialMastery value="30" />
  </td>
  <th>
    <button class="btn btn-ghost btn-xs">Report</button>
  </th>
</tr>
