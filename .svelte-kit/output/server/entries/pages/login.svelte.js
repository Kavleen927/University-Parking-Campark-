import { c as create_ssr_component, a as add_attribute } from "../../chunks/index-15d7494f.js";
import "../../chunks/firebase-660ebeb9.js";
import "firebase/auth";
import "firebase/app";
var login_svelte_svelte_type_style_lang = "";
const css = {
  code: "#title.svelte-owr8zz{text-align:center;font-weight:600}#ProjectTitle.svelte-owr8zz{text-align:center;font-weight:600;color:#ce2c76;font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif}h1.svelte-owr8zz{@apply font-semibold text-xl;}button.svelte-owr8zz{@apply rounded-lg bg-pink-600 text-white w-full py-2 mt-2;}body.svelte-owr8zz{@apply flex flex-col place-items-center place-content-center h-screen w-screen;}div.svelte-owr8zz{@apply w-full max-w-xs flex flex-col gap-2;}input.svelte-owr8zz{@apply w-full rounded p-1 border border-pink-500;}",
  map: null
};
const load = async ({ session }) => {
  if (!session.user.exists)
    return {};
  return { status: 302, redirect: "/login" };
};
const Login = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let email, password;
  $$result.css.add(css);
  return `<body class="${"svelte-owr8zz"}"><div class="${"log svelte-owr8zz"}"><h1 id="${"ProjectTitle"}" class="${"svelte-owr8zz"}">WELCOME TO CAMPARK </h1><br>
        <h1 id="${"title"}" class="${"svelte-owr8zz"}">Login</h1>
        <p>Email</p>
        <input type="${"text"}" class="${"svelte-owr8zz"}"${add_attribute("value", email, 0)}>
        <p>Password</p>
        <input type="${"password"}" class="${"svelte-owr8zz"}"${add_attribute("value", password, 0)}>
        <button class="${"svelte-owr8zz"}">Log me in!</button>
        <button class="${"svelte-owr8zz"}">Forgot Password!</button>
        <button class="${"svelte-owr8zz"}">Register me!</button></div>
</body>`;
});
export { Login as default, load };
