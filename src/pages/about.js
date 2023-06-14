import React from "react";
import Navbar from "../components/composite/Navbar";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  sectionBgOverlay: {
    backgroundColor: "transparent",
    backgroundImage:
      "linear-gradient(180deg, var(--e-global-color-secondary ) 0%, #41246DE0 15%)",
    opacity: "1",
    transition: "background 0.3s, border-radius 0.3s, opacity 0.3s",
  },
  containerHeader: {
    height: "360px",
  },
}));
const About = () => {
  const classes = useStyles();

  return (
    <div>
      {/* <Navbar/> */}
      <section className={classes.containerHeader}>
        <div className={classes.sectionBgOverlay}></div>
        <h1 className={classes.headerHeading}>About Us</h1>
      </section>
    </div>
  );
};

export default About;
