import React from "react";

const MovieCard = (props) => {
    // console.log(props);
    // console.log(props.moni);
    return (
        <div style = {{border: "2px solid black", margin: "10px", padding: "20px"}}>
            <img src={props.mov.Poster} />
            <h1>{props.mov.Title}</h1>
            <p>{props.mov.Year}</p>
            <h2>{props.mov.imdbID}</h2>
            <h2>{props.mov.Type}</h2>
            {/* <img src={props.moni.Post} />
            <h1>{props.moni.Heading}</h1>
            <p>{props.moni.Date}</p> */}

        </div>
    );
}
export default MovieCard;