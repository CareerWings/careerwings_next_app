import { Accordion, AccordionDetails, AccordionSummary, Typography } from '@material-ui/core';
import { ExpandMore } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  root: {
    color: 'white',
  },
  container:{
    margin: '5%',
  },
  accordion:{
    backgroundColor :'grey',
    color : 'white'
  },
  accordion_title:{
    paddingBottom:"2%"
  }
}));

const Faq = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
        <div className={classes.container}>
            <h1 className={classes.accordion_title}>Have Questions?</h1>
            <Accordion className={classes.accordion}>
                <AccordionSummary expandIcon={<ExpandMore />} aria-controls="panel1a-content" id="panel1a-header">
                <Typography>How often do courses run?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                <Typography>
                    {"Each instructor has control over when they open up enrollment. On average though courses run four times per year. Join our mailing list to be the first to hear when enrollments open."}
                </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion className={classes.accordion}>
                <AccordionSummary expandIcon={<ExpandMore />} aria-controls="panel2a-content" id="panel2a-header">
                <Typography>{"What are the course formats?"}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                <Typography>
                    {"Each course is unique and typically ranges from 2-4 weeks. Depending on the topic, it will be a mixture of hands-on projects, live discussions, and video lessons."}
                </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion className={classes.accordion}>
                <AccordionSummary expandIcon={<ExpandMore />} aria-controls="panel3a-content" id="panel3a-header">
                <Typography>
                    {"Do you offer team discounts?"}
                </Typography>
                </AccordionSummary>
                <AccordionDetails>
                <Typography>
                    {"Yes! Send us a message on the \"Dive for Teams\" page and we'll get you set up."}
                </Typography>
                </AccordionDetails>
            </Accordion>
        </div>
    </div>
  );
};

export default Faq;