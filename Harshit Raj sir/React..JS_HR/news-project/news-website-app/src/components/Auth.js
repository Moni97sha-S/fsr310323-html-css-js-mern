import React from "react";
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
function Auth() {
    return (
        <div>
            <h1>Logging with Google</h1>
            <GoogleOAuthProvider clientId="441215130608-5jvm3sobckna1u36q6gvp9ojk9eoqvdv.apps.googleusercontent.com">
                <GoogleLogin
                    onSuccess={credentialResponse => {
                        console.log("Logged In -->", credentialResponse);
                    }}
                    onError={() => {
                        console.log("Login Failed");
                    }}
                />
            </GoogleOAuthProvider>


        </div>
    );
}

export default Auth;
