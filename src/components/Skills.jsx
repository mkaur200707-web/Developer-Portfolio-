
import {
  CodeXml,
  Palette,
  Braces,
  Coffee,
  GitBranch,
  Target
} from 'lucide-react';

function Skills() {
  const skills = [
    {
      name: 'HTML',
      icon: CodeXml,
      description: 'Creating structured and semantic web pages.',
      percentage: 90
    },
    {
      name: 'CSS',
      icon: Palette,
      description: 'Designing responsive and attractive interfaces.',
      percentage: 85
    },
    {
      name: 'JavaScript',
      icon: Braces,
      description: 'Adding interactivity and dynamic functionality.',
      percentage: 75
    },
    {
      name: 'Java',
      icon: Coffee,
      description: 'Developing programming logic and applications.',
      percentage: 80
    },
    {
      name: 'Git & GitHub',
      icon: GitBranch,
      description: 'Managing code and collaborating on projects.',
      percentage: 75
    },
    {
      name: 'Problem Solving',
      icon: Target,
      description: 'Developing logical thinking through coding.',
      percentage: 80
    }
  ];

  return (
    <section className="skills-section" id="skills">
      <div className="section-heading">
        <p>WHAT I KNOW</p>
        <h2>
          My <span>Skills</span>
        </h2>
        <div className="heading-line"></div>
      </div>

      <div className="skills-grid">
        {skills.map((skill) => {
          const Icon = skill.icon;

          return (
            <div className="skill-card" key={skill.name}>
              <div className="skill-top">
                <span className="skill-icon">
                  <Icon size={23} strokeWidth={1.5} />
                </span>

                <h3>{skill.name}</h3>
              </div>

              <p>{skill.description}</p>

              <div className="skill-progress-info">
                <span>Proficiency</span>
                <span>{skill.percentage}%</span>
              </div>

              <div
                className="skill-bar"
                role="progressbar"
                aria-label={`${skill.name} proficiency`}
                aria-valuenow={skill.percentage}
                aria-valuemin={0}
                aria-valuemax={100}
              >
                <div
                  className="skill-progress"
                  style={{ width: `${skill.percentage}%` }}
                ></div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Skills;
