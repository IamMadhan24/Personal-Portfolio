import { useState, useEffect } from "react";
import "./Navbar.css";
import nav_underline from "../../data/assets/nav_underline.svg";
import menu_open from "../../data/assets/menu_open.svg";
import menu_close from "../../data/assets/menu_close.svg";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Navbar = () => {
  const [activeMenu, setActiveMenu] = useState("home");
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);

  const sections = [
    { id: "home", name: "Home" },
    { id: "about", name: "About Me" },
    { id: "project", name: "Project" },
    { id: "contact", name: "Contact" },
  ];

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      setScrolled(currentScrollY > 50);

      if (window.innerWidth > 820) {
        if (currentScrollY > lastScrollY && currentScrollY > 100) {
          setShowNavbar(false);
        } else {
          setShowNavbar(true);
        }
      } else {
        setShowNavbar(true); 
      }
      lastScrollY = currentScrollY;

      sections.forEach((section) => {
        const el = document.getElementById(section.id);
        if (el) {
          const top = el.offsetTop - 60;
          const bottom = top + el.offsetHeight;
          if (currentScrollY >= top && currentScrollY < bottom) {
            setActiveMenu(section.id);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll); 
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""} ${showNavbar ? "show" : "hide"}`}>
      <h1>Madhan Raj</h1>

      <img
        src={menu_open}
        alt="menu"
        className="nav-mob-open"
        onClick={() => setIsOpen(true)}
      />

      <ul className={isOpen ? "nav-menu active" : "nav-menu"}>
        <img
          src={menu_close}
          alt="close"
          className="nav-mob-close"
          onClick={() => setIsOpen(false)}
        />

        {sections.map((section) => (
          <li key={section.id}>
            <AnchorLink
              className="anchor-link"
              offset={50}
              href={`#${section.id}`}
              onClick={() => setIsOpen(false)}
            >
              <p>{section.name}</p>
            </AnchorLink>
            {activeMenu === section.id && (
              <img src={nav_underline} alt="underline" />
            )}
          </li>
        ))}
      </ul>

      <a
        href="https://www.linkedin.com/in/madhanraj24/"
        className="nav-connect"
        target="_blank"
        rel="noopener noreferrer"
      >
        Connect with Me
      </a>
    </nav>
  );
};

export default Navbar;
