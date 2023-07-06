import React from "react";
import CategoryCard from "./CategoryCard";
import icon1 from "../../../../assests/images/Landing page/Icon1.png";
import icon2 from "../../../../assests/images/Landing page/Icon2.png";
import icon3 from "../../../../assests/images/Landing page/Icon3.png";
import icon4 from "../../../../assests/images/Landing page/Icon4.png";
import icon5 from "../../../../assests/images/Landing page/Icon5.png";
import icon6 from "../../../../assests/images/Landing page/Icon6.png";
import icon7 from "../../../../assests/images/Landing page/Icon7.png";
const CategoriesSection = () => {
  const categories = [
    { icon: icon1 , title: "Technology", subtitle: "20+ Courses"},
    { icon: icon2 , title: "Business", subtitle: "18+ Courses"},
    { icon: icon3 , title: "Design", subtitle: "25+ Courses"},
    { icon: icon4 , title: "Marketing", subtitle: "73+ Courses"},
    { icon: icon5 , title: "Developement", subtitle: "40+ Courses"},
    { icon: icon6 , title: "IT", subtitle: "10+ Courses"},
    { icon: icon7 , title: "Graphic Design", subtitle: "5+ Courses"},
  ];

  return (
    <>
    <h2 className= "heading1" >EXPLORE PROGRAMS</h2>
    <h1 className= "heading2" >Choose Whats Best For You</h1>
    <div className="categories-section-container">
    <section className="categories-section">
      <div className="category-cards">
        {categories.map((category, index) => (
          <CategoryCard
            key={index}
            icon={category.icon}
            title={category.title}
            subtitle={category.subtitle}
          />
        ))}
      </div>
    </section>
    </div>
    </>
  );
};

export default CategoriesSection;
