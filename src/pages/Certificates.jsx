import React from 'react';
import { motion } from 'framer-motion';
import CertificateCard from '../modals/CertificateCard';
import certficate1 from '../assets/certificates/coursera1.jpg';
import certficate2 from '../assets/certificates/coursera2.jpg';
import certficate3 from '../assets/certificates/coursera3.jpg';
import certficate5 from '../assets/certificates/coursera5.jpg';
import certificate6 from '../assets/certificates/udemy1.jpg';
import certificate7 from '../assets/certificates/udemy2.jpg';

const certificates = [
  { title: 'Introduction to Web Development with HTML, CSS, JavaScript', issuedBy: 'IBM', imgSrc: certficate1, completedOn: 'Nov 4, 2023', url: 'https://coursera.org/verify/Q68KFZTUXVG7' },
  { title: 'Introduction to Web Development', issuedBy: 'UC Davis', imgSrc: certficate2, completedOn: 'Dec 8, 2023', url: 'https://coursera.org/verify/LXGHG5KCWZPM' },
  { title: 'Developing Front-End Apps with React', issuedBy: 'IBM', imgSrc: certficate3, completedOn: 'Jan 4, 2024', url: 'https://coursera.org/verify/AX9P46GT5WUN' },
  { title: 'Build a computer vision app with Azure Cognitive Services', issuedBy: 'Microsoft', imgSrc: certficate5, completedOn: 'Jul 3, 2024', url: 'https://coursera.org/verify/M32RZHTXVYRQ' },
  { title: 'Python & Java: Master Backend & Frontend Developments', issuedBy: 'Udemy', imgSrc: certificate7, completedOn: 'Sep 3, 2024', url: 'https://ude.my/UC-34642dc2-882e-40d1-a536-465bf2de4a4b' },
  { title: 'Databases with Python: MySQL, SQLite, MongoDB', issuedBy: 'Udemy', imgSrc: certificate6, completedOn: 'Sep 4, 2024', url: 'https://ude.my/UC-f1b98072-128c-4221-ac8c-63d0667796ba' }
];

// Animation variants for left and right sliding
const leftSlide = { hidden: { opacity: 0, x: -200 }, visible: { opacity: 1, x: 0, transition: { duration: 0.8 } } };
const rightSlide = { hidden: { opacity: 0, x: 200 }, visible: { opacity: 1, x: 0, transition: { duration: 0.8 } } };

function Certificates() {
  return (
    <div className='container pt-5'>
      <h5 className='text-center fs-1'>
        Certified {" "}
        <span style={{color:'#ab3483'}}><strong>Skills</strong></span>
        {" "} & {" "}
        <span style={{color:'#ab3483'}}><strong>Achievements</strong></span>
      </h5>
      <p className='fs-5 text-center'>
        Below are some certifications I have achieved recently
      </p>

      <div className="row justify-content-center gap-4 mt-5">
        {certificates.map((cert, index) => (
          <motion.div 
            key={index} 
            className="col-12 col-md-3" 
            style={{ height: 'auto', width: '80%' }}
            variants={index % 2 === 0 ? leftSlide : rightSlide} // Alternating left and right
            initial="hidden" 
            whileInView="visible"
          >
            <CertificateCard
              title={cert.title}
              issuedBy={cert.issuedBy}
              imgSrc={cert.imgSrc}
              completedOn={cert.completedOn}
              url={cert.url}
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Certificates;
