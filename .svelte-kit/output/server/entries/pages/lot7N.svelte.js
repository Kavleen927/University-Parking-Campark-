import { c as create_ssr_component } from "../../chunks/index-1f8e348f.js";
var lot7N_svelte_svelte_type_style_lang = "";
const css = {
  code: "#title.svelte-14yrrbe{text-align:center;font-weight:700}h1.svelte-14yrrbe{@apply font-semibold text-xl;}#map.svelte-14yrrbe{height:100%}",
  map: null
};
const Lot7N = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<body><div id="${"title"}" class="${"svelte-14yrrbe"}"><br><br><br>
        <h1 class="${"svelte-14yrrbe"}">Parking Lot 7N</h1>
        <p>This is lot 7N</p></div>
    <div id="${"map"}" class="${"svelte-14yrrbe"}"></div>
</body>`;
});
export { Lot7N as default };
