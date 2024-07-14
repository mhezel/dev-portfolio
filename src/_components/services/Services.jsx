import { useRef } from "react";
import "./services.scss";
import { motion , useInView} from "framer-motion"

const variants = {
    initial: {
        x: -500,
        opacity: 0,
        y: 100,
    },
    animate:{
        x: 0,
        opacity: 1,
        y: 0,
        transition: {
            duration: 1,
            staggerChildren: 0.1,
        },
    },
};

function Services() {

    const ref = useRef();
    const isInView = useInView(ref, {margin: "-100px"});
    
    return (
        <motion.div 
        className="services" 
        variants={variants} 
        ref={ref}
        initial="initial"
        animate={isInView && "animate"}>
        {/* initial="inital" 
        whileInView="animate" */}
            <motion.div className="textContainer" variants={variants}>
                <p>I focus on helping your brand grow<br/>
                and move forward</p>
                <hr/>
            </motion.div>
            <motion.div className="titleContainer" variants={variants}>
                <div className="title">
                    <img src="/people.webp" alt="people"/>
                    <h1><motion.b whileHover={{color: "orange"}}>Unique </motion.b>Ideas</h1>
                </div>
                <div className="title">
                    <h1><motion.b whileHover={{color: "orange"}}>For your </motion.b>Business.</h1>
                    <button>What we do?</button>
                </div>
            </motion.div>
            <motion.div className="listContainer" variants={variants}>
                <motion.div className="box" whileHover={{background: "lightgray", color: "black"}}>
                    <h2>Branding</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, repellat? Voluptates temporibus quaerat sapiente atque quisquam at necessitatibus minus officiis, dolor a quis illo corrupti ullam earum error illum. Excepturi.</p>
                    <button>Go</button>
                </motion.div>
                <motion.div className="box" whileHover={{background: "lightgray", color: "black"}}>
                    <h2>Branding</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, repellat? Voluptates temporibus quaerat sapiente atque quisquam at necessitatibus minus officiis, dolor a quis illo corrupti ullam earum error illum. Excepturi.</p>
                    <button>Go</button>
                </motion.div>
                <motion.div className="box" whileHover={{background: "lightgray", color: "black"}}>
                    <h2>Branding</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, repellat? Voluptates temporibus quaerat sapiente atque quisquam at necessitatibus minus officiis, dolor a quis illo corrupti ullam earum error illum. Excepturi.</p>
                    <button>Go</button>
                </motion.div>
                <motion.div className="box" whileHover={{background: "lightgray", color: "black"}}>
                    <h2>Branding</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, repellat? Voluptates temporibus quaerat sapiente atque quisquam at necessitatibus minus officiis, dolor a quis illo corrupti ullam earum error illum. Excepturi.</p>
                    <button>Go</button>
                </motion.div>
            </motion.div>
        </motion.div>
    )
}

export default Services
