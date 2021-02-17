import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
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

export default function Login() {
  const classes = useStyles();

  return (
    <div>
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
              class="giphy-embed"
              allowFullScreen
            ></iframe>
            <iframe
              className={classes.giphys}
              src="https://giphy.com/embed/VcsGVTZuhqXfN8ipEr"
              width="400"
              height="400"
              frameBorder="0"
              class="giphy-embed"
              allowFullScreen
            ></iframe>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
