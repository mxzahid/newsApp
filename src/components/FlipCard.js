import React, { useState } from "react";
import { Button } from "react-bootstrap";
import Flippy, { FrontSide, BackSide } from "react-flippy";
import Classify from "./Classify";

function FlipCard({ data }) {
  return (
    <Flippy
      flipOnHover={false}
      flipOnClick={true}
      flipDirection="horizontal"
      style={{
        width: "400px",
        height: "400px",
        display: "inline-block",
      }}
      onClick={<Classify />}
    >
      <FrontSide style={{ backgroundColor: "#EE38EE" }}>
        <h2
          style={{
            color: "black",
            wordWrap: "break-word",
            maxHeight: "50%",
            overflowX: "hidden",
          }}
        >
          {/* {D189FF} */}
          {data.title}
        </h2>
        <hr />
        <p className="news__published">{data.publishedAt}</p>
        <p className="news__source">{data.source.name}</p>
        <br />
        <p
          style={{
            color: "black",
            fontSize: "0.9vw",
            width: "100%",
            wordWrap: "break-word",
          }}
        >
          {data.author}
        </p>
      </FrontSide>#
      <BackSide
        style={{
          backgroundColor: "#7A08FA",
          color: "#FFFFFF",
          width: "100%",
          wordWrap: "break-word",
        }}
      >
        <p>{data.description}</p>
        <h5 style = {{color: "black"}}>Categories:</h5>
        <Classify art = {data.description} />
      </BackSide>
    </Flippy>
  );
}

export default FlipCard;
