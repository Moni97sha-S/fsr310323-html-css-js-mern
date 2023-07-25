import React from "react";
import User from "./User";
import ProductCard from "./ProductCard";
function App() {
  let yourName = "Monisha";
  let yourCountry = "India";
  // let yourAge = "25";
  let s2 = {
    color: "red", 
    fontSize: "36",
    fontWeight: "bold",
     border: "1px solid red"}
  return (
    <div>
      <Product />
      <User name = {yourName} country={yourCountry} age="25" />
      //! Providing Style as INLINE to JSX Tags.
      <p style={{color: "red", fontSize:"36"}}>Lorem ipsum</p>
      //* Providing Style as Object to JSX Tags.
      <p style={s2}>Lorem ipsum color</p>
    </div>
  );
}

export default App;
