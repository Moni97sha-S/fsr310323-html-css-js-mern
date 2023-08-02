import React from "react";
import { useState } from "react";

const State = (props) => {
    let localNumber = 1; 
    function f1(){
        localNumber++;
        console.log(localNumber); // 1 - 2 - 3 - 4 - 5 - 6 - 7 - 8 - 9
    }
    // let stateNumber = 1;
    const [count, setCount] = useState(1);
    const [name, setName] = useState("Monisha");
    const [detailObj, setDetailObj] = useState({n1:"Pratik", country:"India"});
    function f2(){
        // stateNumber++;
        //count++ should not use in useState
        // count = count + 1;
        if(count < 10){
        setCount(count + 1);
        }else{
        alert("Sorry, You are reached out of Stocks");
        }
    }
    function f3(){
        if(count <= 0){
        alert("Please give correct count");
        }else{
        setCount(count - 1);
        }
    }
    return (
    <div>
      <h1>Local Number = {localNumber}</h1>
      <button onClick={f1}>Local Counter</button>
      {/* <h1>State Number = {stateNumber}</h1> */}
      <h1>State Number = {count}</h1>
      {/* <button onClick={f2}>State Counter</button> */}
      <button onClick={f2}>Add By 1</button>
      <button onClick={f3}>Substract By 1</button>
      <br />
      <br />
      <br />
      <br />
      <br />
      <h1>{name}</h1>
      <input 
        type="text" 
        placeholder="Enter your name"
        onChange={(event) => {
          // console.log(event.target.value);
          // ❌name = event.target.value;
          setName(event.target.value);
          setDetailObj({ n1: event.target.value, country:"India" })
        }} 
        name="" 
        id="" 
      />
      <input 
        type="text" 
        placeholder="Enter your country"
        onChange={(event) => {
          setDetailObj({ n1:"Pratik", country: event.target.value })
        }} 
        name="" 
        id="" 
      />
      <br />
      <br />
      <br />
      <br />
      <br />
      <h1>{detailObj.n1}</h1>
      <h1>{detailObj.country}</h1>
      {/* <MovieCard moni={}/> */}

        </div>
    );
}
export default State;