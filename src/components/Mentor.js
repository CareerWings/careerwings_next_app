import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Image from "next/image";
import motion from 'framer-motion';


const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "85vh",
  },
  card: {
    borderRadius: '200px',
    position: "relative",
    width: "250px",
    height: "350px",
    backgroundColor: "white",
    boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)",
    marginRight: "20px",
    transition: "all 0.3s ease-in",
    "&:hover": {
      transform: "rotate(0deg)",
      boxShadow: "0px 8px 40px rgba(0, 0, 0, 0.2)",
    },
    [theme.breakpoints.up("sm")]: {
      width: "300px",
      height: "400px",
    },
  },
  content: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    textAlign: "center",
    color: "black",
  },
  title:{
    textAlign: "center",
    color: "black",
    marginBottom:"2%",
    marginTop:"2%"
  }
}));

const Mentor = (imgURL) => {
  const classes = useStyles();

  return (
    <>
    <div className={classes.title}>
        <Typography variant="h4">
        Connect with our experienced mentors and take your skills to the next level!
         </Typography>
    </div>
    <motion.div className={classes.root} >
      {[...Array(4)].map((_, index) => (
        <Card className={classes.card} key={index}>
          <CardContent className={classes.content}>
            <Image src={imgURL}/>
            <Typography variant="h6"></Typography>
          </CardContent>
        </Card>
      ))}
    </motion.div>
    </>
  );
};

export default Mentor;
