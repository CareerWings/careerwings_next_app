import { motion } from "framer-motion"
import Image from 'next/image';
const cardVariants = {
  offscreen: {
    y: 300
  },
  onscreen: {
    y: 50,
    rotate: -10,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8
    }
  }
}

const hue =(h) =>{ return `hsl(${h}, 100%, 50%)`}

function Mentor({ imgUrl, colorA , colorB }) {
  const background = `linear-gradient(306deg, ${hue(colorA)}, ${hue(colorB)})`

  return (
    <motion.div
      className="card-container"
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.8 }}
    >
      <div className="splash" style={{ background }} />
      <motion.div className="card" variants={cardVariants}>
        <Image src={imgUrl} width={100} height={100}/>
      </motion.div>
    </motion.div>
  )
}
export default Mentor;