import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      padding: theme.spacing(4),
      backgroundColor: theme.palette.secondary.main,
      color: theme.palette.secondary.contrastText,
      [theme.breakpoints.up('sm')]: {
        padding: theme.spacing(4),
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.primary.contrastText,
      },
    },
    text: {
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
    },
    avatar: {
      width: theme.spacing(50),
      height: theme.spacing(50),
      marginRight: theme.spacing(10),
    },
    title:{
        textAlign: "center",
        color: "black",
        marginBottom:"2%",
        marginTop:"2%"
      },
  }));
  
  const Partner = ({ items }) => {
    const classes = useStyles();
  
    const [index, setIndex] = React.useState(0);
  
    React.useEffect(() => {
      const intervalId = setInterval(() => {
        setIndex((index) => (index + 1) % items.length);
      }, 2000);
  
      return () => clearInterval(intervalId);
    }, [items]);
  
    const item = items[index];
  
    return (
        <>
        <div className={classes.title}>
        <Typography variant="h4">
        Innovating Together: Our Valued Partners
         </Typography>
        </div>
      <Paper elevation={3} className={classes.root}>
        <Box display="flex" alignItems="center">
          <Avatar alt={item.title} src={item.image} className={classes.avatar} />
          <Box className={classes.text}>
            <Typography variant="subtitle1" component="span">
              {item.title}
            </Typography>
          </Box>
        </Box>
      </Paper>
      </>
    );
  };
  
  export default Partner;