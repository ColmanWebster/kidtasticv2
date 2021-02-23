import React from "react";
import Carousel from "react-material-ui-carousel";
import { Paper, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(3),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  centerTexts1: {
    textAlign: "center",
    marginTop: "",
  },
  centerTexts2: {
    height: "25vw",
    width: "50vw",
    marginRight: "50px",
  },
}));

export default function TheCarousel(props) {
  var items = [
    {
      name: "New Videos Out Every Week",
      description: "Thank you for being patient",
      img: "./assets/thumbs/mada.jpg",
    },
    {
      name: "New Arrivals and Classics",
      description: "Only at KidTastic!",
      img: "./assets/thumbs/snow.jpg",
    },
    {
      name: "Thank you for Choosing Kidtastic!",
      description: "We value your loyalty and support from Kidtastic",
      img: "./assets/thumbs/gang.jpg",
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
  const classes = useStyles();
  return (
    <>
      <h1 className={classes.centerTexts1}>{props.item.name}</h1>
      <h4 className={classes.centerTexts1}>{props.item.description}</h4>
      <img className={classes.centerTexts2} src={props.item.img} />
    </>
  );
}
