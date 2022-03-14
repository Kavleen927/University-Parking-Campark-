import { c as create_ssr_component, a as add_attribute } from "../../chunks/index-15d7494f.js";
import "../../chunks/firebase-660ebeb9.js";
import "firebase/auth";
import "firebase/app";
var signup_svelte_svelte_type_style_lang = "";
const css = {
  code: "#title.svelte-i9b4pc{text-align:center;font-weight:700}h1.svelte-i9b4pc{@apply font-semibold text-xl;}button.svelte-i9b4pc{@apply rounded-lg bg-pink-600 text-white w-full py-2 mt-2;}body.svelte-i9b4pc{@apply flex flex-col place-items-center place-content-center h-screen w-screen;}div.svelte-i9b4pc{@apply w-full max-w-xs flex flex-col gap-2;}input.svelte-i9b4pc{@apply w-full rounded p-1 border border-pink-500;}",
  map: null
};
const load = async ({ session }) => {
  if (!session.user.exists)
    return {};
  return { status: 302, redirect: "/" };
};
const Signup = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let username, email, password;
  $$result.css.add(css);
  return `<body class="${"svelte-i9b4pc"}"><div class="${"svelte-i9b4pc"}"><h1 id="${"title"}" class="${"svelte-i9b4pc"}">Create an Account</h1>
        <p>Username</p>
        <input type="${"text"}" class="${"svelte-i9b4pc"}"${add_attribute("value", username, 0)}>
        <p>Email</p>
        <input type="${"text"}" class="${"svelte-i9b4pc"}"${add_attribute("value", email, 0)}>
        <p>Password</p>
        <input type="${"password"}" class="${"svelte-i9b4pc"}"${add_attribute("value", password, 0)}>
        <button class="${"svelte-i9b4pc"}">Create Account!</button>
        <button class="${"svelte-i9b4pc"}">Already have Account</button></div>
</body>`;
});
export { Signup as default, load };
