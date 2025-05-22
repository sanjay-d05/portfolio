import React from 'react'
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism";
import {Link} from 'react-router-dom' ;
import Role from '../components/Role'
import {FaGithub} from 'react-icons/fa'
import { IoLogoLinkedin } from "react-icons/io5";
import { SiLeetcode } from "react-icons/si";
import { IoMdDownload } from "react-icons/io";
import Tilt from 'react-parallax-tilt';
import homeImg2 from '../assets/home-secondary.svg' ;
import { Button } from 'react-bootstrap';
import pdf from '../assets/SANJAY_D_RESUME.pdf' ;

function Home() {

  const links = [
    {
      icon : <FaGithub size={25}/> ,
      href : 'https://github.com/sanjay-d05',
      title : 'Github'
    } ,
    {
      icon : <IoLogoLinkedin size={25}/> ,
      href : 'https://www.linkedin.com/in/sanjayd05',
      title : 'LinkedIn'
    } ,
    {
      icon : <SiLeetcode size={25}/> ,
      href : 'https://leetcode.com/u/sanjay_05_08_17',
      title : 'Leetcode'
    } ,
  ] ;

  const codeString = `
const coder = {
  name: 'SANJAY D',
  skills: ['React', 'NodeJS', 'Python', 'Express',
           'Java', 'MySql', 'MongoDB'],
  hardWorker: true,
  quickLearner: true,
  problemSolver: true,
  hireable: function() {
    return (
      this.hardWorker &&
      this.problemSolver &&
      this.skills.length >= 5
    );
  }
};`;
    


  return (
    <>
    <div className="container" style={{paddingTop:'5rem'}}>

      <div className="row justify-content-center">
        <div className="col-12 col-lg-6 pt-2 pt-md-5">
            <h5 className='mt-5 display-5 display-md-2 fw-bold'>
              Hello , {" "}
            </h5>
            <h5 className='display-5 display-md-2 fw-bold'>
              I'M {" "}
              <span style={{color:'#ab3483'}}>
                SANJAY D
              </span>
            </h5>
            <div className='d-flex flex-row justify-center align-items-center gap-3'>
              {links.map((link , index) => (
                <Link className='nav-links' to={link.href} target='_blank' key={index} style={{color  : '#ab3483'}} title={link.title}>
                  {link.icon}
                </Link>
              ))}
            </div>
            <div className='mt-4'>
             <Button href={pdf} className='btn-resume' target='_blank' style={{border:'none'}}>
              Download Resume <span></span>
              <IoMdDownload />
             </Button>
            </div>
            <div className='fw-bold fs-2 ps-0 mt-4' style={{color:'#ab3483'}}>
              <Role />
            </div>
            
        </div>
        <div className="col-12 col-lg-6 pt-5">
          <div style={{
            backgroundColor: "#1e1e2e",
            padding: "15px",
            borderRadius: "10px",
            width: "100%",
            maxWidth: "600px", // Prevents it from becoming too wide
            position: "relative",
            boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
            overflowX: "auto", // Enables horizontal scrolling for small screens
          }}>
            {/* Window Buttons (Three Dots) */}
            <div style={{
              display: "flex",
              gap: "5px",
              padding: "1px",
              position: "absolute",
              top: "5px",
              left: "10px"
            }}>
              <span style={{
                width: "12px",
                height: "12px",
                backgroundColor: "#ff5f56",
                borderRadius: "50%"
              }}></span>
              <span style={{
                width: "12px",
                height: "12px",
                backgroundColor: "#ffbd2e",
                borderRadius: "50%"
              }}></span>
              <span style={{
                width: "12px",
                height: "12px",
                backgroundColor: "#27c93f",
                borderRadius: "50%"
              }}></span>
            </div>

            {/* Code Block */}
            <SyntaxHighlighter
              language="javascript"
              style={dracula}
              customStyle={{ paddingTop: "30px", fontSize: "14px" }} // Smaller font for better mobile view
            >
              {codeString}
            </SyntaxHighlighter>
          </div>
        </div>
      </div>

      <div className="row justify-content-center" style={{marginTop:'8rem'}}>
        <div className="col-12 col-lg-8">

                    <h3 className='mb-3 display-5 display-md-4 fw-bold'> 
                        LET ME {" "}
                        <span style={{color:'#ab3483'}}>
                            INTRODUCE {" "}
                        </span>
                        MYSELF
                    </h3>
                    <p className="mb-2 fs-5 fs-md-3">
                        I have developed a passion for programming, and I believe I have learned at least something so far... 🤷‍♂️
                    </p>
                    <p className='mb-2 fs-5 fs-md-3'>
                        I have a solid foundation in {" "}
                        <span style={{color:'#ab3483'}}>
                        major programming languages {" "}
                        </span>
                        like {" "}
                        <span style={{color:'#ab3483'}}>
                        Python and JavaScript. {" "}
                        </span>
                    </p>
                    <p className='mb-2 fs-5 fs-md-3'>
                        My field of Interest's are building new  {" "}
                        <span style={{color:'#ab3483'}}>
                        Web Technologies {" "}
                        </span>
                        and {" "}
                        <span style={{color:'#ab3483'}}>
                        Products
                        </span>
                    </p>
                    <p className='fs-5 fs-md-3'>
                    Whenever possible, I also apply my passion for developing products with {" "}
                    <span style={{color:'#ab3483'}}>
                    Node.js {" "}
                    </span>
                    and {" "}
                    <span style={{color:'#ab3483'}}>
                    Modern Javascript Library {" "}
                    </span>
                    and {" "}
                    <span style={{color:'#ab3483'}}>
                    Frameworks {" "}
                    </span> 
                    like {" "}
                    <span style={{color:'#ab3483'}}>
                    React.js {" "}
                    </span> 
                    and {" "}
                    <span style={{color:'#ab3483'}}>
                    Vue.js
                    </span>
                    </p>

        </div>
        <div className="col-12 col-lg-4 d-flex justify-content-center align-items-center">
            <Tilt>
              <img src={homeImg2} alt="person-icon" className='pt-3'/> 
            </Tilt>
        </div>
      </div>

    </div>
    </>
  )
}

export default Home