<script>
  import RadialMastery from "./RadialMastery.svelte";
  import RowComponent from "./RowComponent.svelte";
</script>

<div class="overflow-x-auto w-full">
  <table class="table w-full">
    <!-- head -->
    <thead>
      <tr>
        <th>
          <label>
            <input type="checkbox" class="checkbox" />
          </label>
        </th>
        <th>Name</th>
        <th>Mastery Stage</th>
        <th>Mastery</th>
        <th />
      </tr>
    </thead>
    <tbody>
      <!-- row 1 -->
      <tr>
        <th>
          <label>
            <input type="checkbox" class="checkbox" />
          </label>
        </th>
        <td>
          <div class="flex items-center space-x-3">
            <div class="avatar">
              <div class="mask mask-squircle w-12 h-12">
                <img src="" alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div class="font-bold">Colton Capps</div>
            </div>
          </div>
        </td>
        <td>
          Beginner
          <br />
          <span class="badge badge-ghost badge-sm">Student</span>
        </td>
        <td>
          <RadialMastery value="50" />
        </td>
        <th>
          <button class="btn btn-ghost btn-xs">Report</button>
        </th>
      </tr>
      <!-- row 2 -->
      <tr>
        <th>
          <label>
            <input type="checkbox" class="checkbox" />
          </label>
        </th>
        <td>
          <div class="flex items-center space-x-3">
            <div class="avatar">
              <div class="mask mask-squircle w-12 h-12">
                <img src="" alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div class="font-bold">Test Student 2</div>
            </div>
          </div>
        </td>
        <td>
          Beginner
          <br />
          <span class="badge badge-ghost badge-sm">Student</span>
        </td>
        <td>
          <RadialMastery value="50" />
        </td>
        <th>
          <button class="btn btn-ghost btn-xs">Report</button>
        </th>
      </tr>
      <!-- row 3 -->
      <tr>
        <th>
          <label>
            <input type="checkbox" class="checkbox" />
          </label>
        </th>
        <td>
          <div class="flex items-center space-x-3">
            <div class="avatar">
              <div class="mask mask-squircle w-12 h-12">
                <img src="" alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div class="font-bold">Test Student 3</div>
            </div>
          </div>
        </td>
        <td>
          Beginner
          <br />
          <span class="badge badge-ghost badge-sm">Student</span>
        </td>
        <td>
          <RadialMastery value="50" />
        </td>
        <th>
          <button class="btn btn-ghost btn-xs">Report</button>
        </th>
      </tr>
      <!-- row 4 -->
      <tr>
        <th>
          <label>
            <input type="checkbox" class="checkbox" />
          </label>
        </th>
        <td>
          <div class="flex items-center space-x-3">
            <div class="avatar">
              <div class="mask mask-squircle w-12 h-12">
                <img src="" alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div class="font-bold">Test Student 4</div>
              <div class="text-sm opacity-50">K-State</div>
            </div>
          </div>
        </td>
        <td>
          Beginner
          <br />
          <span class="badge badge-ghost badge-sm">Student</span>
        </td>
        <td>
          <RadialMastery value="50" />
        </td>
        <th>
          <button class="btn btn-ghost btn-xs">Report</button>
        </th>
      </tr>

      <!-- <RowComponent
        name="Colton Capps"
        n={3}
        mastery={30}
        masteryThreshold={90}
      /> -->
    </tbody>
    <!-- foot -->
    <tfoot>
      <tr>
        <th />
        <th>Name</th>
        <th>Mastery Stage</th>
        <th>Mastery</th>
        <th />
      </tr>
    </tfoot>
  </table>
</div>
