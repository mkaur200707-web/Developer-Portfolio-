
import {
  Laptop,
  ListChecks,
  GraduationCap
} from 'lucide-react';

function Projects() {
  const projects = [
    {
      icon: Laptop,
      title: "Developer Portfolio",
      description:
        "A modern and responsive developer portfolio website created using HTML, CSS and JavaScript.",
      technologies: ["HTML", "CSS", "JavaScript"]
    },
    {
      icon: ListChecks,
      title: "To-Do List",
      description:
        "A simple task management website that helps users organize and manage their daily tasks.",
      technologies: ["HTML", "CSS", "JavaScript"]
    },
    {
      icon: GraduationCap,
      title: "Student Management System",
      description:
        "An academic project designed to manage student information using programming concepts.",
      technologies: ["Java", "OOP"]
    }
  ];

  return (
    <section className="projects-section" id="projects">
      <div className="section-heading">
        <p>MY WORK</p>
        <h2>
          My <span>Projects</span>
        </h2>
        <div className="heading-line"></div>
      </div>

      <div className="projects-grid">
        {projects.map((project) => {
          const Icon = project.icon;

          return (
            <article
              className="project-card"
              key={project.title}
            >
              <div className="project-icon">
                <Icon size={25} strokeWidth={1.5} />
              </div>

              <h3>{project.title}</h3>

              <p>{project.description}</p>

              <div className="project-tech">
                {project.technologies.map((tech) => (
                  <span key={tech}>{tech}</span>
                ))}
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

export default Projects;
