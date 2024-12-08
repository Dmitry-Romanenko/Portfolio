import clerk from '../assets/icons/Clerk.svg';
import tailwind from '../assets/icons/Tailwind.svg';
import stream from '../assets/icons/Stream.svg';
import nextjs from '../assets/icons/nextjs.svg';
import react from '../assets/icons/React-icon.svg';
import typescript from '../assets/icons/typescript.svg';
import sass from '../assets/icons/Sass.svg';
import html from '../assets/icons/Html.svg';
import css from '../assets/icons/css.svg';
import nestJS from '../assets/icons/nestJS.svg';
import nativeWind from '../assets/icons/nativeWind.svg';
import mongo from '../assets/icons/mongo.svg';
import javaScript from '../assets/icons/JavaScrip.svg';
import meet from '../assets/textures/meet.jpg';
import olios from '../assets/textures/olios.jpg';
import remontStroy from '../assets/textures/remontStroy.png';
import calc from '../assets/textures/calc.png';
import relaxify from '../assets/textures/relaxify.jpg';

export const getGlobeArcs = (count: number) => {
  return [...Array(count).keys()].map(() => ({
    startLat: (Math.random() - 0.5) * 180,
    startLng: (Math.random() - 0.5) * 360,
    endLat: (Math.random() - 0.5) * 180,
    endLng: (Math.random() - 0.5) * 360,
    color: [
      ['red', 'white', 'blue', 'green'][Math.round(Math.random() * 3)],
      ['red', 'white', 'blue', 'green'][Math.round(Math.random() * 3)],
    ],
  }));
};

export const projects = [
  {
    title: 'Meet',
    text: `I developed the Meet project, a pet project that serves as a clone of Zoom. This application includes features such as creating video calls, joining meetings, scheduling events, and viewing recordings of past calls. It also supports user authentication and the ability to share links to invite participants to meetings. The project demonstrates my skills in building functionality for online communication, designing user interfaces, and ensuring seamless user interaction with the system.`,
    stack: [clerk, stream, tailwind, nextjs, typescript],
    github: 'https://github.com/Dmitry-Romanenko/Meeting-App',
    live: 'https://meeting-le2kum4u5-dmitryromanenkos-projects.vercel.app/',
    img: meet,
  },
  {
    title: 'Relaxify',
    text: `Relaxify is a mobile app I created using React Native, designed for meditation and relaxation. It offers users the ability to listen to calming music and nature sounds through a built-in audio player. The app also features articles on meditation and an audio guide to help users practice mindfulness. Users can log in, edit their profiles, and receive daily affirmations to maintain a positive mindset. The project combines modern design and functionality, providing a comfortable tool for restoring inner balance.`,
    stack: [react, nativeWind, nestJS, mongo, clerk, typescript],
    github: 'https://github.com/Dmitry-Romanenko/relaxify',
    img: relaxify,
  },
  {
    title: 'Olios',
    text: `This project is a modern, adaptive template for a furniture e-commerce website. The design includes a dynamic homepage, a product catalog, a shopping cart, a contact page, and a detailed product page.

It emphasizes visual appeal and user-friendly interactions, featuring a side navigation menu and product cards with interactive elements such as favorites, add-to-cart, and sharing options. Although it lacks functionality, the project serves as an ideal foundation for developing a fully functional web application due to its clean and flexible layout.`,
    stack: [html, sass, javaScript],
    github:
      'https://github.com/Dmitry-Romanenko/Dmitry-Romanenko.github.io/tree/main/FurnitureShop',
    live: 'https://dmitry-romanenko.github.io/FurnitureShop',
    img: olios,
  },
  {
    title: 'Remont Stroy',
    text: `I developed a website for a construction and renovation company based in Kharkiv. The site showcases the company's services, including both cosmetic and major repairs, as well as project design and consultation. I focused on creating an intuitive and user-friendly interface, ensuring that potential clients could easily access the company's offerings and get in touch for consultations. Additionally, I integrated a clean and professional design that reflects the quality and reliability of the company’s work, enhancing their online presence and customer engagement.`,
    stack: [html, sass, javaScript],
    live: 'https://remont-stroy.kharkiv.ua/',
    img: remontStroy,
  },

  {
    title: 'Retro Cyber Calculator',
    text: `This calculator, built using JavaScript, is inspired by a retro style. It features a unique interface designed to resemble vintage electronic calculators, enhanced with a cyberpunk aesthetic, including vibrant buttons, neon accents, and a grid-style background. In addition to standard arithmetic operations, the project showcases attention to detail in interface design and user experience.`,
    stack: [html, css, javaScript],
    live: 'https://dmitry-romanenko.github.io/Calculator',
    github: 'https://github.com/Dmitry-Romanenko/Dmitry-Romanenko.github.io/tree/main/Calculator',
    img: calc,
  },
];

export const aboutCards = [
  {
    hue1: 60,
    hue2: 180,
    text: 'I am a web developer specializing in the creation of e-commerce platforms, web applications, and mobile applications. I am passionate about building projects that not only function effectively but also deliver value to users. My attention to detail and commitment to continuous improvement empower me to tackle complex challenges with innovative solutions.',
    title: 'Who I Am',
    icon: '💡',
  },
  {
    hue1: 340,
    hue2: 240,
    globe: true,
    text: 'Based in Germany, I am enthusiastic about embracing remote work opportunities. I value flexibility and am committed to delivering high-quality results while collaborating with diverse teams across the globe. Whether in a remote setting or a hybrid environment, I am ready to contribute to innovative projects and make a positive impact.',
    title: 'Location',
    icon: '📍',
  },
  {
    text: 'In my work, I utilize a variety of technologies and skills, including React, TypeScript, Node.js, Redux Toolkit, Sass/SCSS, MUI, Tailwind, Next.js, Astro, GraphQL, Axios, Apollo, Clerk, Express.js, Mongoose, and Nest.js. These tools enable me to create responsive, high-performance, and stylish solutions for my clients and projects.',
    title: 'Professional Skills',
    icon: '🌐',
  },
  {
    hue1: 100,
    hue2: 220,
    text: "I earned my Bachelor's degree in Computer Science from Kharkiv National Polytechnic Institute, one of the leading technical universities in Ukraine. My education equipped me with the skills to solve complex problems and develop efficient software solutions. I actively participated in projects and collaborated with peers, which enhanced my teamwork and communication skills.",
    title: 'Education',
    icon: '📜',
  },
  {
    hue1: 300,
    hue2: 40,
    text: 'I am inspired by challenges that require unconventional approaches and creative thinking. The opportunity to create something new and witness how it improves the lives of others motivates me to continuously strive for improvement. I draw inspiration from music, travel, and the work of my colleagues.',
    title: 'What Inspires Me',
    icon: '🌄',
  },
];

export const experiences = [
  {
    title: "Frontend Developer in 'Ronis'",
    time: 'November 2021 - December 2021',
    text: "I created a children's shoe sales lending. Stack: HTML/SCSS/JavaScript.",
  },
  {
    title: 'Nix Education - Front-End/JavaScript',
    time: 'August 2022 - February 2023',
    text: 'During my university studies I went through a training program with Nix Solution, where I created an online store (HTML/CSS) and a weather forecasting application (React).',
  },
  {
    title: "Frontend Developer in 'Remont Stroy'",
    time: 'August 2022 - October 2022',
    text: 'Created a corporate website for a construction firm. Stack: HTML/SCSS/Gulp/JavaScript.',
  },
  {
    title: "Frontend Developer in 'Spokane Development'",
    time: 'October 2023 - February 2024',
    text: 'I was involved in finalizing a furniture website. I came up with and implemented UI solutions that helped the site look better. Stack: Next.js/TypeScript/CSS modules. Created a frontend for a sanitary ware store, implementing search, product filtering, shopping cart, and routing. Stack: Next.js 14/TypeScript/CSS modules/Apollo. Created a lending site.',
  },
];
