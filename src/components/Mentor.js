import React, { useState } from "react";
import { motion } from "framer-motion";

const Mentor = ({ imgUrl, title, description }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <motion.div
      className="card"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      whileHover={{ scale: 1.1 }}
    >
      <motion.img
        className="card-image"
        src={imgUrl}
        alt={title}
        animate={isHovered ? { opacity: 0.5 } : { opacity: 1 }}
      />
      {isHovered && (
        <motion.div className="card-content">
          <motion.h2>{title}</motion.h2>
          <motion.p>{description}</motion.p>
        </motion.div>
      )}
    </motion.div>
  );
};

export default Mentor;
