// biblioteca do firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.7/firebase-app.js";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
} from "https://www.gstatic.com/firebasejs/9.6.7/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyBs0bb-TdEiPFumz5NtqRsEQdhCvDOLXXc",
  authDomain: "appyuh.firebaseapp.com",
  projectId: "appyuh",
  storageBucket: "appyuh.appspot.com",
  messagingSenderId: "435257846988",
  appId: "1:435257846988:web:cb74e4d3eaa4d2942fa669",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider(app);

document.querySelector("#googlelogin").addEventListener("click", () => {
  signInWithPopup(auth, provider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      console.log(user);
      // IdP data available using getAdditionalUserInfo(result)
      localStorage.setItem("user", JSON.stringify(user));
      localStorage.setItem("token", JSON.stringify(token));
      alert(`Seja bem-vindo ${user.displayName}`);
      setTimeout(() => {
        window.location.href = "dash1.html";
      }, 5000);
    })
    .catch((error) => {
      const errorMessage = error.message;
      console.log(errorMessage);
    });
});

document.querySelector("#login").addEventListener("click", () => {
  signInWithEmailAndPassword(auth, email, password)
    .then((result) => {
      const user = result.user;
      console.log(user);
      // IdP data available using getAdditionalUserInfo(result)
      localStorage.setItem("user", JSON.stringify(user));
      localStorage.setItem("token", JSON.stringify(token));
      alert(`Seja bem-vindo ${user.displayName}`);
      setTimeout(() => {
        window.location.href = "dash1.html";
      }, 5000);
    })
    .catch((error) => {
      console.log(error.message);
    });
});
