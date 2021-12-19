import React from "react";
import "./Card.css";
import data from "../../data";
import CardContent from "./CardContent";

const Card = ({lang}) => {
  return (
    <div className="main">
      {data.map((obj, key) => (
        <CardContent key={key} info={obj} lang={lang} />
      ))}
    </div>
  );
};

export default Card;
