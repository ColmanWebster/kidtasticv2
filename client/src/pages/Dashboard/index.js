import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Watchtxttest from "./images/watch/watchtxttest.png";
import DrawText from "./images/draw/drawtxttest.png";
import ImagineText from "./images/imagine/imaginetxt.png";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";
import Fabz from "../../components/Fabz";
import ReactPlayer from "react-player";
import Hidden from "@material-ui/core/Hidden";
import { Redirect } from "react-router-dom";
import adjs from "./adjectives";
import { motion } from "framer-motion";

const randomAdjective = () => {
  return adjs[Math.floor(Math.random() * adjs.length)];
};
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
    marginBottom: "1px",
    backgroundColor: "#16acea",
    marginLeft: "10px",
    marginRight: "10px",
  },
  margin: {
    margin: theme.spacing(1),
  },
  font: {
    textAlign: "center",
    fontSize: "3vw",
    marginTop: "11vw",
    marginBottom: "20vw",
  },
  giphys: {
    borderRadius: "10px",
  },
  interactive: {
    textAlign: "center",
    fontWeight: "900",
    color: "black",
    border: "solid 2px #bdcfff",
  },
  fab: {
    backgroundColor: "whites",
    marginLeft: "10px",
    border: "solid 2px #bdcfff",
    marginRight: "10px",
  },
  paperr: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
    marginBottom: "4px",
    backgroundColor: "#72db95",
    marginLeft: "25vw",
    marginRight: "25vw",
  },
  paperrrr: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
    marginBottom: "1px",
    backgroundColor: "#beedec",
  },
}));

const pageVariants = {
  initial: {
    opacity: 0,
    x: "-100vw",
    scale: 0.8,
  },
  in: {
    opacity: 1,
    x: 0,
    scale: 1,
  },
  out: {
    opacity: 0,
    x: "100vw",
    scale: 1.2,
  },
};

const pageTransition = {
  type: "tween",
  ease: "anticipate",
  duration: 1,
};

const doYouWantToGo = () => {
  confirmAlert({
    title: "You're about to go Tim's Imagine Page.",
    message: "You are going to leave Kidtastic.com",
    buttons: [
      {
        label: "Sure, let's go!",
        onClick: () => {
          document.location.replace(
            "https://budkastim.github.io/car_game_tim/"
          );
        },
      },
      {
        label: "Nah, I think I'll stay.",
        onClick: () => {},
      },
    ],
  });
};

// const doYouWantToGo = () => {
//   alert(
//     "You're about to leave KidTastic to go to Tim's Imagine Page. Do you want to go?"
//   )
//     ? document.location("https://budkastim.github.io/car_game_tim/")
//     : document.location.replace("/dashboard");
// };
export default function Login({ user, currentUser, loading }) {
  const classes = useStyles();
  const [isPlaying, setIsPlaying] = useState(false);
  return (
    <>
      {!loading && !currentUser.name && <Redirect to="/login" />}
      <div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          variants={pageVariants}
          transition={pageTransition}
        >
          <Grid container spacing={3}>
            <Grid item xs>
              <Paper className={classes.paper}>
                <a href="/watch">
                  <img
                    src={Watchtxttest}
                    alt="Home text"
                    style={{ width: "102px", height: "29px" }}
                  />
                </a>
              </Paper>
            </Grid>
            <Grid item xs></Grid>
            <Grid item xs>
              <Paper className={classes.paper}>
                <img
                  src={ImagineText}
                  alt="Login Icon"
                  style={{ width: "135px", height: "29px" }}
                  onClick={doYouWantToGo}
                />
              </Paper>
            </Grid>
            <Grid container spacing={2}></Grid>
          </Grid>
        </motion.div>
        <motion.div
          initial="initial"
          animate="in"
          exit="out"
          variants={pageVariants}
          transition={pageTransition}
        >
          <h1 className={classes.font}>
            Welcome back, the {randomAdjective()} {user.name} 🥳{" "}
          </h1>
        </motion.div>
        <Grid container spacing={2}>
          <Grid item xs={12} lg={12}>
            <div className="favacts">
              <img
                src="./assets/images/blonde.png"
                alt="girl"
                className="cherry"
              />
              <img
                src="./assets/images/gerbal.png"
                alt="cat"
                className="newcat"
              />
              <img
                src="./assets/images/dog_1.png"
                alt="doge"
                className="doggo"
              />
              <img
                src="./assets/images/newcats.png"
                alt="girl"
                className="newcat"
              />
            </div>
          </Grid>

          <Grid item lg={6}>
            <Paper className={classes.paper}>
              <a href="/draw">
                <img
                  src={DrawText}
                  alt="Draw Text"
                  style={{ width: "109px", height: "25px" }}
                />
              </a>
            </Paper>
            <Hidden only={["xs", "sm"]}>
              <Paper className={classes.fab}>
                <Fabz />
              </Paper>
            </Hidden>

            <Hidden only={["md", "lg", "xl"]}>
              <h1 className={classes.interactive}>
                If you want to use and play with the sticker board please visit
                our full desktop website at www.Kidtastic.com
              </h1>
            </Hidden>
            {/* {" "}
              <iframe
                className={classes.giphys}
                src="https://giphy.com/embed/wVRM3ItKfEsmc"
                width="400"
                height="400"
                frameBorder="0"
                allowFullScreen
                title="poopoo"
              ></iframe>
              <iframe
                className={classes.giphys}
                src="https://giphy.com/embed/VcsGVTZuhqXfN8ipEr"
                width="400"
                height="400"
                frameBorder="0"
                title="peepee"
                allowFullScreen
              ></iframe> */}
          </Grid>
          <Grid item lg={6}>
            <Paper className={classes.paper}>
              <Paper className={classes.paperrrr}>
                <h1 className={classes.interactive}>
                  Featured Today: Pixar presents: "Float"
                </h1>
                <p>Out now on Disney+</p>
                <div style={{ pointerEvents: "none", borderRadius: "10px" }}>
                  <ReactPlayer
                    volume="1"
                    width="43vw"
                    height="30vw"
                    className="dashPlayer"
                    playing={isPlaying}
                    controls={false}
                    url={"https://www.youtube.com/watch?v=1HAGuju_yKY"}
                  />
                </div>
                <Button
                  style={{
                    backgroundColor: "#f7a35e",
                    color: "black",
                    marginTop: "10px",
                  }}
                  className="controllerBtns"
                  variant="contained"
                  color="primary"
                  onClick={() => setIsPlaying(!isPlaying)}
                >
                  {isPlaying ? "Pause Video" : "Play Video"}
                </Button>
              </Paper>
            </Paper>
          </Grid>
          <Grid item lg={12}>
            <Paper className={classes.paper}>
              <Paper className={classes.paperrrr}>
                <div className="thinkingbox">
                  <img
                    src="./assets/images/thinker.png"
                    alt="thinking"
                    className="thinker"
                  />
                  <h1 className="bigger">
                    <em>Memory Game</em>
                  </h1>
                </div>
                <p className="smaller">Think you got what it takes?</p>
                <Button
                  style={{ backgroundColor: "#63eb9b", color: "black" }}
                  variant="contained"
                  color="secondary"
                  href="/game"
                >
                  Play Now!
                </Button>
              </Paper>
            </Paper>
          </Grid>
        </Grid>
      </div>
    </>
  );
}
