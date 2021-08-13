import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Classify from "./Classify";

function Header(props) {
  return (
    <div>
      <h1
        style={{
          color: "#FFFF00",
          textAlign: "center",
          fontSize: "7em",
          fontFamily: "Brush Script MT",
          fontStyle: "oblique",
        }}
      >
        {props.mainHeader}
      </h1>
    </div>
  );
}

export default Header;
