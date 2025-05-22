import {
   DiHtml5 ,
   DiCss3 ,
   DiReact ,
   DiBootstrap ,
   DiNodejs ,
   DiMongodb ,
   DiMysql,
   DiPhp ,
   DiPython ,
   DiGit ,
   DiJava
} from "react-icons/di";
import { CgCPlusPlus } from "react-icons/cg";
import { IoLogoFirebase } from "react-icons/io5";
import {IoLogoJavascript} from 'react-icons/io' ;
import { SiTailwindcss } from "react-icons/si";


function TechStack() {
  return (
    <div className="row justify-content-center gap-4">
        <div className="col-4 col-md-2 tech-icons">
          <DiHtml5 style={{marginBottom:'15px'}}  title='HtmL5'/>
        </div>
        <div className="col-4 col-md-2 tech-icons">
          <DiCss3 style={{marginBottom:'15px'}} title='CSS3'/>
        </div>
        <div className="col-4 col-md-2 tech-icons">
          <IoLogoJavascript style={{marginBottom:'15px'}} title='javascript'/>
        </div>
        <div className="col-4 col-md-2 tech-icons">
          <DiReact style={{marginBottom:'15px'}} title='ReactJs'/>
        </div>
        <div className="col-4 col-md-2 tech-icons">
          <DiBootstrap style={{marginBottom:'15px'}} title='Bootstrap'/>
        </div>
        <div className="col-4 col-md-2 tech-icons">
          <SiTailwindcss style={{marginBottom:'15px'}} title='Tailwind CSS'/>
        </div>
        <div className="col-4 col-md-2 tech-icons">
          <DiNodejs style={{marginBottom:'15px'}} title='NodeJs'/>
        </div>
        <div className="col-4 col-md-2 tech-icons">
          <CgCPlusPlus style={{marginBottom:'15px'}} title='C++'/>
        </div>
        <div className="col-4 col-md-2 tech-icons">
          <DiMongodb style={{marginBottom:'15px'}} title='MongoDB'/>
        </div>
        <div className="col-4 col-md-2 tech-icons">
          <DiMysql style={{marginBottom:'15px'}} title='MySQL'/>
        </div>
        <div className="col-4 col-md-2 tech-icons">
          <DiPhp style={{marginBottom:'15px'}} title='PHP'/>
        </div>
        <div className="col-4 col-md-2 tech-icons">
          <DiPython style={{marginBottom:'15px'}} title='Python'/>
        </div>
        <div className="col-4 col-md-2 tech-icons">
          <DiGit style={{marginBottom:'15px'}} title='Git'/>
        </div>
        <div className="col-4 col-md-2 tech-icons">
          <DiJava style={{marginBottom:'15px'}} title='Java'/>
        </div>
        <div className="col-4 col-md-2 tech-icons">
          <IoLogoFirebase style={{marginBottom:'15px'}} title='FireBase'/>
        </div>
    </div>
  )
}

export default TechStack