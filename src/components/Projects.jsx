
import { useState, useEffect } from 'react';

import {
  Laptop,
  ListChecks,
  GraduationCap,
  Search,
  X,
  ArrowRight,
  CheckCircle2
} from 'lucide-react';

const projects = [
  {
    icon: Laptop,
    title: "Developer Portfolio",
    description:
      "A modern and responsive developer portfolio website created using HTML, CSS and JavaScript.",
    details:
      "A personal portfolio website designed to showcase developer skills, academic background, projects, and achievements. It focuses on responsive design, smooth navigation, and a clean user experience.",
    technologies: ["HTML", "CSS", "JavaScript", "React"],
    features: [
      "Responsive layout for desktop and mobile",
      "Multiple pages with React Router",
      "Light and dark theme support",
      "Projects and skills showcase",
      "Resume and certificate sections"
    ]
  },
  {
    icon: ListChecks,
    title: "To-Do List",
    description:
      "A simple task management website that helps users organize and manage their daily tasks.",
    details:
      "A beginner-friendly task management project focused on helping users organize their daily activities through a simple interface.",
    technologies: ["HTML", "CSS", "JavaScript"],
    features: [
      "Simple task management interface",
      "Clean and easy-to-use layout",
      "Organized task presentation"
    ]
  },
  {
    icon: GraduationCap,
    title: "Student Management System",
    description:
      "An academic project designed to manage student information using programming concepts.",
    details:
      "An academic programming project exploring how student information can be represented and managed using Java and object-oriented programming concepts.",
    technologies: ["Java", "OOP"],
    features: [
      "Student information organization",
      "Object-oriented program structure",
      "Use of Java programming concepts"
    ]
  }
];

const technologies = [
  'All',
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Java',
  'OOP'
];

function Projects() {
  const [search, setSearch] = useState('');
  const [selectedTech, setSelectedTech] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects = projects.filter((project) => {
    const keyword = search.trim().toLowerCase();

    const matchesSearch =
      project.title.toLowerCase().includes(keyword) ||
      project.description.toLowerCase().includes(keyword) ||
      project.technologies.some((tech) =>
        tech.toLowerCase().includes(keyword)
      );

    const matchesTechnology =
      selectedTech === 'All' ||
      project.technologies.includes(selectedTech);

    return matchesSearch && matchesTechnology;
  });

  useEffect(() => {
    if (!selectedProject) return;

    function handleEscape(event) {
      if (event.key === 'Escape') {
        setSelectedProject(null);
      }
    }

    document.addEventListener('keydown', handleEscape);

    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [selectedProject]);

  return (
    <section className="projects-section" id="projects">
      <div className="section-heading">
        <p>MY WORK</p>
        <h2>
          My <span>Projects</span>
        </h2>
        <div className="heading-line"></div>
      </div>

      {/* Project Search */}
      <div className="projects-search">
        <Search size={20} />

        <input
          type="text"
          placeholder="Search projects..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          aria-label="Search projects"
        />
      </div>

      {/* Technology Filters */}
      <div className="projects-filters">
        {technologies.map((tech) => (
          <button
            key={tech}
            type="button"
            className={`project-filter-btn ${
              selectedTech === tech ? 'active' : ''
            }`}
            onClick={() => setSelectedTech(tech)}
            aria-pressed={selectedTech === tech}
          >
            {tech}
          </button>
        ))}
      </div>

      {/* Project Cards */}
      <div className="projects-grid">
        {filteredProjects.map((project) => {
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

              <button
                type="button"
                className="project-details-btn"
                onClick={() => setSelectedProject(project)}
              >
                View Details
                <ArrowRight size={17} />
              </button>
            </article>
          );
        })}
      </div>

      {filteredProjects.length === 0 && (
        <p className="projects-empty" role="status">
          No projects found.
        </p>
      )}

      {/* Project Details Popup */}
      {selectedProject && (
        <div
          className="project-modal-overlay"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="project-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="project-modal-title"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              className="project-modal-close"
              onClick={() => setSelectedProject(null)}
              aria-label="Close project details"
              autoFocus
            >
              <X size={22} />
            </button>

            <div className="project-modal-icon">
              <selectedProject.icon
                size={30}
                strokeWidth={1.5}
              />
            </div>

            <h2 id="project-modal-title">
              {selectedProject.title}
            </h2>

            <p className="project-modal-description">
              {selectedProject.details}
            </p>

            <h3>Key Features</h3>

            <ul className="project-features">
              {selectedProject.features.map((feature) => (
                <li key={feature}>
                  <CheckCircle2 size={18} />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <h3>Technologies Used</h3>

            <div className="project-tech">
              {selectedProject.technologies.map((tech) => (
                <span key={tech}>{tech}</span>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default Projects;
