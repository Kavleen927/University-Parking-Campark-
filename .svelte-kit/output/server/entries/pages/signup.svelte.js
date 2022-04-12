import { c as create_ssr_component, d as subscribe, a as add_attribute, b as escape, v as validate_component } from "../../chunks/index-90541925.js";
import "../../chunks/firebase-b7bc24ed.js";
import "firebase/auth";
import "firebase/firestore";
import { w as writable } from "../../chunks/index-1c6dc227.js";
import { M as Modal } from "../../chunks/Modal-0bb04adc.js";
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
  let $modal, $$unsubscribe_modal;
  let username, email, password, phoneNumber, hofstraID, vehicle, license, securityAnswer, fullname;
  const modal = writable(null);
  $$unsubscribe_modal = subscribe(modal, (value) => $modal = value);
  $$result.css.add(css);
  $$unsubscribe_modal();
  return `<body class="${"svelte-155gykq"}"><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
    <div class="${"svelte-155gykq"}"><h1 id="${"title"}" class="${"svelte-155gykq"}">Create an Account</h1>
        <p>Username</p>
        <input type="${"text"}" class="${"svelte-155gykq"}"${add_attribute("value", username, 0)}>
        <p>Email</p>
        <input type="${"text"}" placeholder="${"Hofstra Email"}" class="${"svelte-155gykq"}"${add_attribute("value", email, 0)}>
        <p>Password </p>
        <input type="${"password"}" class="${"svelte-155gykq"}"${add_attribute("value", password, 0)}>
        <p id="${"errorCode"}" class="${"error pink-text center-align"}"></p>
        <p>Phone Number</p>
        <input type="${"tel"}" id="${"phone"}" name="${"phone"}" pattern="${"[0-9]" + escape(3) + "-[0-9]" + escape(3) + "-[0-9]" + escape(4)}" required maxlength="${"10"}" placeholder="${"123-455-6789"}" class="${"svelte-155gykq"}"${add_attribute("value", phoneNumber, 0)}>
        <p>Full Name</p>
        <input type="${"text"}" class="${"svelte-155gykq"}"${add_attribute("value", fullname, 0)}>
        <p>Hofstra ID</p>
        <input type="${"number"}" pattern="${"[0-9]" + escape(9)}" maxlength="${"9"}" placeholder="${"700222333"}" class="${"svelte-155gykq"}"${add_attribute("value", hofstraID, 0)}>
        <p>Vehicle Make, Model, Year</p>
        <input type="${"text"}" placeholder="${"Honda, Civic, 2000"}" class="${"svelte-155gykq"}"${add_attribute("value", vehicle, 0)}>
        <p>License Plate Number</p>
        <input type="${"text"}" maxlength="${"10"}" placeholder="${"ABC123"}" class="${"svelte-155gykq"}"${add_attribute("value", license, 0)}>
        <p>User Type</p>
        <div id="${"dropdown"}" class="${"svelte-155gykq"}"><select id="${"userType"}" name="${"userType"}"><option value="${"student"}">Student</option><option value="${"faculty"}">Faculty</option><option value="${"guest"}">Guest</option><option value="${"admin"}">Admin</option></select></div>
        <div id="${"adminAuth"}" class="${"svelte-155gykq"}"></div>
        <p>Security Question</p>
        <div id="${"dropdown"}" class="${"svelte-155gykq"}"><select id="${"question"}" name="${"question"}"><option value="${"1"}">Maiden name of your mother</option><option value="${"2"}">The name of your first pet</option><option value="${"3"}">In what city were you born?</option><option value="${"4"}">The make of your first car</option><option value="${"5"}">Favorite food as a child</option><option value="${"6"}">Month your best friend born was born</option><option value="${"7"}">Favorite movie</option><option value="${"8"}">Something you will never eat</option><option value="${"9"}">What was your first job?</option><option value="${"10"}">What was the make of your first car?</option><option value="${"11"}">Who is your favorite actor/actress?</option><option value="${"12"}">The name of your favorite book?</option></select></div>
        <input type="${"text"}" placeholder="${"Answer"}" class="${"svelte-155gykq"}"${add_attribute("value", securityAnswer, 0)}>
        <button class="${"svelte-155gykq"}">Create Account!</button>
        <button class="${"svelte-155gykq"}">Already have Account</button>
        <br><br><br><br><br></div></body>
${validate_component(Modal, "Modal").$$render($$result, { show: $modal }, {}, {})}`;
});
export { Signup as default, load };
