import React from "react";
import "../styles/NewsCard.css";

function NewsCard(props) {
  // console.log(props);
  let date = new Date(props.data.publishedAt);
  return (
    <>
      <div className="card">
        {/* //!Inline CSS: style={{ width: "50vw", height: "auto" }} */}
        <img className="card-image" src={props.data.image} alt="" />
        <div className="card-content">
          <h2 className="card-title">{props.data.title}</h2>
          <p className="card-description">{props.data.description}</p>
          <h6 className="card-timestamp">{date.toString()}</h6>
        </div>
      </div>
    </>
  );
}

export default NewsCard;
