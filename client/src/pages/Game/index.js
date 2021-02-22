import React from "react";

import { useState } from "react";
//import "./App.css";
//import Paragraph from "./components/Paragraph";
import GameButton from "../../components/GameButton";
import icon2 from "../../icons/icon2.png";
import icon1 from "../../icons/icon3.png";
import icon3 from "../../icons/icon4.png";
import icon4 from "../../icons/icon11.png";
import icon5 from "../../icons/icon12.png";
import icon6 from "../../icons/icon14.jpg";
import icon7 from "../../icons/icon8.png";
const colors = [icon2, icon1, icon3, icon4, icon5, icon6, icon7];

const Webster = () => {
  const [clicked, setClicked] = useState([]);
  //function to handle the clicking of a button
  const handleClick = (color) => {
    //what got clicked?
    if (clicked.includes(color)) return handleLose();
    if (clicked.length === colors.length - 1) return handleWin();
    setClicked([...clicked, color]);
  };
  const handleWin = () => {
    setClicked([]);
    alert("YOU WIN!");
  };
  const handleLose = () => {
    setClicked([]);
    alert("YOU LOSE");
  };
  return (
    <>
      <div
        className="jumbotron"
        style={{
          color: "indigo",
          backgroundImage: "linear-gradient(red, yellow)",
          textAlign: "center",
          border: "1px solid black",
          borderRadius: "10px",
          margin: "200px auto 0 auto",
          width: "1000px",
          boxShadow:
            "0 5px 5px -3px rgb(0 0 0 / 20%), 0 8px 10px 1px rgb(0 0 0 / 14%), 0 3px 14px 2px rgb(0 0 0 / 12%)",
        }}
      >
        <h1>MEMORY GAME!</h1>
        <h3>
          Clicked -{" "}
          {clicked.map((color) => (
            <button
              style={{
                backgroundImage: `url(${color})`,
                height: "100px",
                width: "100px",
                backgroundSize: "cover",
                borderRadius: "10px",
                margin: "20px",
              }}
              className="btn btn-sm btn-primary"
            ></button>
          ))}
        </h3>

        <div>
          {colors
            .sort(() => Math.random() - 0.5)
            .map((color) => (
              <GameButton click={handleClick} color={color} />
            ))}
        </div>
      </div>
    </>
  );
};

export default Webster;
