import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(2),
    backgroundColor: theme.palette.background.paper,
  },
  title: {
    marginBottom: theme.spacing(5),
    textAlign: "center",
  },
  avatar: {
    width: "100%",
    height: "100%",
    objectFit: "contain",
  },
  mentorName: {
    marginTop: theme.spacing(1),
    textAlign: "center",
  },
}));

const mentors = [
  { name: "Mentor 1", image: "https://assets.entrepreneur.com/content/3x2/2000/1392935090-best-choose-heroes-learn-mentor.jpg" },
  { name: "Mentor 2", image: "https://www.thebalancemoney.com/thmb/A_uhaT0yyVle46Bfki8domRJ9Mo=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/colleagues-business-woman-working-978531556-b538d8fc0ddc492db50b9189235b2bc8.jpg" },
  { name: "Mentor 3", image: "https://www.thebalancemoney.com/thmb/Vg404OdRDFIHOjvpaiqaHH3A_RY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-555250265-5c379c9dc9e77c0001b89187.jpg" },
  { name: "Mentor 4", image: "https://guider-ai.com/wp-content/uploads/2022/02/what-is-a-mentor.png" },
  { name: "Mentor 5", image: "https://coffeemug.ai/blog/wp-content/uploads/2022/01/Mentor-PNG-Final-1024x768.png" },
];

const Mentor = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography variant="h4" component="h2" className={classes.title}>
        Our Mentors
      </Typography>
      <Grid container spacing={3}>
        {mentors.map((mentor, index) => (
          <Grid item xs={6} sm={4} md={2} key={index}>
            <Avatar
              alt={mentor.name}
              src={mentor.image}
              className={classes.avatar}
            />
            <Typography
              variant="subtitle1"
              component="h3"
              className={classes.mentorName}
            >
              {mentor.name}
            </Typography>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Mentor;
