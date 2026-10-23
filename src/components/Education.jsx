
import { GraduationCap, BookOpen, School } from 'lucide-react';

function Education() {
  const education = [
    {
      year: '2024 - Present',
      title: 'B.Tech in Computer Science',
      subtitle: 'Computer Science & Engineering',
      description:
        'Currently pursuing Bachelor of Technology in Computer Science and Engineering with a focus on programming, web development and software technologies.',
      icon: GraduationCap
    },
    {
      year: 'Higher Secondary',
      title: '12th Grade',
      subtitle: 'Senior Secondary Education',
      description:
        'Completed higher secondary education with a focus on developing a strong academic and logical foundation.',
      icon: BookOpen
    },
    {
      year: 'Secondary School',
      title: '10th Grade',
      subtitle: 'Secondary Education',
      description:
        'Completed secondary education and developed an interest in technology and computer science.',
      icon: School
    }
  ];

  return (
    <section className="education-section" id="education">
      <div className="section-heading">
        <p>MY ACADEMIC JOURNEY</p>
        <h2>
          My <span>Education</span>
        </h2>
        <div className="heading-line"></div>
      </div>

      <div className="education-timeline">
        {education.map((item) => {
          const Icon = item.icon;

          return (
            <div className="education-item" key={item.title}>
              <div className="education-dot"></div>

              <div className="education-card">
                <div className="education-card-header">
                  <span className="education-icon">
                    <Icon size={22} strokeWidth={1.5} />
                  </span>

                  <span className="education-year">
                    {item.year}
                  </span>
                </div>

                <h3>{item.title}</h3>
                <h4>{item.subtitle}</h4>
                <p>{item.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Education;
