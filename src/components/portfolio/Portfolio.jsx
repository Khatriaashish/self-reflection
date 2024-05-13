import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "Gossip - Chat app",
    img: "/gossip.png",
    desc: "Gossip is chat app - socket.io was implemented for websocket.",
    source: "https://github.com/Khatriaashish/chat-app/tree/main",
    live: "https://gossip-chatapp.onrender.com/",
  },
  {
    id: 2,
    title: "Lookscout",
    img: "/lookscout.png",
    desc: "Lookscout is website created based on the given Figma Design. Additionally, backend functionality was added. Auth flow was maintained. CMS was designed.",
    source: "https://github.com/Khatriaashish/talenverse-task",
  },
  {
    id: 3,
    title: "Kishan Saathi",
    img: "/kishansaathi.png",
    desc: "Kishan Saathi is advanced digital tool for farmer which is comprised of three sub system; Crop Recommendation, Cure Recommendation, and E-commerce. Based on Random Forest Classifier.",
    source: "https://github.com/CSIT-final-year-project/Godmel",
  },
  {
    id: 4,
    title: "Yelp Clone",
    img: "/yelp.png",
    desc: "Simple application mimicking Yelp app functionality. PostgresSQL implementation with pg package. Users can add, edit, remove and review resataurant.",
    source: "https://github.com/Khatriaashish/yelp-clone",
  },
  {
    id: 5,
    title: "Taskboard App",
    img: "/taskboard.png",
    desc: "Taskboard App develop with MERN. User can assign task with priority level to specific person. Search bar is available to filter task based on assigned, priority level and task. Task can be mark completed or remove from taskboard.",
    source: "https://github.com/Khatriaashish/Taskboard",
  },
  {
    id: 6,
    title: "Movie-Ticketing app",
    img: "/movie.png",
    desc: "Node JS project - contains apis of complete movie-ticketing applications.",
    source: "https://github.com/Khatriaashish/movie-ticketing",
  },
  {
    id: 7,
    title: "Restro-Management App",
    img: "/restro.png",
    desc: "Node JS project - contains apis of complete restaurant applications.",
    source: "https://github.com/Khatriaashish/restro",
  },
  {
    id: 8,
    title: "Gharelu Flavors - Food Ordering App",
    img: "/gharelu.png",
    desc: "This is a college project of Ecommerce Subject at Sixth Semester made with html, css, js and php. Include CMS to CRUD food and orders.",
    source: "https://github.com/Khatriaashish/ghareluflavors",
  },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section>
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{ y }}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <a href={item.source} target="_blank">
              <button>Source Code</button>
            </a>
            <a href={item.live} target="_blank">
              <button>Live</button>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
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
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
