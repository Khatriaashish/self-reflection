import React from 'react'
import "./navbar.scss"
import { motion } from "framer-motion";
import { FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa'
import Sidebar from '../sidebar/Sidebar';

const Navbar = () => {
  return (
    <div className='navbar'>
      <Sidebar/>
        <div className="wrapper">
            <motion.span 
            initial={{opacity: 0, scale: 0.5}}
            animate={{opacity: 1, scale: 1}} transition={{duration: 0.5}}>Ashish Khatri</motion.span>
            <div className="social">
                <a target='_blank' href="https://github.com/Khatriaashish"><FaGithub/></a>
                <a target='_blank' href="https://www.linkedin.com/in/ashish-khatri-00504b18b/"><FaLinkedin/></a>
                <a target='_blank' href="https://www.facebook.com/aashiish.ia/"><FaFacebook/></a>
            </div>
        </div>
    </div>
  )
}

export default Navbar
