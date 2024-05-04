import { useRef } from "react";
import "./skill.scss";
import { motion, useInView } from "framer-motion";
import { FaCheck, FaCheckDouble, FaNode, FaNodeJs } from "react-icons/fa";
import { FaHouseMedicalCircleCheck } from "react-icons/fa6";

const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const Skill = () => {
  const ref = useRef();

  const isInView = useInView(ref, { margin: "-100px" });

  return (
    <motion.div
      className="services"
      variants={variants}
      initial="initial"
      // animate="animate"
      // whileInView="animate"
      ref={ref}
      animate={"animate"}
    >
      <motion.div className="textContainer" variants={variants}>
        <p>
          I code <motion.b whileHover={{color:"orange"}}>DREAMS </motion.b>
          into <motion.b whileHover={{color:"orange"}}>REALITY.</motion.b>
        </p>
        <hr />
      </motion.div>
      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
          <img src="/web.png" alt="" />
          <h1>
            WHAT
            <motion.b whileHover={{color:"orange"}}> CAN </motion.b> I DO?
          </h1>
        </div>
        <div className="title">
          <h1>
            MY
            <motion.b whileHover={{color:"orange"}}> PROFICIENCY</motion.b> LIES ON
          </h1>
        </div>
      </motion.div>
      <motion.div className="listContainer" variants={variants}>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2><img src="/backend.png" width={"200px"} alt="" /></h2>
          <h2>Backend Development</h2>
          <p>
            <small><FaCheck/> Javascript - Node JS</small> <br/>
            <small><FaCheck/> Express JS Framework </small><br/>
            <small><FaCheck/> Mongo DB Integration with Mongoose ODM </small><br/>
            <small><FaCheck/> Postgres Integration with Prisma ORM </small><br/>
            <small><FaCheck/> Other Backend Tools: JWT, Nodemailer, multer, bcryptjs, zod, slugify, qrcode</small>
          </p>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2><img src="/frontend.png" width={"200px"} alt="" /></h2>
          <h2>Frontend Development</h2>
          <p>
            <small><FaCheck/> HTML, CSS </small><br/>
            <small><FaCheck/> Bootstrap, Tailwind, MaterialUI </small><br/>
            <small><FaCheck/> ReactJS Library </small><br/>
            <small><FaCheck/> API integration with axios </small><br/>
            <small><FaCheck/> UI Enhancement with style-components, react-icons, react-slick, sweetalert, react-toastify </small><br/>
          </p>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <div></div>
          <h2>Other</h2>
          <p>
            <small><FaCheck/> Basics of C, C++, C#, Java, Python </small><br/>
            <small><FaCheck/> Canva Design </small><br/>
            <small><FaCheck/> MS Office tools </small><br/>
            <small><FaCheck/> SPSS, ArcGIS </small><br/>
          </p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Skill;
