import React, { Component } from "react";
import "../App.css";

class MovieCard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    console.log(this.props);
    return (
      <>
        <div className="card">
          <img
            className="card-image"
            src={this.props.Poster}
            alt={this.props.Title}
          />
          <div className="img-blur">
            <p className="card-text ">
              {" "}
              {this.props.Title} {this.props.Year}{" "}
            </p>
          </div>
        </div>
      </>
    );
  }
}

export default MovieCard;
