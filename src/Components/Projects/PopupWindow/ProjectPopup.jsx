import React, { useEffect } from 'react'; 
import './ProjectPopup.css';

const ProjectModal = ({ data, onClose }) => {
  if (!data) return null;

  useEffect(() => {
    document.body.classList.add('modal-open');
    return () => {
      document.body.classList.remove('modal-open');
    };
  }, []);

  return (
    <div className="project-modal-overlay" onClick={onClose}>
      <div
        className="project-modal-content"
        onClick={e => e.stopPropagation()} 
      >
        <button className="project-modal-close" onClick={onClose}>×</button>
        <h1>{data.name}</h1>
        <img src={data.image} alt={data.name} />
        <p>{data.description}</p>
        <div className="project-links">
          {data.github && (
            <a href={data.github} target="_blank" rel="noreferrer">
              GitHub
            </a>
          )}
          {data.demo && (
            <a href={data.demo} target="_blank" rel="noreferrer">
              Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
