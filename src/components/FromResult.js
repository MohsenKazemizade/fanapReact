import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles((theme) => ({
  large: {
    width: theme.spacing(15),
    height: theme.spacing(15),
  },
}));
const FromResult = () => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Box display="flex" justifyContent="center" m={1}>
        <Avatar alt="" src="" className={classes.large} />
      </Box>
      <Typography component="div">
        <Box textAlign="center" m={1}></Box>
      </Typography>
    </React.Fragment>
  );
};
export default FromResult;
