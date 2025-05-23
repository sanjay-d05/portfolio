import React from 'react'
import { FaGithub } from 'react-icons/fa';
import { IoLogoLinkedin } from 'react-icons/io5';
import { SiLeetcode } from 'react-icons/si';
import { Link } from 'react-router-dom';

function Footer() {

     const links = [
        {
          icon : <FaGithub size={20}/> ,
          href : 'https://github.com/sanjay-d05',
          title : 'Github'
        } ,
        {
          icon : <IoLogoLinkedin size={20}/> ,
          href : 'https://www.linkedin.com/in/sanjayd05',
          title : 'LinkedIn'
        } ,
        {
          icon : <SiLeetcode size={20}/> ,
          href : 'https://leetcode.com/u/sanjay_05_08_17',
          title : 'Leetcode'
        } ,
      ] ;

  return (
/*     <div className='py-3 mt-5' style={{backgroundColor : '#1e1e2e'}}>
        <div className='d-flex flex-column flex-md-row justify-content-between align-items-center '>
            <p className='mb-0'>
                Designed And Developed By SANJAY D
            </p>
            <div className='d-flex justify-content-center align-items-center gap-3'>
            {links.map((link , index) => (
                <Link className='nav-links' to={link.href} target='_blank' key={index} style={{color  : '#ab3483'}} title={link.title}>
                  {link.icon}
                </Link>
              ))}
            </div>
        </div>
    </div> */

       <div className="container-fluid py-3" style={{backgroundColor:'#2a2a36'}}>
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-12 col-md-4 text-center">
                    <p className='mb-0 text-light'>
                        Developed By SANJAY D
                    </p>
                </div>
                <div className="col-12 col-md-4 text-center">
                    <p className='mb-0 text-light'>2024 @ All Rights Reserved</p>
                </div>
                <div className="col-12 col-md-4 d-flex gap-3 justify-content-center">
                    <a className='footer-social-icons' href="https://github.com/sanjay-d05" target='_blank'>
                        <FaGithub size={20} color='#ab3483'/>
                    </a>
                    <a className='footer-social-icons' href="https://www.linkedin.com/in/sanjayd05" target='_blank'>
                        <IoLogoLinkedin size={20} color='#ab3483'/>
                    </a>
                    <a className='footer-social-icons' href="https://leetcode.com/u/sanjay_05_08_17" target='_blank'>
                        <SiLeetcode size={20} color='#ab3483'/>
                    </a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer
