import React from "react";
import { makeStyles } from '@mui/styles';
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { ThemeProvider, createTheme } from '@mui/material/styles'

let theme = createTheme();

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
  },
  card: {
    position: "relative",
    width: "308px",
    height: "300px",
    margin: theme.spacing(2),
    overflow: "hidden",
    "&:hover $content": {
      visibility: "visible",
      opacity: 1,
    },
  },
  image: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "308px",
    height: "100%",
    objectFit: "cover",
    zIndex: -1,
  },
  content: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    background: "rgba(0, 0, 0, 0.5)",
    color: "#fff",
    visibility: "hidden",
    opacity: 0,
    transition: "visibility 0s, opacity 0.5s ease-in-out",
  },
}));

const Partner = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Card className={classes.card}>
        <img className={classes.image} src={props.imageUrl} alt="Card" />
        <CardContent className={classes.content}>
          <Typography variant="h5" component="h2">
            {props.title}
          </Typography>
          <Typography color="textSecondary" gutterBottom>
            {props.subtitle}
          </Typography>
          <Typography variant="body2" component="p">
            {props.content}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default Partner;
