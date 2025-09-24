import React, { useEffect } from "react";  
import "./AboutPopup.css";

const SimpleModal = ({ data, onClose }) => {
  if (!data) return null;

  useEffect(() => {
    document.body.classList.add("modal-open");
    return () => {
      document.body.classList.remove("modal-open");
    };
  }, []);

  const handleOverlayClick = (e) => {
    if (e.target.className.includes("modal-overlay")) {
      onClose();
    }
  };

  return (
    <div className="modal-overlay" onClick={handleOverlayClick}>
      <div className="modal-content">
        <button className="modal-close" onClick={onClose}>×</button>
        <h2 className="modal-title">{data.title}</h2>

        {data.content.map((section, index) => (
          <div key={index} className="modal-section">
            <h3>{section.heading}</h3>

            {section.items && (
              <div className="skills-grid">
                {section.items.map((item, i) => (
                  <div key={i} className="modal-item">
                    <img src={item.image} alt={item.name} />
                    <p>{item.name}</p>
                  </div>
                ))}
              </div>
            )}

            {section.details && (
              <div className="education-modal">
                <h3>{section.institute}</h3>
                <p>{section.details}</p>
                <p>{section.steam}</p>
              </div>
            )}

            {section.image && (
              <div className="cert-grid">
                <div className="cert-item">
                  <h3>{section.course}</h3>
                  <img src={section.image} alt={section.heading} />
                  <p>{section.description}</p>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SimpleModal;
