import React from "react";
import Carousel from "react-material-ui-carousel";
import { Paper, Button } from "@material-ui/core";

export default function TheCarousel(props) {
  var items = [
    {
      name: "New Videos Out Every Week!",
      description: "",
      img: "./assets/images/korra.webp",
    },
    {
      name: "Find the Latest and Greatest shows!",
      description: "Only at KidTastic!",
      img: "./assets/images/korra.webp",
    },
  ];

  return (
    <Carousel>
      {items.map((item, i) => (
        <Item key={i} item={item} />
      ))}
    </Carousel>
  );
}

function Item(props) {
  return (
    <Paper>
      <h1>{props.item.name}</h1>
      <h4>{props.item.description}</h4>
      <img src={props.item.img} />

      <Button className="CheckButton">Recently Added</Button>
    </Paper>
  );
}
