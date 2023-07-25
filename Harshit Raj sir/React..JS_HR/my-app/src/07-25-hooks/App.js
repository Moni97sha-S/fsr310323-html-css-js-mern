import React from "react";
// import User from "./User";
import ProductCard from "./MovieCard";
import App from "./App.css";

function App() {
  // let yourName = "Monisha";
  // let yourCountry = "India";
  // let yourAge = "25";
  let data = {
    Title: "Iron Man",
    Year: "2008",
    Poster: "https://m.media.amazon.com/images/M/MV5BMTczNTI20DUwF"
  }
  return (
    <div>
      {/* <h1 className="header">Lorem ipsum doler sit amet.</h1> */}
      <MovieCard moni={data}/>
    </div>
  );
}

export default App;
