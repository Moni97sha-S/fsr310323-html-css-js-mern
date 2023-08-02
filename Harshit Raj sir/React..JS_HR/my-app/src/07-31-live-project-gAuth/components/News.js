import React, { useState, useEffect } from "react";

function News(){
    const [name, setName] = useState("Monisha");
    const [age, setAge] = useState(20);
    // SYNTAX: useEffect(() => {},[]);
    // On change of both name & age only useEffect not trigger called & 1 time console in useEffect
    useEffect(() => {
        console.log("use Effect called"); // called 2nd prints at console 
    }, [name, age]);

    console.log("rendering on Screen"); // called 1st prints at console 
    return (
        <div>
            {/* <img src="" />
            <h1>New Title</h1>
            <h1>New Description</h1>
            <h1>New Date</h1> */}
            <h1>{name}</h1>
            <label >Name:</label>
            <input type="text" onChange={(e) => {
                setName(e.target.value);
            }}/>

            <h1>{age}</h1>
            <label htmlFor="">Age:</label>
            <input type="text" onChange={(e) => {
                setAge(e.target.value);
            }}/>
        </div>
    );
}

export default News;