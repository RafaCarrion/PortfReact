import img_workshop1 from "./assets/images/berkleeWorkShop1.jpg";
import img_switch from "./assets/images/switch.png";
import colrun from "./assets/images/colrun.jpg";
import { FaInstagram } from "react-icons/fa";

const logotext = "Rafa Carrion";
const meta = {
    title: "Rafa Carrion",
    description: "I´m an audio tech guy working",
};

const introdata = {
    title: "An audio tech guy",
    animated: {
        first: "Music studios sysadmin",
        second: "Unity 3D specialized",
        third: "Wwise, Fmod or native audio UE5 and Unity3D",
        fourth: "Sound design for linear and interactive media",
    },
    description: "I manage the infrastructure of over 40 music studios/music labs at Berklee College of Music Valencia with with Docker Ansible and custom SQL-based APIs. I work in game audio and sound design, backed by an engineering degree and a Master’s in Video Game Programming (Unity3D).",
    your_img_url: "https://images.unsplash.com/photo-1514790193030-c89d266d5a9d",
};

const dataabout = {
    title: "abit about my self",
    aboutme: `As an audio and Systems Engineer, I manage the infrastructure of over 40 music studios/music labs, designing scalable, automated systems that ensure reliability and efficiency. My work includes containerized deployments with Docker, orchestration through an Ansible cluster, and the development of SQL-based APIs for system scanning, monitoring, and maintenance.
    I focus on automation, stability, and infrastructure resilience in environments where downtime directly impacts creative production.
    Alongside my infrastructure role, I work in game audio and sound design, backed by an engineering degree and a Master’s in Video Game Programming (Unity3D). This dual expertise allows me to bridge creative workflows with robust technical implementation, from studio infrastructure to interactive audio systems in games.
    I am particularly interested in hybrid roles where infrastructure, automation, and creative technology intersect.`,
};
const worktimeline = [{
    jobtitle: "Technology Coordinator",
    where: "Berklee College of Music",
    date: "2023",
},
{
    jobtitle: "Sound Designer & Audio Programmer",
    where: "Gold Gold Gold Adventure Gold",
    date: "2025",
},
{
    jobtitle: "Sound Designer & Audio Programmer",
    where: "Islanders",
    date: "2024",
},
];

const skills = [{
    name: "Unity 3D",
    value: 100,
},
{
    name: "Unreal Engine",
    value: 80,
},
{
    name: "Python",
    value: 90,
},
{
    name: "Dante",
    value: 85,
},
{
    name: "Ansible",
    value: 80,
},
{
    name: "Docker",
    value: 80,
},
{
    name: "API REST",
    value: 60,
},
];

const services = [{
    title: "Game Audio",
    description: "From sound design to audio programming, I can help you with your game audio needs.",
},
{
    title: "Systems Engineering",
    description: "Setting up and maintaining audio systems.",
},
{
    title: "Workshops and Education",
    description: "Workshops and courses on game audio and sound design.",
},
];

const dataportfolio = [
    {
        id: "workshops",
        img: img_workshop1,
        description: "Video Games Workshops",
        link: "/portfoliodetail/workshops",   // ← ruta interna
    },
    {
        id: "VideoGames",
        img: img_switch,
        description: "Video Games Programming",
        link: "/portfoliodetail/videogames",   // ← ruta interna
    },
    {
        id: "LinearMedia",
        img: colrun,
        description: "Linear media and commercials",
        link: "/portfoliodetail/linearmedia",   // ← ruta interna
    },
];
const contactConfig = {
    YOUR_EMAIL: "name@domain.com",
    YOUR_FONE: "(555)123-4567",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vehicula eu nunc et sollicitudin. Cras pulvinar, nisi at imperdiet pharetra. ",
    // creat an emailjs.com account 
    // check out this tutorial https://www.emailjs.com/docs/examples/reactjs/
    YOUR_SERVICE_ID: "service_id",
    YOUR_TEMPLATE_ID: "template_id",
    YOUR_USER_ID: "user_id",
};

const socialprofils = {
    github: "https://github.com/RafaCarrion",
    linkedin: "https://www.linkedin.com/in/rafaelcarriongarcia",
    FaInstagram: "https://www.instagram.com/raffcarrion/",
};
const blogdata = [
    {
        id: "wwise-unity-integration",
        title: "Wwise and Unity Integration",
        date: "March 2024",
        description: "A deep dive into setting up Wwise for a Unity project, focusing on spatial audio and event-based architectures.",
        img: "https://images.unsplash.com/photo-1550745165-9bc0b252726f",
        videoId: "6n2y2CfXEQs", // YouTube video
        content: `In this article, I explain how to integrate Wwise into a Unity3D project for game audio. 
        We'll cover the basics of acoustic spaces, RTPCs, and event posting from C# scripts. 
        This is a secondary project I worked on during a Berklee workshop.`
    },
    {
        id: "islanders-sound-design",
        title: "Islanders: Secondary Sound Design",
        date: "February 2024",
        description: "Exploration of ambient textures and procedural soundscapes for minimalist city builders.",
        img: "https://images.unsplash.com/photo-1614850523296-e8c041de239b",
        videoId: "q7JfhZ5yVT0",
        content: `Islanders is a fantastic game. I worked on a custom sound redesign to experiment with more organic, ASMR-like textures. 
        The video shows the results of the procedural wind systems I implemented in Fmod.`
    },
    {
        id: "system-automation-ansible",
        title: "Large-Scale Audio System Automation",
        date: "January 2024",
        description: "How we use Ansible to automate the maintenance of 40+ music labs at Berklee Valencia.",
        img: "https://images.unsplash.com/photo-1558494949-ef010cbdcc51",
        content: `Managing 40+ labs is a challenge. Using Ansible, we ensure that every machine has the correct project templates and 
        middleware versions (Wwise/Fmod/Dante). This article covers the SQL-based API we built to scan and monitor these systems.`
    }
];

export {
    meta,
    dataabout,
    dataportfolio,
    worktimeline,
    skills,
    services,
    introdata,
    contactConfig,
    socialprofils,
    logotext,
    blogdata, // Exporting new blogdata
};