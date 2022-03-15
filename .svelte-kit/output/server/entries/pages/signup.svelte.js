import { c as create_ssr_component, a as add_attribute, b as escape } from "../../chunks/index-737686e0.js";
import "../../chunks/firebase-54b9fcaa.js";
import "firebase/auth";
import "firebase/app";
var signup_svelte_svelte_type_style_lang = "";
const css = {
  code: "#title.svelte-155gykq{text-align:center;font-weight:700}h1.svelte-155gykq{@apply font-semibold text-xl;}button.svelte-155gykq{@apply rounded-lg bg-pink-600 text-white w-full py-2 mt-2;}body.svelte-155gykq{@apply flex flex-col place-items-center place-content-center h-screen w-screen;}div.svelte-155gykq{@apply w-full max-w-xs flex flex-col gap-2;}input.svelte-155gykq{@apply w-full rounded p-1 border border-pink-500;}#dropdown.svelte-155gykq{@apply w-full rounded p-1 border border-pink-500;}",
  map: null
};
const load = async ({ session }) => {
  if (!session.user.exists)
    return {};
  return { status: 302, redirect: "/login" };
};
const Signup = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let username, email, password, phoneNumber, hofstraID, vehicle, license;
  $$result.css.add(css);
  return `<body class="${"svelte-155gykq"}"><div class="${"svelte-155gykq"}"><h1 id="${"title"}" class="${"svelte-155gykq"}">Create an Account</h1>
        <p>Username</p>
        <input type="${"text"}" class="${"svelte-155gykq"}"${add_attribute("value", username, 0)}>
        <p>Email</p>
        <input type="${"text"}" class="${"svelte-155gykq"}"${add_attribute("value", email, 0)}>
        <p>Password </p>
        <input type="${"password"}" class="${"svelte-155gykq"}"${add_attribute("value", password, 0)}>
        <p>Phone Number</p>
        <input type="${"tel"}" id="${"phone"}" name="${"phone"}" pattern="${"[0-9]" + escape(3) + "-[0-9]" + escape(3) + "-[0-9]" + escape(4)}" required maxlength="${"10"}" class="${"svelte-155gykq"}"${add_attribute("value", phoneNumber, 0)}>
        <p>Hofstra ID (optional)</p>
        <input type="${"number"}" pattern="${"[0-9]" + escape(9)}" maxlength="${"9"}" class="${"svelte-155gykq"}"${add_attribute("value", hofstraID, 0)}>
        <p>Vehicle Make, Model, Year</p>
        <input type="${"text"}" class="${"svelte-155gykq"}"${add_attribute("value", vehicle, 0)}>
        <p>License Plate Number</p>
        <input type="${"text"}" maxlength="${"10"}" class="${"svelte-155gykq"}"${add_attribute("value", license, 0)}>
        <p>User Type</p>
        <div id="${"dropdown"}" class="${"svelte-155gykq"}"><select id="${"userType"}" name="${"userType"}"><option value="${"student"}">Student</option><option value="${"faculty"}">Faculty</option><option value="${"guest"}">Guest</option><option value="${"admin"}">Admin</option></select></div>
        <div id="${"adminAuth"}" class="${"svelte-155gykq"}"></div>
        <button class="${"svelte-155gykq"}">Create Account!</button>
        <button class="${"svelte-155gykq"}">Already have Account</button></div>
</body>`;
});
export { Signup as default, load };
