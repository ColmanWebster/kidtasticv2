import React from "react";
import Iframe from "react-iframe";
import "./imagine.css";
const Imagine = () => {
  return (
    <>
      <div className="cargame">
        <Iframe
          url="https://budkastim.github.io/car_game_tim"
          position="absolute"
          width="100%"
          id="myId"
          className="myClassname"
          height="100%"
          styles={{ height: "25px" }}
        />
      </div>
    </>
  );
};

export default Imagine;
