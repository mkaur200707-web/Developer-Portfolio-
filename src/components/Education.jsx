
function Education() {
  return (
    <section className="education-section" id="education">

      <div className="section-heading">
        <p>MY ACADEMIC JOURNEY</p>
        <h2>My <span>Education</span></h2>
        <div className="heading-line"></div>
      </div>

      <div className="education-timeline">

        <div className="education-item">
          <div className="education-dot"></div>

          <div className="education-card">
            <span className="education-year">
              2024 - Present
            </span>

            <h3>B.Tech in Computer Science</h3>
            <h4>Computer Science &amp; Engineering</h4>

            <p>
              Currently pursuing Bachelor of Technology in Computer
              Science and Engineering with a focus on programming,
              web development and software technologies.
            </p>
          </div>
        </div>

        <div className="education-item">
          <div className="education-dot"></div>

          <div className="education-card">
            <span className="education-year">
              Higher Secondary
            </span>

            <h3>12th Grade</h3>
            <h4>Senior Secondary Education</h4>

            <p>
              Completed higher secondary education with a focus on
              developing a strong academic and logical foundation.
            </p>
          </div>
        </div>

        <div className="education-item">
          <div className="education-dot"></div>

          <div className="education-card">
            <span className="education-year">
              Secondary School
            </span>

            <h3>10th Grade</h3>
            <h4>Secondary Education</h4>

            <p>
              Completed secondary education and developed an interest
              in technology and computer science.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Education;
