import { useState, useEffect } from "react";

const HEADER_HEIGHT = 80;

const Header = () => {
  const [isActive, setIsActive] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const toggleMenu = () => setIsActive(!isActive);
  const closeMenu = () => setIsActive(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      const scrollPosition = window.scrollY + HEADER_HEIGHT + 10;

      sections.forEach((section) => {
        const top = section.offsetTop;
        const height = section.offsetHeight;
        const id = section.getAttribute("id");

        if (scrollPosition >= top && scrollPosition < top + height) {
          setActiveSection(id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="header">
      {/* SB Logo */}
      <a href="#home" className="sb-logo" onClick={closeMenu}>
        <span className="sb-ring"></span>
        <span className="sb-text">SB</span>
      </a>

      {/* Mobile Menu Icon */}
      <i
        className={`bx ${isActive ? "bx-x" : "bx-menu"}`}
        id="menu-icon"
        onClick={toggleMenu}
      ></i>

      {/* Navigation */}
      <nav className={isActive ? "active" : ""}>
        <a href="#home" className={activeSection === "home" ? "active" : ""} onClick={closeMenu}>Home</a>
        <a href="#education" className={activeSection === "education" ? "active" : ""} onClick={closeMenu}>Education</a>
        <a href="#experience" className={activeSection === "experience" ? "active" : ""} onClick={closeMenu}>Experience</a>
        <a href="#project" className={activeSection === "project" ? "active" : ""} onClick={closeMenu}>Projects</a>
        <a href="#skills" className={activeSection === "skills" ? "active" : ""} onClick={closeMenu}>Skills</a>
        <a href="#work" className={activeSection === "work" ? "active" : ""} onClick={closeMenu}>Work</a>
        <a href="#contact" className={activeSection === "contact" ? "active" : ""} onClick={closeMenu}>Contact</a>

        <a
          href="/FullStackShiva.pdf"
          download="BoyaShiva_Resume.pdf"
          className="btn-download"
          onClick={closeMenu}
        >
          Resume
        </a>
      </nav>
    </header>
  );
};

export default Header;
