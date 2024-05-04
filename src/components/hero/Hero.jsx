import "./hero.scss";
import { motion } from "framer-motion";

const textVariants = {
    initial: {
        x: -500,
        opacity: 0,
    },
    animate: {
        x: 0,
        opacity: 1,
        transition: {
            duration: 1,
            staggerChildren: 0.1,
        },
    },
    scrollButton: {
        opacity: 0,
        y: 10,
        transition: {
            duration: 2,
            repeat: Infinity,
        },
    },
};

const sliderVariants = {
    initial: {
        x: 0,
    },
    animate: {
        x: "-800%",
        transition: {
            repeat: Infinity,
            repeatType: "mirror",
            duration: 20,
        },
    },
};

const Hero = () => {
    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
          section.scrollIntoView({ behavior: "smooth" });
        }
      };
    return (
        <div className="hero">
            <div className="wrapper">
                <motion.div
                    className="textContainer"
                    variants={textVariants}
                    initial={'initial'}
                    animate='animate'
                >
                    <motion.h2 variants={textVariants}>ASHISH KHATRI</motion.h2>

                    <motion.h1 variants={textVariants}>
                        MERN Developer
                    </motion.h1>

                    <motion.div variants={textVariants} className="intro">
                        <motion.p variants={textVariants} onClick={() => scrollToSection("Portfolio")}>
                            I am a passionate MERN Developer with an insatiable curiosity for learning and a relentless drive for innovation, 
                            dedicated to crafting seamless digital experiences through elegant code and creative problem-solving, 
                            committed to pushing boundaries, embracing challenges, and leaving a positive impact on the world, one line of code at a time.
                        </motion.p>
                    </motion.div>

                    <motion.img
                        variants={textVariants}
                        animate="scrollButton"
                        src="/scroll.png"
                        alt=""
                    />
                </motion.div>
            </div>

            <motion.div
                className="slidingTextContainer"
                variants={sliderVariants}
                initial="initial"
                animate="animate"
            >
                NODE EXPRESS REACT MONGODB POSTGRES
            </motion.div>

            <div className="imageContainer">
                <img src="/ashish.png" alt="" />
            </div>
        </div >
    )
}

export default Hero;