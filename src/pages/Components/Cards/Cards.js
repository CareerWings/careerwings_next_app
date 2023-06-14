import React from 'react';
import Card from './card';
import SchoolIcon from '@mui/icons-material/School';
import DescriptionIcon from '@mui/icons-material/Description';
import CastForEducationIcon from '@mui/icons-material/CastForEducation';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import styles from './Card.module.css'
const Cards = () => {
  return (
    <div className={styles.cardsContainer}>
      <Card
        cicon={AssignmentIndIcon}
        title="Card 1"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
      />
      <Card
        cicon={SchoolIcon}
        title="Card 2"
        description="Nulla faucibus consectetur tortor ac commodo."
      />
      <Card
        cicon={DescriptionIcon}
        title="Card 3"
        description="Praesent efficitur metus at leo blandit, ac interdum leo tincidunt."
      />
      <Card
        cicon={CastForEducationIcon}
        title="Card 4"
        description="Suspendisse cursus est id orci congue ullamcorper."
      />
    </div>
  );
};

export default Cards;
