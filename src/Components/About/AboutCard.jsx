import React from "react";
import nav_underline from "../../data/assets/nav_underline.svg";

const AboutCard = ({ logo, title, description, onReadMore }) => {
  return (
    <div className="about-card">

      <div className="about-card-content">
        <img src={logo} alt={title} />
        <p className="card-title">{title}</p>
        <p className="card-desc">{description}</p>
      </div>
      
      <div className="read-more" onClick={onReadMore}>
        Read More &gt;&gt;
      </div>

    </div>
  );
};

export default AboutCard;
