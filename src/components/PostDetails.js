import React from "react";
import { Container, Typography } from "@material-ui/core";
import CardHeader from "@material-ui/core/CardHeader";
import Moment from "react-moment";
import { grey } from "@material-ui/core/colors";
import CssBaseline from "@material-ui/core/CssBaseline";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  cardMedia: {
    paddingTop: "56.25%", // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  avatar: {
    backgroundColor: grey[500],
  },
}));
const PostDetails = (props) => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <main>
        <Container fixed>
          <div className={classes.root}>
            <CardHeader
              title={props.data.title}
              subheader={<Moment>{props.data.created}</Moment>}
            />
            <Typography variant="body2" color="textSecondary" component="p">
              "qui est sint"
            </Typography>
            <CardMedia
              className={classes.media}
              image={require(`../postImages/${props.data.cover}`)}
            />
            <Typography variant="body2" color="textSecondary" component="p">
              discription : {props.data.description}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              body : {props.data.body}
            </Typography>
            <Button
              variant="contained"
              color="primary"
              size="small"
              onClick={props.onClick}
              className={classes.margin}
            >
              BACK TO LIST
            </Button>
          </div>
        </Container>
      </main>
    </React.Fragment>
  );
};
export default PostDetails;
