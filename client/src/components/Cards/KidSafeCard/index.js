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
    backgroundColor: "#87cfff",
    marginRight: "3vw",
  },
  secondPaper: {
    padding: theme.spacing(7),
    backgroundColor: "#87cfff",
  },
}));

const KidSafeCard = () => {
  const classes = useStyles();
  return (
    <Paper item xs={8} className={classes.paper}>
      <img
        src="./assets/images/obi.png"
        alt="obi wan has your back"
        className="obiwan"
      />
      <h1 className="mashatext"> Kid Approved!</h1>
    </Paper>
  );
};

export default KidSafeCard;
