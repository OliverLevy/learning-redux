import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { login } from "../actions";
import { firebaseConfig } from "../config";
import * as firebase from "firebase/app";
import "firebase/auth";

firebase.initializeApp(firebaseConfig);

var provider = new firebase.auth.GoogleAuthProvider();

function signIn() {
  firebase
    .auth()
    .signInWithPopup(provider)
    .then(function (result) {
      // This gives you a Google Access Token. You can use it to access the Google API.
      var token = result.credential.accessToken;
      // The signed-in user info.
      var user = result.user;

      console.log(token);
      console.log(user);
      return user;
      // ...
    })
    .catch(function (error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // The email of the user's account used.
      var email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      var credential = error.credential;
      // ...
    });
}

const signOut = () => {
  firebase
    .auth()
    .signOut()
    .then(function () {
      // Sign-out successful.
      console.log("sign out successful");
    })
    .catch(function (error) {
      // An error happened.
    });
};

function Login() {
  const isLogged = useSelector((state) => state.isLogged);
  const dispatch = useDispatch();
  return (
    <div>
      <button onClick={() => signIn()}>Login</button>
      <button onClick={() => signOut()}>Sign Out</button>
      {isLogged ? <p>users info</p> : ""}
    </div>
  );
}

export default Login;
