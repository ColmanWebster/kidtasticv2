import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
// import Hidden from "@material-ui/core/Hidden";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
    backgroundColor: "#b3fffa",
    marginRight: "2vw",
    marginLeft: "2vw",
  },
  secondPaper: {
    padding: theme.spacing(1),
    backgroundColor: "#87cfff",
  },
}));

const HundredPercentFreeCard = () => {
  const classes = useStyles();
  return (
    <Paper item xs={8} className={classes.paper}>
      <img
        src="./assets/images/mobilemasha.png"
        alt="Masha and the Bear says it's mobile friendly!"
        className="masha"
      />

      <Paper className={classes.secondPaper}>
        <h1 className="mashatext">100% free to use</h1>
      </Paper>
    </Paper>
  );
};

export default HundredPercentFreeCard;
