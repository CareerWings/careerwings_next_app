import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
const CategoryCard = ({ icon, title, subtitle }) => {
  return (
    <div className="category-card">
      <Link href="/courses" style={{ textDecoration: 'none', color: 'black'}}>
      <Image className="icon" src={icon}  alt="Picture of the author"
      width="50"
      height="50"/>
      <h3>{title}</h3>
      <p>{subtitle}</p>
      </Link>``
    </div>
     
  );
};

export default CategoryCard;
