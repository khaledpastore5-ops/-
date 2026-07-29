import { auth } from "./firebase.js";

import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/12.1.0/firebase-auth.js";

const email = document.getElementById("email");
const password = document.getElementById("password");

document.getElementById("signupBtn").onclick = async () => {
  try {
    await createUserWithEmailAndPassword(
      auth,
      email.value,
      password.value
    );

    alert("تم إنشاء الحساب بنجاح ✅");

  } catch (error) {
    alert(error.message);
  }
};

document.getElementById("loginBtn").onclick = async () => {
  try {
    const user = await signInWithEmailAndPassword(
      auth,
      email.value,
      password.value
    );

    alert("تم تسجيل الدخول بنجاح");
    console.log(user.user.email);

  } catch (error) {
    alert(error.message);
  }
};
