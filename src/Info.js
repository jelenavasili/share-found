import React from "react";
import "./Info.css";
import data from "./data";
import InfoItem from "./InfoItem";

const Info = () => {
  return (
    <main id="cards">
      {data.map((obj, key) => {
        return <InfoItem key={key} info={obj} />;
      })}
    </main>
  );
};

export default Info;
