import React from "react";
import "./Card.css";
import data from "../../data";
import CardContent from "./CardContent";

const Card = () => {
  return (
    <div className="main">
      {data.map((obj, key) => (
        <CardContent key={key} info={obj} />
      ))}
    </div>
  );
};

export default Card;
