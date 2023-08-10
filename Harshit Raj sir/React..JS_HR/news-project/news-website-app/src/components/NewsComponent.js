import React, { useState, useEffect } from "react";
import NewsCard from "./NewsCard";
import "../styles/NewsComponent.css";

function NewsComponent() {
  //! To capture/grab API call data by a state variable
  const [newsData, setNewsData] = useState([]);
  const [search, setSearch] = useState("tech");
  console.log(search);

  //! API Call
  useEffect(() => {
    //!Async within IIFE function
    (async function f1() {
      let url = `https://gnews.io/api/v4/search?q=${search}&lang=en&country=us&max=10&apikey=427bf738f7f568e213071713f4a8dbee`;
      const response = await fetch(url);
      const data = await response.json();
      // console.log(data);

      setNewsData(data["articles"]);
    })();
  }, [search]);

  let input = {
    width: "280px",
    padding: "10px",
    borderRadius: "5px",
    outline: "none",
    marginBlock: "20px",
    marginInline: "calc(78vw/2)",
    border: "2px solid white",
    color: "white",
  };
  return (
    <>
      <input
        type="text"
        style={input}
        placeholder="Search topic for news..."
        onChange={(e) => {
          setSearch(e.target.value);
        }}
      />
      <div className="news-component">
        {/* <NewsCard /> */}
        {newsData?.map((item) => {
          // console.log(item);
          return <NewsCard data={item} />;
        })}
      </div>
    </>
  );
}

export default NewsComponent;
