import ProjectCard from '../modals/ProjectCard' ;
import encrypt_decrypt from '../assets/projects/encrypt-decrypt.jpeg' ;
import live_weather from '../assets/projects/live-weather.jpeg' ;
import trendy_tales from '../assets/projects/trendy-tales.jpeg' ;
import wedding_photography from '../assets/projects/wedding-photography.jpeg' ;
import todo from '../assets/projects/todo.jpeg' ;
import gpt3 from '../assets/projects/gpt3.jpeg' ;
import mind_sprint from '../assets/projects/mind-sprint.jpeg' ;

function Projects() {
  return (
    <div className='container pt-5'>
          <h5 className='text-center fs-1'>
            MY Latest {" "}
            <span style={{color:'#ab3483'}}>
              <strong>
                 Works
              </strong>
            </span>
          </h5>
          <p className='fs-5 text-center'>
            Below are few projects I've worked on recently
          </p>
      <div className="row justify-content-center text-center gap-4">

          <div className="col-12 col-md-3 mt-5" style={{height:'auto'}}> 
                <ProjectCard 
                imgSrc = {encrypt_decrypt}
                isBlog ={false}
                title = 'Encryption and Decryption'
                description = 'Encryption and Decryption is shown in real time'
                githubLink = 'https://github.com/sanjay-d05/encryption-decryption'
                demoLink = 'https://sanjay-d05.github.io/encryption-decryption/'
                />
          </div>

          <div className="col-12 col-md-3 mt-5" style={{height:'auto'}}> 
                <ProjectCard 
                imgSrc = {live_weather}
                isBlog ={false}
                title = 'Live Weather App'
                description = 'It Generates real time weathers and weather changes using weather APIs.'
                githubLink = 'https://github.com/sanjay-d05/live-weather-app'
                demoLink = 'https://live-weather-app-eta.vercel.app/'
                />
          </div>

          <div className="col-12 col-md-3 mt-5" style={{height:'auto'}}> 
                <ProjectCard 
                imgSrc = {trendy_tales}
                isBlog ={false}
                title = 'Trendy Tales'
                description = 'It showcases the front-end and UI/UX of an e-commerce application'
                githubLink = 'https://github.com/sanjay-d05/trendy-tales'
                demoLink = 'https://trendy-tales.vercel.app/'
                />
          </div>

          <div className="col-12 col-md-3 mt-5" style={{height:'auto'}}> 
                <ProjectCard 
                  imgSrc = {todo}
                  isBlog ={false}
                  title = 'Todo Task Manager'
                  description = 'Helps you keep track of your daily tasks '
                  githubLink = 'https://github.com/sanjay-d05/todo-list'
                  demoLink = 'https://todo-list-drab-mu-82.vercel.app/'
                />
          </div>

          <div className="col-12 col-md-3 mt-5" style={{height:'auto'}}> 
                <ProjectCard 
                imgSrc = {gpt3}
                isBlog ={false}
                title = 'GPT3'
                description = 'Its an static app which showcases Css skills'
                githubLink = 'https://github.com/sanjay-d05/static-gpt-3'
                demoLink = 'https://static-gpt-3.vercel.app/'
                />
          </div>

          <div className="col-12 col-md-3 mt-5" style={{height:'auto'}}> 
                <ProjectCard 
                imgSrc = {mind_sprint}
                isBlog ={false}
                title = 'Mind Sprint'
                description = 'A Quiz app to test your basic programming knowledge and skills'
                githubLink = 'https://github.com/sanjay-d05/mind-sprint'
                demoLink = 'https://mind-sprint.vercel.app/'
                />
          </div>

      </div>
    </div>
  )
}

export default Projects