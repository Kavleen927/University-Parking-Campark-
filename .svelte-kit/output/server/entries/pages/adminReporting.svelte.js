import { c as create_ssr_component, d as subscribe, v as validate_component } from "../../chunks/index-90541925.js";
import "../../chunks/firebase-b7bc24ed.js";
import "firebase/firestore";
import { M as Modal } from "../../chunks/Modal-0bb04adc.js";
import "firebase/app";
import "firebase/auth";
var adminReporting_svelte_svelte_type_style_lang = "";
const css = {
  code: "#title.svelte-1tka8fl{text-align:center;font-weight:700}h1.svelte-1tka8fl{@apply font-semibold text-xl;}body.svelte-1tka8fl{@apply flex flex-col place-items-center place-content-center h-screen w-screen;}div.svelte-1tka8fl{@apply w-full max-w-xs flex flex-col gap-2;}",
  map: null
};
const load = async ({ session }) => {
  if (!session.user.exists)
    return {};
  return {
    status: 302,
    redirect: "/login"
  };
};
const AdminReporting = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $modal, $$unsubscribe_modal;
  $$unsubscribe_modal = subscribe(modal, (value) => $modal = value);
  $$result.css.add(css);
  $$unsubscribe_modal();
  return `+





<body class="${"svelte-1tka8fl"}"><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
    <div class="${"svelte-1tka8fl"}"><h1 id="${"title"}" class="${"svelte-1tka8fl"}">Complaints Reported</h1>     
        
        <br><br><br><br><br></div></body>


${validate_component(Modal, "Modal").$$render($$result, { show: $modal }, {}, {})}`;
});
export { AdminReporting as default, load };
