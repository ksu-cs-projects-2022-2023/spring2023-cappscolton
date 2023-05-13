<script>
  import { onMount } from "svelte";
  import Navbar from "$components/Navbar.svelte";

  // onMount(() => {
  //   var form = document.getElementById("myForm");
  //   // @ts-ignore
  //   form.onsubmit = async function (event) {
  //     // @ts-ignore
  //     var formData = new FormData(form);
  //     console.log(JSON.stringify(Object.fromEntries(formData)));
  //     console
  //       .log
  //       // await fetch("/api/admin/equivalency/set", { method: "post" })
  //       ();
  //     return false;
  //   };
  // });

  /** @type {import('./$types').PageData} */
  // @ts-ignore
  export let data;
</script>

<Navbar />

<form id="myForm" action="/api/admin/equivalency/set" method="post">
  {#each data.activities as activity}
    <div class="form-control">
      <label class="label cursor-pointer">
        <span class="label-text">{activity.activity_name}</span>
        <input
          name={activity.activity_id}
          type="checkbox"
          checked={true}
          class="checkbox checkbox-primary"
        />
      </label>
    </div>
  {/each}

  <input type="submit" class="btn btn-primary" value="Submit" />
</form>
