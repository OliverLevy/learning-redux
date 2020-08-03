import React from "react";
import "./App.scss";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./actions";
import { firebaseConfig } from "./config";
import * as firebase from "firebase/app";
import "firebase/auth";

firebase.initializeApp(firebaseConfig);

var provider = new firebase.auth.GoogleAuthProvider();

const signIn = () => {
  firebase
    .auth()
    .signInWithPopup(provider)
    .then(function (result) {
      // This gives you a Google Access Token. You can use it to access the Google API.
      var token = result.credential.accessToken;
      // The signed-in user info.
      var user = result.user;
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
};

function App() {
  const counter = useSelector((state) => state.counter);
  const isLogged = useSelector((state) => state.isLogged);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <h1>Learning Redux</h1>
      <h2>counter {counter}</h2>
      <button onClick={() => dispatch(increment(2))}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>

      <button onClick={() => signIn()}>Login</button>
      {isLogged ? <p>users info</p> : ""}
    </div>
  );
}

export default App;
