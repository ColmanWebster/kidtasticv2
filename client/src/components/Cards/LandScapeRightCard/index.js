import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(10),
    textAlign: "center",
    color: theme.palette.text.secondary,
    backgroundColor: "#f5b869",
  },
  trustedFont: {
    fontSize: "4vmin",
    marginBottom: "50px",
    color: "black",
    fontweight: "bolder",
  },
}));

const LandscapeRightCard = () => {
  const classes = useStyles();
  return (
    <>
      <div className={classes.paper}>
        <h1 className={classes.trustedFont}>
          Trusted and partnered with leading corporations around the universe
        </h1>
        <div className="partners">
          <img
            src="./assets/images/capsulecorp.png"
            alt="capsule corp"
            className="landscape"
          ></img>
          <img
            src="./assets/images/stark.png"
            alt="stark industries"
            className="landscape"
          ></img>
          <img
            src="./assets/images/empirelogo.png"
            alt="stark industries"
            className="landscape"
          ></img>
          <img
            src="./assets/images/teamrocket.webp"
            alt="team rocket"
            className="landscape"
          ></img>
        </div>
      </div>
    </>
  );
};

export default LandscapeRightCard;
