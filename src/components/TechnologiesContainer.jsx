import {
  DiHtml5,
  DiCss3,
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiPostgresql,
} from "react-icons/di";

import "../styles/components/technologiescontainer.sass";

const technologies = [
  { id: "html", name: "HTML5", icon: <DiHtml5 /> },
  { id: "css", name: "Css3", icon: <DiCss3 /> },
  { id: "js", name: "Javascript", icon: <DiJavascript1 /> },
  { id: "react", name: "React", icon: <DiReact /> },
  { id: "node", name: "Nodejs", icon: <DiNodejs /> },
  { id: "postgre", name: "Postgresql", icon: <DiPostgresql /> },
];

const TechnologiesContainer = () => {
  return <section className="technologies-container">
    <h2>Tecnologias</h2>
    <div className="technologies-grid">
      {technologies.map((tech) => (
        <div className="technology-card" id={tech.id} key={tech.id}>
          {tech.icon}
          <div className="technology-info">
            <h3>{tech.name}</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam aperiam maxime, harum possimus vero numquam sunt animi ipsum eveniet.</p>
          </div>
        </div>
      ))}
    </div>
  </section>;
};

export default TechnologiesContainer;
