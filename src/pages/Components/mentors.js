import Image from 'next/image';
import Marquee from 'react-fast-marquee';
import Img1 from '../../../assests/images/Landing page/Mentors/Mentor-Section.png';

const Mentor = () => {
  const cards = [
    {
      id: 1,
      title: 'Card 1',
      subheading: 'Subheading 1',
      image: 'https://www.shutterstock.com/image-photo/handsome-man-blue-glasses-reading-260nw-588352718.jpg',
    },
    {
      id: 2,
      title: 'Card 2',
      subheading: 'Subheading 2',
      image: 'https://www.shutterstock.com/image-photo/handsome-man-blue-glasses-reading-260nw-588352718.jpg',
    },
    {
      id: 3,
      title: 'Card 3',
      subheading: 'Subheading 3',
      image: 'https://www.shutterstock.com/image-photo/handsome-man-blue-glasses-reading-260nw-588352718.jpg',
    },
    {
      id: 4,
      title: 'Card 4',
      subheading: 'Subheading 4',
      image: 'https://www.shutterstock.com/image-photo/handsome-man-blue-glasses-reading-260nw-588352718.jpg',
    },
    {
      id: 5,
      title: 'Card 5',
      subheading: 'Subheading 5',
      image: 'https://www.shutterstock.com/image-photo/handsome-man-blue-glasses-reading-260nw-588352718.jpg',
    },
    {
      id: 6,
      title: 'Card 6',
      subheading: 'Subheading 6',
      image: 'https://www.shutterstock.com/image-photo/handsome-man-blue-glasses-reading-260nw-588352718.jpg',
    },
    {
      id: 7,
      title: 'Card 7',
      subheading: 'Subheading 7',
      image: 'https://www.shutterstock.com/image-photo/handsome-man-blue-glasses-reading-260nw-588352718.jpg',
    },
    {
      id: 8,
      title: 'Card 8',
      subheading: 'Subheading 8',
      image: 'https://www.shutterstock.com/image-photo/handsome-man-blue-glasses-reading-260nw-588352718.jpg',
    },
    {
      id: 9,
      title: 'Card 9',
      subheading: 'Subheading 9',
      image: 'https://www.shutterstock.com/image-photo/handsome-man-blue-glasses-reading-260nw-588352718.jpg',
    },
    {
      id: 10,
      title: 'Card 10',
      subheading: 'Subheading 10',
      image: 'https://www.shutterstock.com/image-photo/handsome-man-blue-glasses-reading-260nw-588352718.jpg',
    },
  ];

  return (
    <>
    <section className="responsive-section">
      <p style={{textAlign:'center',paddingTop: 50+"px"}}>EXPERIENCED MENTORS</p>
      <h2 style={{paddingLeft: 350+"px"}}>Learn From Industry Standards</h2>
      <div className="content-container">
        <div className="left-content">
          <Image src={Img1} alt="Main Image" width="500" height="500"/>
        </div>

        <div className="right-content">
          <div className="image-frames">
            <img src="/path-to-frame-1.jpg" alt="Frame 1" />
            <img src="/path-to-frame-2.jpg" alt="Frame 2" />
            <img src="/path-to-frame-3.jpg" alt="Frame 3" />
          </div>
        </div>
      </div>
    </section>
    <Marquee speed={100}>
      {cards.map((card) => (
        <div key={card.id} className="marquee-card">
          <div className="marquee-card-image">
            <Image src={card.image} alt={card.title} width={300} height={200} />
          </div>
          <div className="marquee-card-content">
            <h3>{card.title}</h3>
            <p>{card.subheading}</p>
          </div>
        </div>
      ))}
    </Marquee>
    </>
  );
};

export default Mentor;