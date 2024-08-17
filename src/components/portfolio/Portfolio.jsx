import "./portfolio.css";

import IMG1 from "../../assets/Bachay App.png";
import IMG2 from "../../assets/Arabiata App.png";
import IMG4 from "../../assets/QuickBite.png";
import IMG3 from "../../assets/Efoot.png";
import React from "react";

//Portfolio function
const Portfolio = () => {
  const soloProjects = [
    {
      id: 1,
      title: "Bachay.com",
      img: IMG1,
      description:
        "Bachay.com is a comprehensive parenting app blending e-commerce with child development tools. Built with React Native and Redux Toolkit, it offers seamless shopping, growth tracking, and interactive learning features. Experience a unified platform for both nurturing and shopping needs.",
      technologies: "React Native | Javascript | Redux Toolkit",
      link: "https://educational-website-reactjs.netlify.app/",
      github: "https://apps.apple.com/in/app/bachay/id6472892226",
    },
    {
      id: 2,
      title: "Arabiata KW",
      img: IMG2,
      description:
        "Arabiata Kuwait's app offers a seamless experience for ordering authentic Egyptian cuisine, leveraging React Native and TypeScript for efficiency. It features Redux Toolkit for state management, react-i18next for localization, and supports both dark and light mode for user convenience. Enjoy traditional dishes effortlessly from home.",
      technologies: "React Native | TypeScript | Redux Toolkit | react-i18next",
      link: "https://fh-huquq-com.vercel.app/",
      github: "https://apps.apple.com/kw/app/arabiata-kw/id1620340468",
    },
    {
      id: 3,
      title: "QuickBite",
      img: IMG4,
      description:
        "QuickBite is a cutting-edge food delivery app, featuring real-time order tracking and a task-based rewards system which makes the experience engaging and enjoyable for users, showcasing my expertise in creating innovative and user-centric applications.",
      technologies: "React Native | JavaScript",
      link: "https://fs-code-task-two.vercel.app/",
      github: "https://github.com/AneelaShakeel1/React-Native-Mobile-Apps/blob/main/QuickBite%20App.apk",
    },
    {
      id: 3,
      title: "Efoot",
      img: IMG3,
      description:
        "A booking website for doctor's appointments at the hospital. The website is mainly functionally developed with JavaScript",
      technologies: "React Native | JavaScript",
      link: "https://fs-code-task-two.vercel.app/",
      github: "https://github.com/Rasif-Taghizada/FS-Code-Task",
    },
  ];

  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {soloProjects.map((pro) => (
          <article className="portfolio__item" key={pro.id}>
            <div className="portfolio__item-image">
              <img src={pro.img} alt={pro.title} />
            </div>
            <div className="portfolio__item-content">
              <h3>{pro.title}</h3>
              <p>{pro.description}</p>
              <p>{pro.technologies}</p>
            </div>
            <div className="portfolio__item-cta">
              <a
                href={pro.github}
                target="_blank"
                className="btn"
                rel="noreferrer"
              >
                App Link
              </a>
              <a
                href={pro.link}
                target="_blank"
                className="btn btn-primary"
                rel="noreferrer"
              >
                Live Demo
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
