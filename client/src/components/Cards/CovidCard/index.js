import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(4.4),
    textAlign: "center",
    color: theme.palette.text.secondary,
    backgroundColor: "#eb5a50",
    marginLeft: "2vw",
  },
}));

const CovidCard = () => {
  const classes = useStyles();
  return (
    <Paper item xs={12} className={classes.paper}>
      <img
        src="./assets/images/germ.gif"
        alt="Wash your hands always for 10 seoconds at least and wear a mask."
        className="germ"
      />
      <h1 className="mashatext"> COVID-19 Update: </h1>{" "}
      <h6 className="covidPara">
        We know it's tough out there. We completely stepped up our game in
        response to the on-going pandemic. We encourage everyone to wash their
        hands for at least 10 seconds every 30 minutes to 1 hour. The WHO (World
        Health Organization) reccomends everyone going outside to wear a mask to
        protect users mouth and nose at all times. We hope everyone stays safe
        in these times and wish prosperous times.
      </h6>
    </Paper>
  );
};

export default CovidCard;
