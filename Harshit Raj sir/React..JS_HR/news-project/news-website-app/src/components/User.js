import React from 'react';

export default function User(props) {
    console.log(props);
    return (
        <>
            <h1>{props.info.name}</h1>
            <h1>{props.info.email}</h1>
            <img src={props.info.picture} />
            <br />
            <br />
            <button 
                style = {{ width: "100px", height: "40px" }}
                onClick = { () => {
                    // LocalStorage values get cleared on clicking of Logout button
                    window.localStorage.clear();
                    // After clearing localStorage, we need to refresh the same page.
                    window.location.assign("http://localhost:3000");
                }}
            >
            Logout
            </button>
        </>
    );
}