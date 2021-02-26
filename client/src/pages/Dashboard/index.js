import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
// import Countdown from "../../components/Countdown";
import { motion } from "framer-motion";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
    marginBottom: "1px",
    backgroundColor: "turquoise",
  },
  margin: {
    margin: theme.spacing(1),
  },
  font: {
    textAlign: "center",
  },
  giphys: {
    borderRadius: "10px",
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
export default function Login({ user }) {
  const classes = useStyles();
  console.log(user);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      variants={pageVariants}
      transition={pageTransition}
    >
      <div>
        <h1>welcome {user.name}</h1>
        <Grid container spacing={3}>
          <Grid item xs>
            <Paper className={classes.paper}>
              <h4>
                consectetur lorem ipsum dolor sit amet, consectetur lorem ipsum
                dolor sit amet, consectetur lorem ipsum dolor sit amet,
                consectetur lorem ipsum dolor sit amet, consectetur lorem ipsum
                dolor sit amet, consectetur lorem ipsum dolor sit amet,
                consectetur lorem ipsum dolor sit amet, consectetur lorem ipsum
                dolor sit amet, consectetur lorem ipsum dolor sit amet,
                consectetur lorem ipsum dolor sit amet, consectetur lorem ipsum
                dolor sit amet, consectetur lorem ipsum dolor sit amet,
                consectetur lorem ipsum dolor sit amet, consectetur lorem ipsum
                dolor sit amet, consectetur lorem ipsum dolor sit amet,
                consectetur lorem ipsum dolor sit amet, consectetur
              </h4>
            </Paper>
          </Grid>
          <Grid item xs>
            <Paper className={classes.paper}>
              <h4>
                consectetur lorem ipsum dolor sit amet, consectetur lorem ipsum
                dolor sit amet, consectetur lorem ipsum dolor sit amet,
                consectetur lorem ipsum dolor sit amet, consectetur lorem ipsum
                dolor sit amet, consectetur lorem ipsum dolor sit amet,
                consectetur lorem ipsum dolor sit amet, consectetur lorem ipsum
                dolor sit amet, consectetur lorem ipsum dolor sit amet,
                consectetur lorem ipsum dolor sit amet, consectetur lorem ipsum
                dolor sit amet, consectetur lorem ipsum dolor sit amet,
                consectetur lorem ipsum dolor sit amet, consectetur lorem ipsum
                dolor sit amet, consectetur lorem ipsum dolor sit amet,
                consectetur lorem ipsum dolor sit amet, consectetur
              </h4>
            </Paper>
          </Grid>
          {/* <Grid item xs>
					<Countdown />
				</Grid> */}
        </Grid>
        <h1 className={classes.font}>THIS IS THE DASHBOARD!!!!!!</h1>
        <Grid container spacing={2}>
          <Grid item xs={12} lg={12}>
            <Paper className={classes.paper}>
              <h1>Pick your favorite activities here!</h1>
            </Paper>
          </Grid>
          <Grid item lg={2}>
            <Paper className={classes.paper}>
              <h1>
                Colman Webster's Super Amazing Game that will have you addicted!
              </h1>
              <Button
                style={{ backgroundColor: "#63eb9b", color: "black" }}
                variant="contained"
                color="secondary"
                href="/game"
              >
                Play Now!
              </Button>
            </Paper>
          </Grid>
          <Grid item lg={6}>
            <Paper className={classes.paper}>
              <h4>
                lorem ipsum dolor sit amet, consectetur lorem ipsum dolor sit
                amet, consectetur lorem ipsum dolor sit amet, consectetur lorem
                ipsum dolor sit amet, consectetur lorem ipsum dolor sit amet,
                consectetur lorem ipsum dolor sit amet, consectetur lorem ipsum
                dolor sit amet, consectetur lorem ipsum dolor sit amet,
                consectetur lorem ipsum dolor sit amet, consectetur lorem ipsum
                dolor sit amet, consectetur lorem ipsum dolor sit amet,
                consectetur lorem ipsum dolor sit amet, consectetur lorem ipsum
                dolor sit amet, consectetur lorem ipsum dolor sit amet,
                consectetur lorem ipsum dolor sit amet, consectetur lorem ipsum
                dolor sit amet, consectetur lorem ipsum dolor sit amet,
                consectetur lorem ipsum dolor sit amet, consectetur lorem ipsum
                dolor sit amet, consectetur lorem ipsum dolor sit amet,
                consectetur lorem ipsum dolor sit amet, consectetur lorem ipsum
                dolor sit amet, consectetur lorem ipsum dolor sit amet,
                consectetur lorem ipsum dolor sit amet, consectetur lorem ipsum
                dolor sit amet, consectetur lorem ipsum dolor sit amet,
                consectetur lorem ipsum dolor sit amet, consectetur lorem ipsum
                dolor sit amet, consectetur lorem ipsum dolor sit amet,
                consectetur lorem ipsum dolor sit amet, consectetur lorem ipsum
                dolor sit amet, consectetur lorem ipsum dolor sit amet,
                consectetur lorem ipsum dolor sit amet, consectetur lorem ipsum
                dolor sit amet, consectetur lorem ipsum dolor sit amet,
                consectetur lorem ipsum dolor sit amet, consectetur lorem ipsum
                dolor sit amet, consectetur lorem ipsum dolor sit amet,
                consectetur lorem ipsum dolor sit amet, consectetur lorem ipsum
                dolor sit amet, consectetur lorem ipsum dolor sit amet,
                consectetur lorem ipsum dolor sit amet, consectetur lorem ipsum
                dolor sit amet, consectetur lorem ipsum dolor sit amet,
                consectetur lorem ipsum dolor sit amet, consectetur lorem ipsum
                dolor sit amet, consectetur lorem ipsum dolor sit amet,
                consectetur lorem ipsum dolor sit amet, consectetur lorem ipsum
                dolor sit amet, consectetur lorem ipsum dolor sit amet,
                consectetur lorem ipsum dolor sit amet, consectetur lorem ipsum
                dolor sit amet, consectetur lorem ipsum dolor sit amet,
                consectetur lorem ipsum dolor sit amet, consectetur lorem ipsum
                dolor sit amet, consectetur lorem ipsum dolor sit amet,
                consectetur lorem ipsum dolor sit amet, consectetur lorem ipsum
                dolor sit amet, consectetur lorem ipsum dolor sit amet,
                consectetur lorem ipsum dolor sit amet, consectetur lorem ipsum
                dolor sit amet, consectetur lorem ipsum dolor sit amet,
                consectetur lorem ipsum dolor sit amet, consectetur lorem ipsum
                dolor sit amet, consectetur lorem ipsum dolor sit amet,
                consectetur lorem ipsum dolor sit amet, consectetur lorem ipsum
                dolor sit amet, consectetur lorem ipsum dolor sit amet,
                consectetur lorem ipsum dolor sit amet, consectetur lorem ipsum
                dolor sit amet, consectetur lorem ipsum dolor sit amet,
                consectetur lorem ipsum dolor sit amet, consectetur lorem ipsum
                dolor sit amet, consectetur lorem ipsum dolor sit amet,
                consectetur lorem ipsum dolor sit amet, consectetur lorem ipsum
                dolor sit amet, consectetur lorem ipsum dolor sit amet,
                consectetur lorem ipsum dolor sit amet, consectetur lorem ipsum
                dolor sit amet, consectetur lorem ipsum dolor sit amet,
                consectetur lorem ipsum dolor sit amet, consectetur lorem ipsum
                dolor sit amet, consectetur lorem ipsum dolor sit amet,
                consectetur lorem ipsum dolor sit amet, consectetur
              </h4>
            </Paper>
          </Grid>
          <Grid item lg={4}>
            <Paper className={classes.paper}>
              {" "}
              <iframe
                className={classes.giphys}
                src="https://giphy.com/embed/wVRM3ItKfEsmc"
                width="400"
                height="400"
                frameBorder="0"
                allowFullScreen
              ></iframe>
              <iframe
                className={classes.giphys}
                src="https://giphy.com/embed/VcsGVTZuhqXfN8ipEr"
                width="400"
                height="400"
                frameBorder="0"
                allowFullScreen
              ></iframe>
            </Paper>
          </Grid>
        </Grid>
      </div>
    </motion.div>
  );
}
