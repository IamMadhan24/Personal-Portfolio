import React, { useState } from "react";
import './About.css';
import user_img from '../../data/assets/user.png';
import theme from '../../data/assets/theme_pattern.svg';

import { aboutCards } from '../../data/about/aboutData.js';
import { toolsLogo } from '../../data/about/aboutToolsData.js';
import { modalData } from '../../data/about/aboutPopupData.js';

import AboutCard from './AboutCard.jsx';
import ToolIcon from './ToolIcon.jsx';
import AboutPopup from './PopupWindow/AboutPopup.jsx';

const About = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [activeModal, setActiveModal] = useState(null);

  const openModal = (id) => {
    setActiveModal(id);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setActiveModal(null);
  };

  return (
    <section id='about' className="about">

      <div className="about-heading">
        <h1>About me</h1>
        <img src={theme} alt="theme" />
      </div>

      <div className="about-section">

        <div className="about-photo">
          <img src={user_img} alt="User" />
        </div>

        <div className="about-content">

          <p className="about-text">
            I began my journey in web development during my college years at
            Velammal Engineering College, where I discovered my passion for
            building interactive and dynamic websites. From creating simple HTML
            pages to developing full-stack web applications, my learning has
            been hands-on and project-driven. I continuously strive to explore
            the latest technologies and sharpen my problem-solving skills.
          </p>

          <div className="about-cards">
            {aboutCards.map((item) => (
              <AboutCard
                key={item.id}
                logo={item.logo}
                title={item.title}
                description={item.description}
                onReadMore={() => openModal(item.id)}
              />
            ))}
          </div>

          <div className="tools">

            <p className="tools-heading">TOOLS I USE</p>
            <div className="tools-img">
              {toolsLogo.map((tool) => (
                <ToolIcon key={tool.id} logo={tool.logo} name={tool.name} />
              ))}
            </div>

          </div>

        </div>

      </div>

      {modalOpen && activeModal && (

        <AboutPopup
          data={modalData.find((d) => d.id === activeModal)}
          onClose={closeModal}
        />

      )}

    </section>
  );
};

export default About;
