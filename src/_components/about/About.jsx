import "./about.scss";
import { useState } from "react";
import { FaLinkedin, FaFacebook, FaGithub, FaInstagram } from 'react-icons/fa';
import { RiMore2Line } from "react-icons/ri";

function About() {

    const [ isOpen , setIsOpen ] = useState(false);

    return (
        <div className="about">
            <div className="content">
            <div className="bg1">
                <div className="imageWrapper">
                    <img src="/profile.png" alt="profile"/>
                </div>
                <div className="imageTextContainer">
                    <h3>Mhezel Mohammad</h3>
                    <hr/>
                    <h4>Sofware Developer</h4>
                </div>
                <div className="socials">
                        <a href="https://www.linkedin.com/in/mhezelkhan-mohammad-415284173/" target="_blank" rel="noopener noreferrer">
                            <FaLinkedin className="social-icon" />
                        </a>
                        <a href="https://www.facebook.com/mhezelkhan/" target="_blank" rel="noopener noreferrer">
                            <FaFacebook className="social-icon" />
                        </a>
                        <a href="https://github.com/mhezel" target="_blank" rel="noopener noreferrer">
                            <FaGithub className="social-icon" />
                        </a>
                        <a href="https://www.instagram.com/mhezyqt" target="_blank" rel="noopener noreferrer">
                            <FaInstagram className="social-icon" />
                        </a>
                    </div>
            </div>
            <div className="bg2">
                <div className="wrapper">
                    <div className="textContent">
                        <div className="textContainer">
                            <h1>Hello!</h1>
                            <h3>Here&apos;s who I am & what I do</h3>
                            <div className="buttons">
                                <button>Resume</button>
                                <button>Projects</button>
                            </div>
                        </div>
                        <p>
                            Hello! I&apos;m a dedicated and passionate full-stack developer with a solid foundation in computer engineering. Currently, I am furthering my expertise by pursuing a master&apos;s degree in Information Technology.
                        </p>
                        <p>
                            With over 4 years of experience in full-stack development, I have honed my skills in both front-end and back-end technologies. My journey in the tech industry has equipped me with the knowledge and tools to build robust, scalable, and user-friendly applications.
                        </p>
                        <p>
                            I thrive on solving complex problems and continuously learning new technologies to stay ahead in this ever-evolving field. My goal is to leverage my skills and experience to contribute to innovative projects that make a positive impact.
                        </p>
                    </div>
                </div>
            </div> 
                <div className="techStack">
                <button className="stackButton" onClick={() => setIsOpen(!isOpen)}>
                    <h1>Tech Stack</h1>
                </button>
                <div className="techStackContainer">
                {isOpen && (
                    <>
                    <div className="techStackItem">
                        <img src="/html.png" alt="HTML" />
                        <span>HTML</span>
                    </div>
                    <div className="techStackItem">
                        <img src="/css.png" alt="CSS" />
                        <span>CSS</span>
                    </div>
                    <div className="techStackItem">
                        <img src="/js.png" alt="JavaScript" />
                        <span>JavaScript</span>
                    </div>
                    <div className="techStackItem">
                        <img src="/react.png" alt="React" />
                        <span>React</span>
                    </div>
                    <div className="techStackItem">
                        <img src="/sass.png" alt="Sass" />
                        <span>Sass</span>
                    </div>
                    <div className="techStackItem">
                        <img src="/tailwind.png" alt="TailwindCSS" />
                        <span>TailwindCSS</span>
                    </div>
                    </>
                )}   
                </div>
                </div>
            </div>
        </div>
    );
}

export default About;
