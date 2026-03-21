import img_workshop1 from "./assets/images/berkleeWorkShop1.jpg";
import img_switch from "./assets/images/switch.png";
import colrun from "./assets/images/colrun.jpg";

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
    aboutme: `As a Systems Engineer, I manage the infrastructure of over 40 music studios/music labs, designing scalable, automated systems that ensure reliability and efficiency. My work includes containerized deployments with Docker, orchestration through an Ansible cluster, and the development of SQL-based APIs for system scanning, monitoring, and maintenance.
    I focus on automation, stability, and infrastructure resilience in environments where downtime directly impacts creative production.
    Alongside my infrastructure role, I work in game audio and sound design, backed by an engineering degree and a Master’s in Video Game Programming (Unity3D). This dual expertise allows me to bridge creative workflows with robust technical implementation, from studio infrastructure to interactive audio systems in games.
    I am particularly interested in hybrid roles where infrastructure, automation, and creative technology intersect.`,
};
const worktimeline = [{
    jobtitle: "Designer of week",
    where: "YAdfi",
    date: "2020",
},
{
    jobtitle: "Designer of week",
    where: "Jamalya",
    date: "2019",
},
{
    jobtitle: "Designer of week",
    where: "ALquds",
    date: "2019",
},
];

const skills = [{
    name: "Python",
    value: 90,
},
{
    name: "Djano",
    value: 85,
},
{
    name: "Javascript",
    value: 80,
},
{
    name: "React",
    value: 60,
},
{
    name: "Jquery",
    value: 85,
},
];

const services = [{
    title: "UI & UX Design",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at nisl euismod urna bibendum sollicitudin.",
},
{
    title: "Mobile Apps",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at nisl euismod urna bibendum sollicitudin.",
},
{
    title: "Wordpress Design",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at nisl euismod urna bibendum sollicitudin.",
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
    github: "https://github.com",
    facebook: "https://facebook.com",
    linkedin: "https://linkedin.com",
    twitter: "https://twitter.com",
};
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
};