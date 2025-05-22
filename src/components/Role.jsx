import { Typewriter } from 'react-simple-typewriter';

const Role = () => {
  return (
    <h1 className='px-0'>
      <Typewriter
       words={
        [
            "Full Stack Developer" ,
            "MERN Stack Developer" ,
            "Web Developer" ,
            "Front-End Developer",
            "Back-End Developer"
        ]
        } 
        loop={true} 
        />
    </h1>
  );
};

export default Role;
