import React from "react";
//! Child we don't need to import Parent

//? Props in the form of object representation
// const props = {
//     u :"https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=799&q=80",
//     t : "",
//     d : "",
//   }

function ProductCard(props){
    console.log("line 12 ==>", props);
    console.log("line 13 ==>", props.u);
    console.log("line 14 ==>", props.t);
    console.log("line 15 ==>", props.d);
    let url = "https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=799&q=80";
    let title = "Product Name";
    let description = "Lorem ipsum dolor sit amet, consectetur adipis";
    return (
        <div>
            <img src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=799&q=80" alt="" />
            <h1>Product one</h1>
            <p>lorem ipsum dolor sit amet.</p>

            {/* JavaScript within JSX using {} */}
            <img src={url} alt="" />
            <h1>{title}</h1>
            <p>{description}</p>

            {/* Passing this information from parent component ./App.js */}
            {/* Receiving at child component here */}
            <img src={props.u} alt="" />
            <h1>{props.t}</h1>
            <p>{props.d}</p>
        </div>
    );
}


export default ProductCard;