// import { Card, CardContent, Typography } from '@material-ui/core';
// import { makeStyles } from '@material-ui/core/styles';

// const useStyles = makeStyles((theme) => ({
//   root: {
//     backgroundColor: 'black',
//     color: 'white',
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'space-between',
//     padding: '50px',
//     [theme.breakpoints.down('sm')]: {
//       flexDirection: 'column',
//     },
//   },
//   textContainer: {
//     width: '50%',
//     [theme.breakpoints.down('sm')]: {
//       width: '100%',
//     },
//   },
//   title: {
//     marginBottom: '20px',
//   },
//   cardContainer: {
//     display: 'flex',
//     justifyContent: 'space-between',
//     width: '50%',
//     [theme.breakpoints.down('sm')]: {
//       width: '100%',
//       marginTop: '50px',
//       justifyContent: 'center',
//     },
//   },
//   card: {
//     backgroundColor: 'white',
//     borderRadius: '20px',
//     boxShadow: '0 10px 20px rgba(0, 0, 0, 0.1)',
//     display: 'flex',
//     flexDirection: 'column',
//     justifyContent: 'center',
//     alignItems: 'center',
//     height: '200px',
//     width: '200px',
//     transform: 'rotate(-15deg)',
//     transition: 'transform 0.3s ease-in-out',
//     '&:hover': {
//       transform: 'rotate(0deg)',
//       boxShadow: '0 10px 20px rgba(0, 0, 0, 0.3)',
//     },
//   },
// }));

// const Hero = () => {
//   const classes = useStyles();

//   return (
//     <div className={classes.root}>
//       {/* <div className={classes.textContainer}>
//         <Typography variant="h4" className={classes.title}>
//           Welcome to my website
//         </Typography>
//         <Typography variant="body1">
//           This is a demo website built with Next.js and Material UI.
//         </Typography>
//       </div> */}
//       <div className={classes.cardContainer}>
//         <Card className={classes.card}>
//           <CardContent>
//             <Typography variant="h6">Card 1</Typography>
//           </CardContent>
//         </Card>
//         <Card className={classes.card}>
//           <CardContent>
//             <Typography variant="h6">Card 2</Typography>
//           </CardContent>
//         </Card>
//         <Card className={classes.card}>
//           <CardContent>
//             <Typography variant="h6">Card 3</Typography>
//           </CardContent>
//         </Card>
//         <Card className={classes.card}>
//           <CardContent>
//             <Typography variant="h6">Card 4</Typography>
//           </CardContent>
//         </Card>
//       </div>
//     </div>
//   );
// };

// export default Hero;

import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "85vh",
  },
  card: {
    borderRadius: '20px',
    boxShadow: '0 10px 20px rgba(0, 0, 0, 0.1)',
    position: "relative",
    width: "250px",
    height: "350px",
    backgroundColor: "white",
    boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)",
    transform: "rotate(-15deg)",
    transition: "all 0.3s ease",
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

const Hero = () => {
  const classes = useStyles();

  return (
    <>
    <div className={classes.title}>
        <Typography variant="h4">
        Welcome to the deep end of design education
         </Typography>
    </div>
    <div className={classes.root}>
      {[...Array(4)].map((_, index) => (
        <Card className={classes.card} key={index}>
          <CardContent className={classes.content}>
            <Typography variant="h6">Card {index + 1}</Typography>
          </CardContent>
        </Card>
      ))}
    </div>
    </>
  );
};

export default Hero;
