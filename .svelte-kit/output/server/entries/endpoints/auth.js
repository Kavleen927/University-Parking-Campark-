import "../../chunks/firebase-admin-2c361b1d.js";
import admin from "firebase-admin";
const expiresIn = 1e3 * 60 * 60 * 24 * 7;
const secure = "Secure;";
const post = async (event) => {
  const { idToken } = await event.request.json();
  try {
    const sessionCookie = await admin.auth().createSessionCookie(idToken, { expiresIn });
    return {
      status: 200,
      headers: {
        "set-cookie": `session=${sessionCookie}; Max-Age=${expiresIn}; Path=/; HttpOnly; ${secure};`
      }
    };
  } catch {
    return {
      status: 500
    };
  }
};
const del = async (_) => {
  return {
    status: 200,
    headers: {
      "set-cookie": `session=_; Path=/; HttpOnly; Max-Age=0; ${secure};`
    }
  };
};
export { del, post };
