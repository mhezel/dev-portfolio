import { motion } from "framer-motion";

const variants = {
    open: {
        transition: {
            staggerChildren: 0.3
        }
    },
    closed: {
        transition: {
            staggerChildren: 0.07,
            staggerDirection: -1,
        }
    },

};

const itemsVariants = {
    open: {
       y: 0,
       opacity: 1,
    },
    closed: {
       y: 50,
       opacity: 0,
    },

};

function Links() {

    const linkItems = [
        "Homepage",
        "Services",
        "Portfolio",
        "About Me",
        "Contact",
    ];

    return (
        <motion.div className="links" variants={variants}>
            {linkItems.map((item => (
                <motion.a href={`#${item}`} 
                key={item} variants={itemsVariants} 
                whileHover={{scale: 1.1}} whileTap={{scale: 0.95}}
                >{item}</motion.a>
            )))}
        </motion.div>
    )
}

export default Links
