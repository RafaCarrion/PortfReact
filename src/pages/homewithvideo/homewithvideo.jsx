import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// Importa los iconos que necesites (ejemplo usando react-icons/fa)
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa"; 
import { socialprofils } from "../../content_option";
import roca from "../../assets/videos/Background Composition.mov";
import "./style.css";

const texts = [
    "Game engine programming",
    "Specialized in Unity3D",
    "Audio middleware solutions Wwise and Fmod"
];

const Home = () => {
    const [currentText, setCurrentText] = useState("");
    const [index, setIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);

    useEffect(() => {
        if (index >= texts.length) return; 
        if (charIndex < texts[index].length) {
            const timeout = setTimeout(() => {
                setCurrentText((prev) => prev + texts[index][charIndex]);
                setCharIndex(charIndex + 1);
            }, 75);
            return () => clearTimeout(timeout);
        } else {
            const timeout = setTimeout(() => {
                setCurrentText("");
                setCharIndex(0);
                setIndex(index + 1 >= texts.length ? 0 : index + 1); 
            }, 1000);
            return () => clearTimeout(timeout);
        }
    }, [charIndex, index]);

    return (
        <section className="intro_sec">
            <div className="overlay"></div>
            <video
                className="home_video"
                src={roca}
                autoPlay
                muted
                loop
                playsInline
            />
            
            {/* --- NUEVA BARRA SOCIAL IZQUIERDA CON LOGOS --- */}
            <div className="social-sidebar">
                <a href={socialprofils.github} target="_blank" rel="noopener noreferrer" title="Github">
                    <FaGithub />
                </a>
                <a href={socialprofils.linkedin} target="_blank" rel="noopener noreferrer" title="Linkedin">
                    <FaLinkedin />
                </a>
                <a href={socialprofils.twitter} target="_blank" rel="noopener noreferrer" title="Twitter">
                    <FaTwitter />
                </a>
                {/* Ejemplo si también tienes facebook en tu config */}
                {/* <a href={socialprofils.facebook} target="_blank" rel="noopener noreferrer" title="Facebook">
                    <FaFacebook />
                </a> */}
            </div>

            <div className="text">
                <span className="static-header">Programmer and Sound Designer</span>
                <span id="typewriter">{currentText}</span>
            </div>

            {/* Barra de navegación derecha (se mantiene) */}
            <nav className="side-nav">
                <Link to="/portfolio" className="side-link">Portfolio</Link>
                <Link to="/about" className="side-link">About</Link>
                <Link to="/contact" className="side-link">Contact</Link>
            </nav>
        </section>
    );
};

export default Home;