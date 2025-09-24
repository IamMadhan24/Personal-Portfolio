import "./Hero.css";
import profile_img from "../../data/assets/profile.png";
import resume from "../../data/assets/madhan_raj_resume.pdf";

const Hero = () => {
  const actions = [
    {
      href: resume,
      download: "Madhan_Raj_Resume.pdf",
      className: "hero-resume",
      text: "My Resume",
    },
    {
      href: "https://github.com/IamMadhan24",
      className: "hero-github",
      text: "GitHub",
      target: "_blank",
      rel: "noopener noreferrer",
    },
  ];

  return (
    <section id="home" className="hero">
      <img src={profile_img} alt="profile" />
      <h1>
        <span>I'm Madhan Raj,</span> full-stack web developer!
      </h1>
      <p>
        Welcome to my portfolio website. I am a passionate developer, designer,
        and creator.
      </p>
      <div className="hero-action">
        {actions.map((action, index) => (
          <a key={index} {...action}>
            {action.text}
          </a>
        ))}
      </div>
    </section>
  );
};

export default Hero;
