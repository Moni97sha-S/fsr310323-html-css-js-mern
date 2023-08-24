import React from "react";
import "../App.css";
class MovieHeader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <>
        <div className="title-wrapper">
          <h1 className="website-title">Movies</h1>
        </div>
      </>
    );
  }
}

export default MovieHeader;
