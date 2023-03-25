<script>
  /** @type {import('./$types').PageData} */
  export let data;
</script>

<div class="navbar m-1 bg-neutral">
  <div class="navbar-start">
    <div class="dropdown">
      <label tabindex="0" class="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h8m-8 6h16"
          />
        </svg>
      </label>
      <ul
        tabindex="0"
        class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
      >
        <li><a>Item 1</a></li>
        <li tabindex="0">
          <a class="justify-between">
            ELA
            <svg
              class="fill-current"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"
              />
            </svg>
          </a>
          <ul class="p-2">
            <li><a>Activity Options</a></li>
            <li><a>Research 2</a></li>
          </ul>
        </li>
        <li><a>Assignments</a></li>
      </ul>
    </div>
    <a class="btn btn-ghost normal-case text-xl">ELA Platform</a>
  </div>
  <div class="navbar-center hidden lg:flex">
    <ul class="menu menu-horizontal px-1">
      <li><a>Home</a></li>
      <li tabindex="0">
        <a>
          ELA
          <svg
            class="fill-current"
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
          >
            <path
              d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"
            />
          </svg>
        </a>
        <ul class="p-2">
          <li><a>Activity Options</a></li>
          <li><a>Research</a></li>
          c
        </ul>
      </li>
      <li><a>Assignments</a></li>
    </ul>
  </div>
  <div class="navbar-end">
    <a class="btn" href="https://k-state.test.instructure.com/courses/1146"
      >Canvas</a
    >
  </div>
</div>

<div class="alert alert-info shadow-lg">
  <div>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      class="stroke-current flex-shrink-0 w-6 h-6"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
    <span>{data.post.lti}</span>
  </div>
</div>

<div class="card lg:card-side bg-base-100 shadow-xl">
  <figure>
    <img src="/images/codio.png" alt="Activity" style="width: 530px" />
  </figure>
  <div class="card-body">
    <h2 class="card-title">Codio</h2>
    <p>Select codio as your equivalent learning activity</p>
    <div class="card-actions justify-end">
      <button class="btn btn-primary">Start</button>
    </div>
  </div>
</div>

<div class="card lg:card-side bg-base-100 shadow-xl">
  <figure><img src="/images/connect.png" alt="Activity" /></figure>
  <div class="card-body">
    <h2 class="card-title">McGraw-Hill Connect (eTextbook)</h2>
    <p>Select eTextbook as your equivalent learning activity</p>
    <div class="card-actions justify-end">
      <button class="btn btn-primary">Start</button>
    </div>
  </div>
</div>
