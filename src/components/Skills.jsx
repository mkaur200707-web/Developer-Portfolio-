
function Skills() {
  const skills = [
    {
      name: "HTML",
      icon: "🌐",
      description: "Creating structured and semantic web pages.",
      progress: "html-progress",
      percentage: "90%"
    },
    {
      name: "CSS",
      icon: "🎨",
      description: "Designing responsive and attractive interfaces.",
      progress: "css-progress",
      percentage: "85%"
    },
    {
      name: "JavaScript",
      icon: "⚡",
      description: "Adding interactivity and dynamic functionality.",
      progress: "js-progress",
      percentage: "75%"
    },
    {
      name: "Java",
      icon: "☕",
      description: "Developing programming logic and applications.",
      progress: "java-progress",
      percentage: "80%"
    },
    {
      name: "Git & GitHub",
      icon: "🐙",
      description: "Managing code and collaborating on projects.",
      progress: "github-progress",
      percentage: "75%"
    },
    {
      name: "Problem Solving",
      icon: "🎯",
      description: "Developing logical thinking through coding.",
      progress: "problem-progress",
      percentage: "80%"
    }
  ];

  return (
    <section className="skills-section" id="skills">
      <div className="section-heading">
        <p>WHAT I KNOW</p>
        <h2>My <span>Skills</span></h2>
        <div className="heading-line"></div>
      </div>

      <div className="skills-grid">
        {skills.map((skill) => (
          <div className="skill-card" key={skill.name}>
            <div className="skill-top">
              <span className="skill-icon">{skill.icon}</span>
              <h3>{skill.name}</h3>
            </div>

            <p>{skill.description}</p>

            <div className="skill-bar">
              <div
                className={`skill-progress ${skill.progress}`}
              ></div>
            </div>

            <span className="skill-percent">
              {skill.percentage}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
