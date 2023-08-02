import React, { useEffect, useState } from "react";

function NewsComponent(){
    const [news, setNews] = useState([]);
    useEffect(() => {
        //IIFE - Immediately invoked function expression for built-in methods
        // This is correct place to make async-await as iife function 
        // To invoke immediately
        (async function f1(){
            const response = await fetch("https://gnews.io/api/v4/search?q=india&lang=en&country=us&max=10&apikey=427bf738f7f568e213071713f4a8dbee");
            const data = await response.json();
            setNews(data["articles"]);
        })();
    }, []);

    // Insert Loading Image as API call takes time to load
    if(news.length == 0){
        return (
            <img 
            style = {{width: "500px"}}
            src="https://cdn1.vectorstock.com/i/1000x1000/49/90/loading-icon-on-black-vector-24544990.jpg"
            alt="Loading Image"
            />
        );
    }

    return(
        <div>
            <img style={{width:"500px"}}src={news[0]["image"]} alt=""/>
            <h1>{news[0]["title"]}</h1>
            <p>{news[1]["description"]}</p>
            <p>{news[2]["content"]}</p>
            <h2>{news[3]["publishedAt"]}</h2>
        </div>
    );
}

export default NewsComponent;