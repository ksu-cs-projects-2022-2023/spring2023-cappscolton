/** @type {import('./$types').PageLoad} */

export async function load({ fetch, url, params }) {
  return fetch("/api/admin/equivalency", {
    method: "POST",
  })
    .then((response) => response.json())
    .then((data) => {
      return data;
    });
}
