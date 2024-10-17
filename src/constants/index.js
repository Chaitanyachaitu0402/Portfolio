import {
  mongo,
  node,
  react,
  express,
  backend,
  frontend,
  uiux,
  mern,

  expresslogo,
  gitlogo,
  htmllogo,
  mongologo,
  nodelogo,
  reactlogo,
  tailwindlogo,
  javascriptlogo,
  figmalogo,
  csslogo,
  clogo,
  javalogo,
  pythonlogo,
  muilogo,
  numpylogo,
  pandaslogo,
  postmanlogo,
  reactrouterlogo,
  streamlitlogo,

  instagram,
  github,
  twitter,
  linkedin,

  invoice,
  progresspulse,
  rolex,
  school,

} from "../assets";

export const navigation = [
  {
    id: "0",
    title: "Home",
    url: "#home",
  },
  {
    id: "1",
    title: "About",
    url: "#about",
  },
  {
    id: "2",
    title: "Projects",
    url: "#projects",
  },
  {
    id: "3",
    title: "Contact",
    url: "#contact",
  }
];


export const heroIcons = [mongo, express, react, node,];


export const collabText =
  "As a frontend developer, I’m passionate about crafting intuitive and engaging user interfaces that enhance the overall experience.";
export const collabText2 =
  "As a backend developer, I’m dedicated to building robust and scalable infrastructures that power seamless and efficient user interactions.";

export const collabContent = [
  {
    id: "0",
    title: "Frontend Developer",
    text: collabText,
  },
  {
    id: "1",
    title: "Backend Developer",
    text: collabText2
  },

];

export const collabAppsBasic = [
  // {
  //   id: "0",
  //   title: "C",
  //   icon: clogo,
  //   width: 25,
  //   height: 36,
  // },
  // {
  //   id: "1",
  //   title: "Java",
  //   icon: javalogo,
  //   width: 24,
  //   height: 36,
  // },
  {
    id: "4",
    title: "Javascript",
    icon: javascriptlogo,
    width: 34,
    height: 34,
  },
  {
    id: "2",
    title: "Python",
    icon: pythonlogo,
    width: 26,
    height: 28,
  },
  // {
  //   id: "3",
  //   title: "Stream-lit",
  //   icon: streamlitlogo,
  //   width: 30,
  //   height: 35,
  // },
  // {
  //   id: "4",
  //   title: "Pandas",
  //   icon: pandaslogo,
  //   width: 18,
  //   height: 34,
  // },
  // {
  //   id: "5",
  //   title: "Numpy",
  //   icon: numpylogo,
  //   width: 30,
  //   height: 34,
  // },
  {
    id: "1",
    title: "ReactJS",
    icon: reactlogo,
    width: 34,
    height: 36,
  },
  {
    id: "2",
    title: "ExpressJS",
    icon: expresslogo,
    width: 36,
    height: 28,
  },
  {
    id: "6",
    title: "Tailwind",
    icon: tailwindlogo,
    width: 34,
    height: 34,
  },
  {
    id: "6",
    title: "Mui",
    icon: muilogo,
    width: 28,
    height: 34,
  },
  {
    id: "7",
    title: "Postman",
    icon: postmanlogo,
    width: 30,
    height: 32,
  },
  {
    id: "8",
    title: "Figma",
    icon: figmalogo,
    width: 17,
    height: 34,
  },
  {
    id: "8",
    title: "CSS",
    icon: csslogo,
    width: 30,
    height: 34,
  },
];
export const collabApps = [
  {
    id: "0",
    title: "React-Router",
    icon: reactrouterlogo,
    width: 30,
    height: 36,
  },


  {
    id: "3",
    title: "HTML",
    icon: htmllogo,
    width: 34,
    height: 35,
  },

  {
    id: "5",
    title: "MongoDB",
    icon: mongologo,
    width: 34,
    height: 34,
  },

  {
    id: "7",
    title: "NodeJS",
    icon: nodelogo,
    width: 30,
    height: 32,
  },

  {
    id: "9",
    title: "Git",
    icon: gitlogo,
    width: 30,
    height: 32,
  },
];

export const benefits = [
  {
    id: "0",
    title: "AttendEase",
    text: "AttendEase is a Flutter and Dart app facilitating easy management of student attendance and grades. Teachers input attendance and grades, while students access their records upon login. The app uses an SQLite database for secure data management, highlighting Flutter and Dart's prowess in creating efficient cross-platform solutions. ",
    iconUrl: github,
    img: school,
    url: "https://github.com/Ragulram004/School_Website.git",
    url2: "https://ragulram004.github.io/School_Website/index.html",
  },
  {
    id: "1",
    title: "Marvel Comics Application",
    text: "The Marvel Comics Application, built with HTML, CSS, ReactJS, Ionic Framework, and Capacitor, provides a seamless experience for users to access and enjoy Marvel comics. With secure registration and login, users can explore a vast library of comics, bookmark favorites. ",
    iconUrl: github,
    light: true,
    img: rolex,
    url: "https://github.com/Chaitanyachaitu0402/Marvel",
    url2: "https://github.com/Chaitanyachaitu0402/Marvel",
  },
  {
    id: "2",
    title: "TourNest",
    text: "TourNest, built with HTML, CSS, ReactJS, Ionic Framework, and Capacitor, is a user-friendly app for discovering top global destinations. Featuring a weather API integration for real-time updates, users can easily explore attractions and plan their travels efficiently.",
    iconUrl: github,
    url: "https://github.com/Ragulram004/Intelligate_Dayscholar_Recognition_System.git",
    url2: "https://github.com/Ragulram004/Intelligate_Dayscholar_Recognition_System.git",

  },
  {
    id: "3",
    title: "E-Commerce Website",
    text: "Users can browse a wide range of products, add items to their cart, and complete purchases with ease. Leveraging Firebase for backend services ensures real-time updates and reliable data management, while the payment gateway ensures secure transactions. ",
    iconUrl: github,
    light: true,
    img: invoice,
    url: "https://github.com/Ragulram004/invoice_portal.git",
    url2: "https://invoice-portal-frontend.vercel.app",

  },
];

export const socials = [
  {
    id: "0",
    title: "Github",
    iconUrl: github,
    url: "https://github.com/Chaitanyachaitu0402",
  },
  {
    id: "1",
    title: "LinkedIn",
    iconUrl: linkedin,
    url: "https://www.linkedin.com/in/chaitanya-dwarapudi-486921219/",
  },
  {
    id: "2",
    title: "Instagram",
    iconUrl: instagram,
    url: "https://www.instagram.com/chaitanya_dwarapudi/",
  },
  {
    id: "3",
    title: "Twitter",
    iconUrl: twitter,
    url: "https://x.com/Chaitanya_0402",
  }

];

export const services = [
  {
    title: "MERN Stack Developer",
    icon: mern,
  },
  {
    title: "Frontend Developer",
    icon: frontend,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "UI/UX Designer",
    icon: uiux,
  },
];
