import { c as create_ssr_component, e as each, a as add_attribute, b as escape, d as subscribe, v as validate_component } from "../../chunks/index-737686e0.js";
import { s as session } from "../../chunks/stores-1c378009.js";
var app = "";
var navigation_svelte_svelte_type_style_lang = "";
const css = {
  code: "header.svelte-1io535u{background-color:#ce2c76}",
  map: null
};
const Navigation = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const navigation = [
    { href: "/", name: "Home" },
    { href: "/profile", name: "Profile" },
    {
      href: "/parkinglots",
      name: "Parking Lots"
    }
  ];
  $$result.css.add(css);
  return `

<header class="${"svelte-1io535u"}"><nav class="${"container mx-auto"}"><div class="${"w-full py-4 flex items-center justify-around"}"><div class="${"flex items-center"}"><div class="${"ml-10 space-x-8"}">${each(navigation, (link) => {
    return `<a${add_attribute("href", link.href, 0)} class="${"text-lg font-medium text-white hover:text-pink-50"}">${escape(link.name)}
						</a>`;
  })}</div></div>
			<div class="${"ml-10 space-x-4"}"><button class="${"inline-block bg-pink-400 py-2 px-4 border border-transparent rounded-md text-base font-medium text-white hover:bg-opacity-75"}">Sign out </button></div></div></nav></header>


    `;
});
const _layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $session, $$unsubscribe_session;
  $$unsubscribe_session = subscribe(session, (value) => $session = value);
  $$unsubscribe_session();
  return `${$$result.head += `${$$result.title = `<title>Campark</title>`, ""}`, ""}


${$session.user.exists ? `${validate_component(Navigation, "Navigation").$$render($$result, {}, {}, {})}` : ``}

${slots.default ? slots.default({}) : ``}`;
});
export { _layout as default };
