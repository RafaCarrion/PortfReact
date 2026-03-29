import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import video_bg from "../../assets/videos/background.mp4";
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
                src={video_bg}
                autoPlay
                muted
                loop
                playsInline
            />

            <div className="text">
                <h1 className="main-title">Rafa Carrion</h1>
                <span className="static-header">Multidisciplinary Audio Engineer</span>
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