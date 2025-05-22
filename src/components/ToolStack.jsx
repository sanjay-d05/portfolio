import {
     SiVercel ,
     SiPostman ,
     SiCanva
} from "react-icons/si";
import { BiLogoVisualStudio } from "react-icons/bi";
import {IoLogoFigma } from 'react-icons/io5' ;

function ToolStack() {
  return (
    <div className="row justify-content-center gap-4">
        <div className="col-4 col-md-2 tech-icons">
            <BiLogoVisualStudio style={{marginBottom:'15px'}} title='Visual Studio Code' />
        </div>
        <div className="col-4 col-md-2 tech-icons">
            <SiPostman style={{marginBottom:'15px'}} title='Postman' />
        </div>
        <div className="col-4 col-md-2 tech-icons">
            <SiVercel style={{marginBottom:'15px'}} title='Vercel' />
        </div>
        <div className="col-4 col-md-2 tech-icons">
            <SiCanva style={{marginBottom:'15px'}} title='Canvas' />
        </div>
        <div className="col-4 col-md-2 tech-icons">
            <IoLogoFigma style={{marginBottom:'15px'}} title='Figma' />
        </div>
    </div>
  )
}

export default ToolStack