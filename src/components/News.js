import React, { useContext } from "react";
import { NewsContext } from "../NewsContext";
import FlipCard from "./FlipCard";
import Header from "./Header";
import "../App.css";

function News(props) {
  const { data } = useContext(NewsContext);

  return (
    <div>
      <Header mainHeader="News For You" />
      {data ? (
        <div className="all__news">
          {data.articles.map((news) => (
            <FlipCard data={news} key={news.url} />
          ))}
        </div>
      ) : (
        <div className="lds-hourglass"></div>
      )}
    </div>
  );
}

export default News;
