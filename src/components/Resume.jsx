
function Resume() {
  return (
    <section className="resume-section" id="resume">

      <div className="section-heading">
        <p>MY RESUME</p>
        <h2>Download My <span>Resume</span></h2>
        <div className="heading-line"></div>
      </div>

      <div className="resume-container">
        <p>
          Interested in learning more about my skills, education
          and experience? Download my resume below.
        </p>

        <a
          href="/Aanya_Sharma_Resume.pdf"
          download
          className="resume-btn"
        >
          Download Resume ↓
        </a>
      </div>

    </section>
  );
}

export default Resume;
