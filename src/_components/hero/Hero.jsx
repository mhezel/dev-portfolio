import { motion } from "framer-motion"
import "./hero.scss"

const textVariants = {
    initial:{
        x: -500,
        opacity: 0,
    },
    animate:{
        x: 0,
        opacity: 1,
        transition: { 
            duration: 1.0, 
            staggerChildren: 0.1 
        },
    },
    scrollButton: {
        opacity: 0,
        y: 10,
        transition: {
            duration: 1.8, repeat: Infinity,
        }
    }
};

const sliderTextVariants = {
    initial:{
        x: 0,
    },
    animate:{
        x: "-220%",
        transition: { 
            duration: 50, 
            repeat: Infinity,
            repeatType: "mirror",
        },
    },
};

function Hero() {
    return (
        <div className="hero">
            <div className="wrapper">
            <motion.div className="textContainer" variants={textVariants}
            initial="initial" animate="animate">
                <motion.h2 variants={textVariants}>Mhezel Mohammad</motion.h2>
                <motion.h1 variants={textVariants}>Software Developer and UI/UX Designer</motion.h1>
                <motion.div className="buttons" variants={textVariants}>
                        <motion.button variants={textVariants} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                            <a href="#Portfolio">See the latest work</a>
                        </motion.button>
                        <motion.button variants={textVariants} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                            <a href="#Contact">Reach out</a>
                        </motion.button>
                    </motion.div>
                <motion.img src="/scroll.png" alt="scroll-png" variants={textVariants} animate="scrollButton"/>
            </motion.div>
            </div>
            <motion.div className="slidingTextContainer" variants={sliderTextVariants} initial="initial" animate="animate">
                Software Application Developer
            </motion.div>
            <div className="imageContainer">
                <img src="/profile2.png" alt="hero-png"/>
            </div>
        </div>
    )
}

export default Hero
