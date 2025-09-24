import './Footer.css';
import theme from '../../data/assets/theme_pattern.svg';

const Footer = () => {
  const socialLinks = [
    { href: "https://www.linkedin.com/in/madhanraj24/", text: "LinkedIn" },
    { href: "https://github.com/IamMadhan24", text: "GitHub" },
    { href: "https://www.instagram.com/im.maddy.24?igsh=ZzY5MXRmemlqZmR3", text: "Instagram" },
  ];

  return (
    <footer className='footer'>
      <div className="footer-top">
        <div className="footer-right">
          <h1>Madhan Raj</h1>
          <img src={theme} alt="theme" />
        </div>
      </div>
      <hr />
      <div className="footer-bottom">
        <p className="footer-bottom-left">
          Copyright © 2025 Madhan Raj | All rights reserved.
        </p>
        <div className="footer-bottom-right">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              {link.text}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
