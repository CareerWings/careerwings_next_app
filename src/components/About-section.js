import React, { useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import lottieImage from "../../assests/img/lottie-element.png";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const AboutSec = () => {
  const [drop, setDrop] = useState(false);

  return (
    <section className="home-about-sec">
      <div className="about-desc">
        <Typography variant="h1">
          <span>Boost </span>your <span>career </span> prospects
        </Typography>
        <Typography style={{ color: "#161D27", marginBottom: "1em"}}>
          Let Career Wings take you under its wing and provide you with the
          guidance and support you need to achieve your goals! 🦅
        </Typography>
        <div className="accordion">
          <Accordion
            style={{
              boxShadow: "none", borderBottom: '1.5px solid black'}
            }
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography variant="h3">Experienced Mentors</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            style={{
              boxShadow: "none", borderBottom: '1.5px solid black'
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography variant="h3">Deserving Internships</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            style={{
              boxShadow: "none", borderBottom: '1.5px solid black'
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography variant="h3">Professional Resume</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            style={{
              boxShadow: "none"
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography variant="h3">Learn Anywhere</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </div>
      </div>
      <div className="about-illustration">
        <Image src={lottieImage} alt="" width="350px" height="300px" />
      </div>
    </section>
  );
};

export default AboutSec;
