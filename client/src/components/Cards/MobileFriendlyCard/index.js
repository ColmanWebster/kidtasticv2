import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Hidden from "@material-ui/core/Hidden";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
    backgroundColor: "#87cfff",

    marginLeft: "2vw",
  },
  secondPaper: {
    padding: theme.spacing(1),
    backgroundColor: "",
  },
}));

const CovidCard = () => {
  const classes = useStyles();
  return (
    <Paper className={classes.paper}>
      {/* <Paper className={classes.secondPaper}> */}
      <Hidden only={["sm", "xs"]}>
        <img
          src="./assets/images/mobilemasha.png"
          alt="Masha and the Bear says it's mobile friendly!"
          className="masha"
        />
      </Hidden>
      <h1 className="mashatext">Mobile Friendly!</h1>
      {/* </Paper> */}
    </Paper>
  );
};

export default CovidCard;
