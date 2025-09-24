import './Projects.css';
import theme from '../../data/assets/theme_pattern.svg';
import { projectsImage } from '../../data/project/projectData.js';
import { useState } from 'react';
import ProjectPopup from './PopupWindow/ProjectPopup.jsx';

const Projects = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [activeProject, setActiveProject] = useState(null);

  const openModal = (project) => {
    setActiveProject(project);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setActiveProject(null);
  };

  return (
    <section id='project' className='project'>
      <div className="project-title">
        <h1>My Projects</h1>
        <img src={theme} alt="theme" />
      </div>

      <div className="project-container">
        {projectsImage.map(project => (
          <img
            key={project.id}
            src={project.image}
            alt={project.name}
            onClick={() => openModal(project)}
          />
        ))}
      </div>

      {modalOpen && activeProject && (
        <ProjectPopup data={activeProject} onClose={closeModal} />
      )}
    </section>
  );
};

export default Projects;
