import React, { useState } from "react";
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";
import jwt_decode from "jwt-decode";
import User from "./User.js";

function Auth() {
  const [userData, setUserData] = useState("");

  //* Local Storage set Items & get Items.
  if (userData) {
    window.localStorage.setItem("nme", userData.name);
    window.localStorage.setItem("eml", userData.email);
    window.localStorage.setItem("pic", userData.picture);

    // Passing the data as attributes using props to User component
    // As per flow not correctly placed here.
    // Updation from 2nd time of already updated values.
    // ❌
    return <User info={userData} />;
  }

  //! Already Login, we need to check localStorage
  let n = window.localStorage.getItem("nme");
  let e = window.localStorage.getItem("eml");
  let p = window.localStorage.getItem("pic");

  // console.log(n, e, p);

  //TODO: Hiding login detail from user, if we already have their details.
  //getItem variable {n, e, p}
  // checking whether n, e & p are !== undefined
  // if(n !== undefined && e !== undefined && p !== undefined) ❌ bad way of writing code
  // if(lsSavedGetName && lsSavedGetEmail && lsSavedGetPicture){
  if (n && e && p) {
    // To solve problem on reload my UI data not display again.
    // Rerender & set updated values completely & send to useState Hook as parameter.
    // Left side decoded name as Keys & right side localStorage getItem variables as Values
    //! If we have name, email & pic at LS, it means user is already logged in.
    setUserData({ name: n, email: e, picture: p });
    // ❌ Bad way
    // setUserData({ name, email, picture }) --> Good way of coding at production & industry side.

    /* if(userData){
           //Passing the data as attributes using props to User component
              return <User info={userData} />
            } */
  }

  return (
    <>
      {/* <h1>Logging with Google</h1> */}
      {/* <h1>{userData.name}</h1>
            <h1>{userData.email}</h1>
            <img src={userData.picture} /> */}

      {/* LOGIN DETAIL */}
      {/* //! Below code is for console.log the token which have ENCODED/ENCRYPT data within it. */}
      {/* //? In built React.Component - GoogleOAuthProvider using @react-oauth/google npm packgage */}
      {/* <GoogleOAuthProvider clientId="441215130608-5jvm3sobckna1u36q6gvp9ojk9eoqvdv.apps.googleusercontent.com">
                // ? Props - Google Login using @react-oauth/google npm packgage
                <GoogleLogin
                    onSuccess={credentialResponse => {
                        console.log("Logged In -->", credentialResponse);
                        console.log("Logged In id's Token -->", credentialResponse.credential);
                    }}
                    onError={() => {
                        console.log("Login Failed");
                    }}
                />
            </GoogleOAuthProvider> */}

      {/* //! DECRYPT/DECODED (name, email & picture) from the 'credential' which has long token */}
      <GoogleOAuthProvider clientId="441215130608-5jvm3sobckna1u36q6gvp9ojk9eoqvdv.apps.googleusercontent.com">
        <GoogleLogin
          onSuccess={(credentialResponse) => {
            let token = credentialResponse.credential;
            let decoded = jwt_decode(token);
            console.log("User Info ==> ", decoded);
            // 1st to Update State Variable & retriggers then go to line no 10:
            setUserData(decoded);
          }}
          onError={() => {
            console.log("Login Failed");
          }}
        />
      </GoogleOAuthProvider>
    </>
  );
}

export default Auth;
