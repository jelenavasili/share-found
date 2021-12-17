import React from "react";
import "./Info.css";
import data from "../../data";
import InfoItem from "./InfoItem";

const Info = () => {
  return (
    <div className="main">
      {data.map((obj, key) => {
        return <InfoItem key={key} info={obj} />;
      })}
    </div>
  );
};

export default Info;
