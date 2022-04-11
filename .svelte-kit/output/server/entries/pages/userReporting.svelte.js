import { c as create_ssr_component, d as subscribe, a as add_attribute, v as validate_component } from "../../chunks/index-1f8e348f.js";
import "../../chunks/firebase-b7bc24ed.js";
import "firebase/firestore";
import { M as Modal, w as writable } from "../../chunks/Modal-a61ff8e0.js";
import "firebase/app";
import "firebase/auth";
var userReporting_svelte_svelte_type_style_lang = "";
const css = {
  code: "#title.svelte-1tka8fl{text-align:center;font-weight:700}h1.svelte-1tka8fl{@apply font-semibold text-xl;}button.svelte-1tka8fl{@apply rounded-lg bg-pink-600 text-white w-full py-2 mt-2;}body.svelte-1tka8fl{@apply flex flex-col place-items-center place-content-center h-screen w-screen;}div.svelte-1tka8fl{@apply w-full max-w-xs flex flex-col gap-2;}input.svelte-1tka8fl{@apply w-full rounded p-1 border border-pink-500;}#detailbox.svelte-1tka8fl{height:max-content;overflow:auto}",
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
const UserReporting = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $modal, $$unsubscribe_modal;
  let date, title, plateNumReporting, reportDetails;
  const modal = writable(null);
  $$unsubscribe_modal = subscribe(modal, (value) => $modal = value);
  $$result.css.add(css);
  $$unsubscribe_modal();
  return `<body class="${"svelte-1tka8fl"}"><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
    <div class="${"svelte-1tka8fl"}"><h1 id="${"title"}" class="${"svelte-1tka8fl"}">Report a Complaint</h1>
        <p>Date</p>
        <input type="${"text"}" placeholder="${"--/--/----"}" required class="${"svelte-1tka8fl"}"${add_attribute("value", date, 0)}>
        <p>Title</p>
        <input type="${"text"}" required class="${"svelte-1tka8fl"}"${add_attribute("value", title, 0)}>
        <p>What is the license plate number of the vehicle you are reporting? </p>
        <input type="${"text"}" required class="${"svelte-1tka8fl"}"${add_attribute("value", plateNumReporting, 0)}>
        <p>State the details of the issue </p>
        <input type="${"text"}" id="${"detailbox"}" required maxlength="${"1000"}" class="${"svelte-1tka8fl"}"${add_attribute("value", reportDetails, 0)}>

        
        <button class="${"svelte-1tka8fl"}">SUBMIT REPORT</button>
        <br><br><br><br><br></div></body>
${validate_component(Modal, "Modal").$$render($$result, { show: $modal }, {}, {})}`;
});
export { UserReporting as default, load };
