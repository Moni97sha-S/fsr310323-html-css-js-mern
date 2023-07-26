import React from "react";

function User(props){
    let urName = "Monica";
    return (
        <div>
            Monika
            <h1>{urName}</h1>
            <h2>{props.name}</h2>
            <h3>{props.country}</h3>
            <h4>{props.age}</h4>
            
        </div>
    );
}

export default User;
