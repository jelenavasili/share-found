import React from "react";
import "./Card.css";
import data from "../../data";
import CardContent from "./CardContent";
import data_en from "../../data_en";

const Card = ({ language }) => {
  return (
    <div className="main">
      {language === "sr"
        ? data.map((obj, key) => <CardContent key={key} info={obj} />)
        : data_en.map((obj, key) => <CardContent key={key} info={obj} />)}
    </div>
  );
};

export default Card;
