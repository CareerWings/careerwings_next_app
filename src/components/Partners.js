import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const images = [
  "https://static.startuptalky.com/2021/05/Ambuja-Cement-startuptalky.jpg",
  "https://www.ambujacement.com/Upload/Content_Files/ambuja-cement-giant.jpg",
  "https://www.comaron.com/images/images/uploads/1629786132-ambuja%20plus%20cement%20price%20today.png",
  "https://static.startuptalky.com/2021/05/Ambuja-Cement-startuptalky.jpg",
];

const Partner = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImage((currentImage + 1) % images.length);
    }, 3000);

    return () => clearInterval(intervalId);
  }, [currentImage]);

  return (
    <div className="carousel">
      <motion.div
        className="image-container"
        style={{ backgroundImage: `url(${images[currentImage]})` }}
        animate={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        transition={{ ease:"easeIn" ,duration: 0.9 }}
      />
    </div>
  );
};

export default Partner;
