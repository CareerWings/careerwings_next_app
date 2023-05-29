import Image from 'next/image';
import Marquee from 'react-fast-marquee';

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
  );
};

export default Mentor;