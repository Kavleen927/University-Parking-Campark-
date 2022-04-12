import { c as create_ssr_component } from "../../chunks/index-90541925.js";
var profile_svelte_svelte_type_style_lang = "";
const css = {
  code: "#title.svelte-bt2j9b{text-align:center;font-weight:700}h1.svelte-bt2j9b{@apply font-semibold text-xl;}button.svelte-bt2j9b{@apply rounded-lg bg-pink-600 text-white w-full py-2 mt-2;}body.svelte-bt2j9b{@apply flex flex-col place-items-center place-content-center;}div.svelte-bt2j9b{@apply w-full max-w-xs flex flex-col gap-2;}",
  map: null
};
const Profile = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<body class="${"svelte-bt2j9b"}"><div class="${"svelte-bt2j9b"}"><br><br><br>
        <h1 id="${"title"}" class="${"svelte-bt2j9b"}">Profile</h1> 
        <button class="${"svelte-bt2j9b"}">Edit Account Info</button></div>
</body>`;
});
export { Profile as default };
