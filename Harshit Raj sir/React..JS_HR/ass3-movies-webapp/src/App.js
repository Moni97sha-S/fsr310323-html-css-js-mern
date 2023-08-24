import "./App.css";
import React, { Component } from "react";
import MovieCard from "./components/MovieCard.js";
import MovieHeader from "./components/MovieHeader.js";

class App extends Component {
  constructor(props) {
    super(props);
    //! Object
    this.state = {
      // Initial Class State Variables
      data: [],
      load: true,
    };
  }

  componentDidMount() {
    fetch("https://www.omdbapi.com/?apikey=45f0782a&s=war")
      .then((response) => response.json())
      .then((json) => {
        // Initial values via Class setState function
        this.setState({ data: json, load: false });
      });
  }

  render() {
    // let { data, load } = this.state; //? Destructured object
    let { data } = this.state;
    let { load } = this.state;
    if (!load) {
      console.log(data);
      console.log(data.Search);
    }
    let movieList = data.Search?.map((item) => (
      // <h4 style={{ color: "white" }}>{item.Title}</h4>
      // <img src={item.Poster} alt="" />
      <MovieCard Poster={item.Poster} Title={item.Title} />
    ));
    return (
      <>
        <div className="App-wrapper">
          <div className="Card-wrapper">
            {load ? (
              <div className="load-ring">Loading</div>
            ) : (
              <>
                <MovieHeader />
                <>{movieList}</>
              </>
            )}
          </div>
        </div>
      </>
    );
  }
}

export default App;
