import React from 'react';
import Header from './Header.js';
import NewsComponent from './NewsComponent.js';

export default function User(props) {
    // console.log(props);
    return (
        <div>
            {/* //! This is to refer for 31st july class
            <h1>{props.info.name}</h1>
            <h1>{props.info.email}</h1>
            <img src={props.info.picture} alt="" />
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
            </button> */}
            <Header data={props}/>
            <NewsComponent />
        </div>
    );
}