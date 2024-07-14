import "./cursor.scss";
import { useState, useEffect } from "react";
import { motion } from "framer-motion"

const initialState = {
    x: 0,
    y: 0,
}

function Cursor() {

    const [position , setPosition] = useState(initialState);
    useEffect(() => {
        const mouseMove = (e) => {
            setPosition({x: e.clientX, y: e.clientY});
        };

        window.addEventListener("mousemove", mouseMove);

        return () => {
            window.removeEventListener("mousemove", mouseMove);
        };
    }, []);

    return (
        <motion.div className="cursor" animate={{x: position.x, y: position.y}}>
        </motion.div>
    )
}

export default Cursor
