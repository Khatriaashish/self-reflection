import React from 'react'
import "./navbar.scss"
import { FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa'

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className="wrapper">
            <span>Ashish Khatri</span>
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
