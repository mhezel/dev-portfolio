import { useEffect, useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const portfolioItems = [
    {
        id: 1,
        title: "La Pace Perfetta",
        img: "/la-pace-perfetta.png",
        desc: "Server-side rendering and static site generation with NextJS, Modular and responsive design using NextJS and TailwindCSS. Robust global state management with Context API.",
        sourceCodeLink: "https://github.com/mhezel/la-pace-perfetta",
        demoLink: "https://la-pace-perfetta-client.vercel.app/",
    },
    {
        id: 2,
        title: "La Pace Perfetta - Admin",
        img: "/la-pace-perfetta-admin.png",
        desc: "The Cabin Booking Management System is a comprehensive solution designed to streamline cabin bookings with a robust admin interface and a user-friendly client-side application. This system leverages modern technologies to ensure efficient data handling, state management, and a seamless user experience.",
        sourceCodeLink: "https://github.com/mhezel/la-pace-perfetta",
        demoLink: "https://la-pace-perfetta-admin.vercel.app/",
    },
    {
        id: 3,
        title: "Consumers I-Access",
        img: "/consumers.png",
        desc: "A digital platform streamlining utility operations for enhanced transparency and efficient customer experience.",
        sourceCodeLink: "https://github.com/mhezel",
        demoLink: "https://consumers.zamcelco.com.ph/",
    },
    {
        id: 4,
        title: "Margaux Pizzeria",
        img: "/margaux-pizza.png",
        desc: "The project utilizes React Router for routing and data fetching via loaders and actions, TailwindCSS for styling, and Redux for global state management.",
        sourceCodeLink: "https://github.com/mhezel/margaux-pizzeria-co",
        demoLink: "https://margaux-pizzeria-co.pages.dev/",
    },
    {
        id: 5,
        title: "MovieFlix",
        img: "/movieflix.png",
        desc: "Movieflix lets users search, view, and list their favorite movies using the OMDb API with intuitive navigation.",
        sourceCodeLink: "https://github.com/mhezel/movieflix",
        demoLink: "https://movieflix.pages.dev/",
    },
    {
        id: 6,
        title: "BeautyLair",
        img: "/beauty-lair.png",
        desc: "Intuitive hub for exploring, sharing, and learning about beauty products, techniques, and trends.",
        sourceCodeLink: "https://github.com/mhezel",
        demoLink: "https://beautylair.pages.dev/",
    },
    {
        id: 7,
        title: "React Quiz App",
        img: "/react-quiz.png",
        desc: "Quiz app fetches timed questions via API, offering a user-friendly interface, progress tracking and score comparison.",
        sourceCodeLink: "https://github.com/mhezel/Quiz-App-REACTjs",
        demoLink: "https://react-quiz-app-d8r.pages.dev/",
    },
];

const Single = ({ item }) => {

    const ref = useRef();

    const { scrollYProgress } = useScroll({
        target: ref,
        // offset: ["start start", "end start"],
    });

    const y = useTransform(scrollYProgress, [0, 1], ["-300", "300"]);

    useEffect(() => {
        if (ref.current) {
            ref.current.style.setProperty('--background-image', `url(${item.img})`);
        }
    }, [item.img]);

    return (
        <section>
           <div className="container">
           <div className="wrapper" ref={ref}>
                <div className="imageContainer" ref={ref}>
                    <img src={item.img} alt={item.id}/>
                </div>
                <motion.div className="textContainer" style={{y:y}}>
                    <h2>{item.title}</h2>
                    <p>{item.desc}</p>
                    <div className="buttonPortfolio">
                            <a href={item.demoLink} target="_blank" rel="noopener noreferrer">
                                <button>See Demo</button>
                            </a>
                            <a href={item.sourceCodeLink} target="_blank" rel="noopener noreferrer">
                                <button>Source Code</button>
                            </a>
                    </div>
                </motion.div>
           </div>
           </div>
           <style>
                {`
                    .wrapper {
                        --background-image: url(${item.img});
                    }
                    .wrapper::before {
                        background-image: var(--background-image);
                    }
                `}
            </style>
        </section>
    );
}   

function Portfolio() {

    const ref = useRef();
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["end end", "start start"],
    });

    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
    });

    return (
        <div className="portfolio" ref={ref}>
            <div className="progress">
                <h1>Featured Works</h1>
                <motion.div  style={{scaleX: scaleX}}className="progressBar"></motion.div>
            </div>

            {portfolioItems.map((item) => (
                <Single key={item.id} item={item} />
            ))}
        </div>
    )
}

export default Portfolio
