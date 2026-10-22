
import { useState } from 'react';

function Certificates() {
  const [selectedCertificate, setSelectedCertificate] = useState(null);

  const certificates = [
    {
      title: 'Web Development',
      icon: '🌐',
      description:
        'Sample achievement certificate demonstrating knowledge of HTML, CSS and JavaScript.'
    },
    {
      title: 'Java Programming',
      icon: '☕',
      description:
        'Sample achievement certificate demonstrating programming and object-oriented concepts in Java.'
    },
    {
      title: 'UI/UX Design',
      icon: '🎨',
      description:
        'Sample achievement certificate demonstrating basic user interface and user experience design skills.'
    }
  ];

  return (
    <>
      <section className="certificates-section" id="certificates">

        <div className="section-heading">
          <p>MY ACHIEVEMENTS</p>
          <h2>My <span>Certificates</span></h2>
          <div className="heading-line"></div>
        </div>

        <div className="certificates-grid">
          {certificates.map((certificate) => (
            <div
              className="certificate-card"
              key={certificate.title}
            >
              <div className="certificate-top">
                <span className="certificate-icon">
                  {certificate.icon}
                </span>

                <span className="sample-badge">
                  SAMPLE
                </span>

                <button
                  type="button"
                  className="view-certificate-btn"
                  onClick={() =>
                    setSelectedCertificate(certificate.title)
                  }
                >
                  View Sample
                </button>
              </div>

              <h3>{certificate.title}</h3>

              <p>{certificate.description}</p>

              <div className="certificate-footer">
                <span>🏆 Aanya Sharma</span>
                <span>2026</span>
              </div>
            </div>
          ))}
        </div>

        <p className="certificate-note">
          * Sample certificates for portfolio demonstration purposes.
        </p>

      </section>

      {selectedCertificate && (
        <div
          className="certificate-modal show"
          id="certificateModal"
          onClick={(event) => {
            if (event.target === event.currentTarget) {
              setSelectedCertificate(null);
            }
          }}
        >
          <div
            className="certificate-modal-content"
            role="dialog"
            aria-modal="true"
            aria-labelledby="certificateTitle"
          >

            <button
              className="close-certificate"
              type="button"
              aria-label="Close certificate"
              onClick={() => setSelectedCertificate(null)}
            >
              &times;
            </button>

            <div className="certificate-design">

              <div className="certificate-label">
                SAMPLE / DEMO
              </div>

              <p className="certificate-small-title">
                CERTIFICATE OF ACHIEVEMENT
              </p>

              <h2 id="certificateTitle">
                {selectedCertificate}
              </h2>

              <p>
                This sample certificate is presented to
              </p>

              <h3>Aanya Sharma</h3>

              <p>
                for demonstrating learning and skills in
                the selected field.
              </p>

              <div className="certificate-divider"></div>

              <div className="certificate-bottom">
                <span>Portfolio Demo</span>
                <span>2026</span>
              </div>

              <p className="demo-warning">
                SAMPLE CERTIFICATE — NOT AN OFFICIAL CREDENTIAL
              </p>

            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Certificates;
