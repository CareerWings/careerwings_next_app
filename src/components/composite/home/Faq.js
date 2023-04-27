import { Accordion, AccordionDetails, AccordionSummary, Typography } from '@mui/material';
import { ExpandMore } from '@mui/icons-material';
import { styled } from '@mui/system';

const Container = styled('div')(({ theme }) => ({
  margin: '5%',
}));

const AccordionStyled = styled(Accordion)(({ theme }) => ({
  backgroundColor :'grey',
  color : 'white'
}));

const AccordionTitle = styled('h1')(({ theme }) => ({
  paddingBottom:"2%",
}));

const Faq = () => {
  return (
    <Container>
      <AccordionStyled>
        <AccordionTitle>Have Questions?</AccordionTitle>
        <AccordionSummary expandIcon={<ExpandMore />} aria-controls="panel1a-content" id="panel1a-header">
          <Typography>How often do courses run?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            {"Each instructor has control over when they open up enrollment. On average though courses run four times per year. Join our mailing list to be the first to hear when enrollments open."}
          </Typography>
        </AccordionDetails>
      </AccordionStyled>
      <AccordionStyled>
        <AccordionSummary expandIcon={<ExpandMore />} aria-controls="panel2a-content" id="panel2a-header">
          <Typography>What are the course formats?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            {"Each course is unique and typically ranges from 2-4 weeks. Depending on the topic, it will be a mixture of hands-on projects, live discussions, and video lessons."}
          </Typography>
        </AccordionDetails>
      </AccordionStyled>
      <AccordionStyled>
        <AccordionSummary expandIcon={<ExpandMore />} aria-controls="panel3a-content" id="panel3a-header">
          <Typography>Do you offer team discounts?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>{"Yes! Send us a message on the \"Dive for Teams\" page and we'll get you set up."}</Typography>
        </AccordionDetails>
      </AccordionStyled>
    </Container>
  );
};

export default Faq;
