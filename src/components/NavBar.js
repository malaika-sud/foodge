import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import loogo from '../assets/img/loogo.svg';

export const NavBar = () => {
    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        }

        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll", onScroll);
    }, [])

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    }

    return (
        <Navbar expand="lg" className={scrolled ? "scrolled": ""}>
            <Container>
                <Navbar.Brand href="#home">
                    <img src={loogo} alt="Logo" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"> 
                  <span className="navbar-toggler-icon"></span>
                </Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
                        {/* <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link> 
                        <Nav.Link href="#experience" className={activeLink === 'experience' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('experience')}>Experience</Nav.Link>   
                        <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>  
                        <Nav.Link href="#resume" className={activeLink === 'resume' ? 'active navbar-link' : 'navbar-link'} onClick={() => window.open('https://github.com/malaika-sud/resume-site/blob/main/Malaika%20Sud%20Resume.pdf', "_blank") || window.location.replace('https://github.com/malaika-sud/resume-site/blob/main/Malaika%20Sud%20Resume.pdf')}>Resume</Nav.Link>   */}
                    </Nav>
                    <span className="navbar-text">
                        <div className="social-icon">
                            {/* <a href="https://www.linkedin.com/in/malaika-sud/"><img src={linkedinIcon} alt=""/></a>
                            <a href="https://github.com/malaika-sud"><img src={githubIcon} alt=""/></a> */}
                        </div>
                        <button className="vvd" onClick={() => window.location.href = "mailto:malaika.sud@gmail.com"}><span>Contact Me!</span> </button>
                    </span>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}