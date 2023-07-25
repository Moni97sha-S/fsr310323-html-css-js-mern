import React from "react";
//! Child we don't need to import Parent

//? Props in the form of object representation
// const props = {
//     u :"",
//     t : "",
//     d : "",
//   }

function ProductCard(props){
    return (
        <div>
            <img src={props.u} alt="" />
            <h1>{props.t}</h1>
            <p>{props.d}</p>
        </div>
    );
}


export default ProductCard;