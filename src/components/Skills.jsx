
import { useState } from 'react';

import {
  CodeXml,
  Palette,
  Braces,
  Coffee,
  GitBranch,
  Target
} from 'lucide-react';

function Skills() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = [
    'All',
    'Web Development',
    'Programming',
    'Developer Tools',
    'Core Skills'
  ];

  const skills = [
    {
      name: 'HTML',
      icon: CodeXml,
      category: 'Web Development',
      description: 'Creating structured and semantic web pages.'
    },
    {
      name: 'CSS',
      icon: Palette,
      category: 'Web Development',
      description: 'Designing responsive and attractive interfaces.'
    },
    {
      name: 'JavaScript',
      icon: Braces,
      category: 'Web Development',
      description: 'Adding interactivity and dynamic functionality.'
    },
    {
      name: 'Java',
      icon: Coffee,
      category: 'Programming',
      description: 'Developing programming logic and applications.'
    },
    {
      name: 'Git & GitHub',
      icon: GitBranch,
      category: 'Developer Tools',
      description: 'Managing code and collaborating on projects.'
    },
    {
      name: 'Problem Solving',
      icon: Target,
      category: 'Core Skills',
      description: 'Developing logical thinking through coding.'
    }
  ];

  const filteredSkills = skills.filter((skill) =>
    selectedCategory === 'All' ||
    skill.category === selectedCategory
  );

  return (
    <section className="skills-section" id="skills">
      <div className="section-heading">
        <p>WHAT I KNOW</p>
        <h2>
          My <span>Skills</span>
        </h2>
        <div className="heading-line"></div>
      </div>

      {/* Category Filters */}
      <div className="skills-filters">
        {categories.map((category) => (
          <button
            key={category}
            type="button"
            className={`skill-filter-btn ${
              selectedCategory === category ? 'active' : ''
            }`}
            onClick={() => setSelectedCategory(category)}
            aria-pressed={selectedCategory === category}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Skills Grid */}
      <div className="skills-grid">
        {filteredSkills.map((skill) => {
          const Icon = skill.icon;

          return (
            <article className="skill-card" key={skill.name}>
              <div className="skill-top">
                <span className="skill-icon">
                  <Icon size={23} strokeWidth={1.5} />
                </span>

                <h3>{skill.name}</h3>
              </div>

              <p>{skill.description}</p>

              <span className="skill-category-label">
                {skill.category}
              </span>
            </article>
          );
        })}
      </div>
    </section>
  );
}

export default Skills;
