import { FaHandPointRight } from "react-icons/fa";
import img from '../assets/about-img.svg' ;
import TechStack from '../components/TechStack' ;
import ToolStack from '../components/ToolStack' ;


function About() {
  return (
    <div className='container pt-5'>
      <div className="row justify-content-center">

        <div className="col-12 col-lg-8">

          <h5 className='text-center mb-3 fs-1 '>
                About {" "}
                <span style={{color:'#ab3483'}}>
                  Me
                </span>
              </h5>
              <p className='fs-5'>
                Hi Everyone, I am  {" "}
                <span  style={{color:'#ab3483'}}>
                SANJAY D {" "}
                </span>
                from {" "}
                <span  style={{color:'#ab3483'}}>
                TamilNadu, India. {" "}
                </span>
                I am currently pursuing my Bachelor's Degree in Hindustan University.
              </p>
              <p className='fs-5'>
                Besides coding, I enjoy other activities too!
              </p>
              <ul style={{listStyleType:'none'}} className='fs-5'>
                <li><FaHandPointRight color='#ab3483' className='mb-1'/>{" "} Games</li>
                <li><FaHandPointRight color='#ab3483' className='mb-1'/>{" "} Travelling</li>
                <li><FaHandPointRight color='#ab3483' className='mb-1'/>{" "} Reading Books</li>
                <li><FaHandPointRight color='#ab3483' className='mb-1'/>{" "} Listening Music</li>
              </ul>
              <div>
                <p className='fs-5 mb-0 text-center px-4'>
                "Success is not Final , Failure is not fatal , its the Effort you make that counts !"
                </p>
                <p className='text-center ps-5 fs-4' style={{color:'#ab3483'}}>
                  -SANJAY D
                </p>
              </div>

        </div>

        <div className="col-12 col-lg-4 d-flex justify-content-center align-items-center">
          <img src={img} alt="" />
        </div>

      </div>

      <h5 className='fs-1 mt-5 mb-3 text-center'>
        Professional {" "}
        <span style={{color:'#ab3483'}}>
          Skillset
        </span>
      </h5>
      <TechStack />

      <h5 className="fs-1 mt-5 mb-3 text-center">
        <span style={{color:'#ab3483'}}>
          Tools {" "}
        </span>
        I Use
      </h5>
      <ToolStack />
      

    </div>
  )
}

export default About