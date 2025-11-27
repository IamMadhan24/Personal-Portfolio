import java_certificate from '../assets/java-dsa.jpg';
import web_certificate from '../assets/web-dev.jpg';

// Skill images
import html_img from '../assets/html.png';
import css_img from '../assets/css.png';
import js_img from '../assets/js.png';
import react_img from '../assets/react.png';
import postgresql_img from '../assets/postgresql.png';
import java_img from '../assets/java.png';
import tailwind_img from '../assets/tailwindcss.png';
import spring_img from '../assets/springboot.png';

export const modalData = [
  {
    id: 1,
    title: "SKILLS",
    content: [
      {
        heading: "FRONTEND",
        items: [
          { name: "HTML", image: html_img },
          { name: "CSS", image: css_img },
          { name: "JS", image: js_img },
          { name: "React JS", image: react_img },
          { name: "Tailwind CSS", image: tailwind_img}
        ],
      },
      {
        heading: "BACKEND",
        items: [
          { name: "Spring Boot", image: spring_img }
        ],
      },
      {
        heading: "DATABASE",
        items: [
          { name: "PostgreSQL", image: postgresql_img }
        ],
      },
      {
        heading: "PROGRAMMING LANGUAGES",
        items: [
          { name: "Java", image: java_img }
        ],
      }
    ],
  },
  {
    id: 2,
    title: "EDUCATION",
    content: [
      { institute: "College:", details: "Velammal Engineering College,", steam: "B.E. in Computer Science & Engineering" },
      { institute: "Diploma:", details: "Muragappa Polytechnic College,", steam: "Diploma in Computer Science & Engineering" },
      { institute: "School:", details: "Jaya Matriculation Higher Secondary School" }
    ],
  },
  {
    id: 3,
    title: "CERTIFICATIONS",
    content: [
      {
        course: "Web Development Bootcamp",
        image: web_certificate,
        description: "Completed an end-to-end web development bootcamp, learning front-end and back-end technologies to build full-stack applications.",
      },
      {
        course: "Java Data Structures & Algorithms",
        image: java_certificate,
        description: "Completed a comprehensive course on Java programming and data structures & algorithms, covering problem-solving techniques and coding best practices.",
      },
    ],
  },
];
