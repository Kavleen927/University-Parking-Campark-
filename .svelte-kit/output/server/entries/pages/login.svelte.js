import { c as create_ssr_component, a as add_attribute } from "../../chunks/index-737686e0.js";
import "../../chunks/firebase-54b9fcaa.js";
import "firebase/auth";
import "firebase/app";
var login_svelte_svelte_type_style_lang = "";
const css = {
  code: "#title.svelte-1jc1ns9{text-align:center;font-weight:600}#ProjectTitle.svelte-1jc1ns9{text-align:center;font-weight:600;color:#ce2c76;font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif}h1.svelte-1jc1ns9{@apply font-semibold text-xl;}button.svelte-1jc1ns9{@apply rounded-lg bg-pink-600 text-white w-full py-2;}body.svelte-1jc1ns9{@apply flex flex-col place-items-center place-content-center h-screen w-screen;}div.svelte-1jc1ns9{@apply w-full max-w-xs flex flex-col gap-2;}input.svelte-1jc1ns9{@apply w-full rounded p-1 border border-pink-500;}",
  map: null
};
const load = async ({ session }) => {
  if (!session.user.exists)
    return {};
  return { status: 302, redirect: "/" };
};
const Login = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let email, password;
  $$result.css.add(css);
  return `<body class="${"svelte-1jc1ns9"}"><div class="${"log svelte-1jc1ns9"}"><h1 id="${"ProjectTitle"}" class="${"svelte-1jc1ns9"}">WELCOME TO CAMPARK </h1><br>
        <h1 id="${"title"}" class="${"svelte-1jc1ns9"}">Login</h1>
        <p>Email</p>
        <input type="${"text"}" class="${"svelte-1jc1ns9"}"${add_attribute("value", email, 0)}>
        <p>Password</p>
        <input type="${"password"}" class="${"svelte-1jc1ns9"}"${add_attribute("value", password, 0)}>
        <button class="${"svelte-1jc1ns9"}">Log me in!</button>
        <button class="${"svelte-1jc1ns9"}">Forgot Password!</button>
        <button class="${"svelte-1jc1ns9"}">Register me!</button></div>
</body>`;
});
export { Login as default, load };
