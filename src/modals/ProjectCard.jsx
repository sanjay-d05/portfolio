import {
     FaGithub ,
     FaExternalLinkSquareAlt 
} from "react-icons/fa";

function ProjectCard({imgSrc , isBlog , title , description , githubLink , demoLink}) {
  return (
    <div className="card project-card-container py-2" >
      <img src={imgSrc} className="card-img-top px-3" alt="..."/>
      <div className="card-body text-center">
        <h5 className="card-title">
            {title}
        </h5>
        <p className="card-text">
            {description}
        </p>
        <div className='d-flex justify-content-center gap-3'>
          <a className='btn btn-projects ' href={githubLink} target='_blank'>
            <FaGithub style={{marginBottom:'3px'}} /> &nbsp;
            {isBlog ? 'Blog' : 'GitHub'}
          </a>
          {!isBlog && demoLink && (
            <a className='btn btn-projects' href={demoLink} target='_blank'>
                <FaExternalLinkSquareAlt style={{marginBottom:'3px'}}/> &nbsp;
                {"Demo"}
            </a>
          )}
        </div>
      </div>
    </div>
  )
}

export default ProjectCard