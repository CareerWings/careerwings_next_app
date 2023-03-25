import { motion } from "framer-motion";
var cardVariants = {
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
};
var hue = function (h) { return "hsl(".concat(h, ", 0%, 0%)"); };
function Mentor(Props) {
    const background = `linear-gradient(306deg, ${hue(Props.colorA)}, ${hue(Props.colorB)})`;
    return (
        <motion.div
            className="card-container"
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.8 }}>
            <div className="splash" style={{ background }}></div>
            <motion.div className="card" variants={cardVariants}>
                {Props.image}
            </motion.div>
        </motion.div>
    );
}

export default Mentor;
