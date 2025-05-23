import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';

import { FaHome, FaProjectDiagram } from 'react-icons/fa';
import { IoPersonSharp } from "react-icons/io5";
import { GrCertificate } from "react-icons/gr";
import { FaPenNib } from "react-icons/fa6";

function NavHeader() {

  const navs = [
    {
      title: 'Home',
      icon: <FaHome />,
      href: '/'
    },
    {
      title: 'About',
      icon: <IoPersonSharp />,
      href: '/about'
    },
    {
      title: 'Projects',
      icon: <FaProjectDiagram />,
      href: '/projects'
    },
    {
      title: 'Certifications',
      icon: <GrCertificate />,
      href: '/certificates'
    },
    {
      title: 'Blogs',
      icon: <FaPenNib />,
      href: '/blogs'
    },
  ];

  return (
    <>
      {['lg'].map((expand) => (
        <Navbar
          key={expand}
          expand={expand}
          className="mb-3 px-4 navbar top-0"
          style={{ width: '100%', zIndex: 1030 }} // Bootstrap default navbar z-index
          fixed="top"
        >
          <Container fluid>
            <Navbar.Brand href="/" className='text-light'>Sd.</Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} className='bg-light' />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton style={{ backgroundColor: '#ab3483' }}>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Sd.
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body className='bg-navs text-light'>
                <Nav className="justify-content-end flex-grow-1 gap-3">
                  {navs.map((nav, index) => (
                    <Nav.Link
                      key={index}
                      href={nav.href}
                      className='d-flex flex-row justify-center align-items-center gap-1 text-light nav-navs'
                    >
                      {nav.icon}
                      <span>{nav.title}</span>
                    </Nav.Link>
                  ))}
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default NavHeader;
