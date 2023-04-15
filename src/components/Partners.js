import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import { Element } from "react-scroll";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(2),
    backgroundColor: theme.palette.background.paper,
  },
  title: {
    marginBottom: theme.spacing(2),
    textAlign: "center",
  },
  avatar: {
    width: "100%",
    height: "100%",
    objectFit: "contain",
  },
}));

const partners = [
  { name: "Partner 1", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/706px-Google_%22G%22_Logo.svg.png" },
  { name: "Partner 2", image: "https://logolook.net/wp-content/uploads/2021/06/Facebook-Logo.svg" },
  { name: "Partner 3", image: "https://logowik.com/content/uploads/images/909_adobe.jpg" },
  { name: "Partner 4", image: "https://assets.stickpng.com/images/62c6eb897a58a4aa1fb7709e.png" },
  { name: "Partner 5", image: "https://logos-world.net/wp-content/uploads/2020/07/Accenture-Logo.png" },
];

const Partner = () => {
  const classes = useStyles();

  return (
    <Element name="partners">
      <div className={classes.root}>
        <Typography variant="h4" component="h2" className={classes.title}>
          Our Partners
        </Typography>
        <Grid container spacing={3}>
          {partners.map((partner, index) => (
            <Grid item xs={6} sm={4} md={2} key={index}>
              <Avatar
                alt={partner.name}
                src={partner.image}
                className={classes.avatar}
              />
            </Grid>
          ))}
        </Grid>
      </div>
    </Element>
  );
};

export default Partner;
