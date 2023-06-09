import React from 'react';
import Male1 from '../../../../assests/images/Landing page/Know/male1.png';
import Male2 from '../../../../assests/images/Landing page/Know/male2.png';
import Logo from '../../../../assests/images/Landing page/Know/Logo.jpg'
import tick1 from '../../../../assests/images/Landing page/Know/tick-square.png';
import tick2 from '../../../../assests/images/Landing page/Know/tick-square-1.png';
import tick3 from '../../../../assests/images/Landing page/Know/tick-square-2.png';
import tick4 from '../../../../assests/images/Landing page/Know/tick-square-3.png';
import Image from 'next/image';
import Link from 'next/link';
const SectionWithCards = () => {
  const cards = [
    { icon: tick1, subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam dignissim, sem non convallis molestie.' },
    { icon: tick2, subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam dignissim, sem non convallis molestie.' },
    { icon: tick3, subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam dignissim, sem non convallis molestie.' },
    { icon: tick4, subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam dignissim, sem non convallis molestie.' },
  ];

  return (
    <section className="section-with-cards">
      <div className="content-container">
        <div className="left-content">
         

          <div className="card-container">
            {cards.map((card, index) => (
              <div className="card" key={index}>
                <Image className="card-icon" src={card.icon} width="50" height="50"/>
                <div className="card-subtitle">{card.subtitle}</div>
              </div>
            ))}
          </div>

          <Link href="/courses" className="action-button">Explore Programs &gt;&gt; </Link>
        </div>

        <div className="right-content">
        <Image className='Image1' src={Male1} alt="Picture of the male1" width="300" height="300"/>
        <Image src={Male2} alt="Picture of the male2" width="300" height="300"/>
        </div>
      </div>
    </section>
  );
};

export default SectionWithCards;
