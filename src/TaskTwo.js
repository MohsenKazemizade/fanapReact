import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Container } from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Form from "./components/Form";
import CssBaseline from "@material-ui/core/CssBaseline";
import FromResult from "./components/FromResult";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  grid: {
    marginTop: 4,
  },
  title: {
    flexGrow: 1,
  },
  padding: {
    padding: theme.spacing(2),
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

const TaskTwo = () => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <Container fixed>
        <div className={classes.root}>
          <AppBar position="static">
            <Toolbar>
              <Typography variant="h6" className={classes.title}>
                Task 2
              </Typography>
            </Toolbar>
          </AppBar>
          <Grid className={classes.grid} container spacing={2}>
            <Grid item xs={4}>
              <Paper className={classes.paper}>
                <FromResult />
              </Paper>
            </Grid>
            <Grid item xs={8}>
              <Paper className={classes.padding}>
                <Form />
              </Paper>
            </Grid>
          </Grid>
        </div>
      </Container>
    </React.Fragment>
  );
};
export default TaskTwo;
