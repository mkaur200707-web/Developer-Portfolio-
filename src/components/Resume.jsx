
import {
  FileUser,
  Download,
  FileText,
  ArrowUpRight
} from 'lucide-react';

function Resume() {
  const resumeUrl =
    `${import.meta.env.BASE_URL}Aanya_Sharma_Resume.pdf`;

  return (
    <section className="resume-section" id="resume">
      <div className="section-heading">
        <p>MY RESUME</p>
        <h2>
          Download My <span>Resume</span>
        </h2>
        <div className="heading-line"></div>
      </div>

      <div className="resume-container">
        <div className="resume-icon">
          <FileUser size={32} strokeWidth={1.4} />
        </div>

        <p className="resume-eyebrow">
          PROFESSIONAL PROFILE
        </p>

        <h3>My Resume</h3>

        <p className="resume-description">
          Explore my technical skills, education,
          projects and experience in one document.
          Download my resume to learn more about
          my work and qualifications.
        </p>

        <div className="resume-details">
          <span>
            <FileText size={17} strokeWidth={1.5} />
            PDF Document
          </span>

          <span>
            <Download size={17} strokeWidth={1.5} />
            Available for Download
          </span>
        </div>

        <div className="resume-actions">
          <a
            href={resumeUrl}
            download
            className="resume-btn"
          >
            <Download size={18} strokeWidth={1.7} />
            Download Resume
          </a>

          <a
            href={resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="resume-preview-btn"
          >
            View Resume
            <ArrowUpRight size={17} strokeWidth={1.5} />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Resume;
