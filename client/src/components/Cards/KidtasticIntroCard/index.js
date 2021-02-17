import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Skeleton from "@material-ui/lab/Skeleton";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
    backgroundColor: "#87cfff",
    marginRight: "2vw",
  },
  frontText: {
    fontSize: "6vmin",
    color: "black",
    textAlign: "center",
  },
}));

const KidtasticIntroCard = (props) => {
  const { loading = false } = props;
  const classes = useStyles();
  return (
    <Paper item xs={12} className={classes.paper}>
      <h1 className={classes.frontText}>
        {" "}
        <img
          src="./assets/images/korra2.png"
          alt="Wash your hands always for 10 seoconds at least and wear a mask."
          className="korra"
        />
        About us
      </h1>
      {loading ? (
        <Skeleton />
      ) : (
        <h6 className="covidPara">
          Kidtastic{" "}
          <img
            src="./assets/images/jerry.png"
            alt="Wash your hands always for 10 seoconds at least and wear a mask."
            className="jerry"
          />
          is an online, fun, and free website where you can come play activities
          and watch videos. We initially started this website due to the influx
          of explicit and unexplanatory videos popping up in kid videos and
          cartoons. As a parent it's annoying and confusing to deal with such
          acts, so we've handpicked all of our videos ensuring the best content
          for each user. In addition to our amazing Watch section, we have many
          more fun activies for each user to explore their minds to.
        </h6>
      )}
      <h5>
        Sound Interesting? You can <a href="/login">click here </a>to begin!
      </h5>
    </Paper>
  );
};

export default KidtasticIntroCard;
