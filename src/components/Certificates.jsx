
import { useState, useEffect } from 'react';
import {
  Globe,
  Coffee,
  Palette,
  Award,
  X,
  ArrowUpRight
} from 'lucide-react';

function Certificates() {
  const [selectedCertificate, setSelectedCertificate] = useState(null);

  const certificates = [
    {
      title: 'Web Development',
      icon: Globe,
      description:
        'Knowledge and practical experience in HTML, CSS and JavaScript.'
    },
    {
      title: 'Java Programming',
      icon: Coffee,
      description:
        'Programming fundamentals and object-oriented concepts using Java.'
    },
    {
      title: 'UI/UX Design',
      icon: Palette,
      description:
        'Understanding of user interface design and user experience principles.'
    }
  ];

  useEffect(() => {
    if (!selectedCertificate) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        setSelectedCertificate(null);
      }
    };

    window.addEventListener('keydown', handleEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleEscape);
    };
  }, [selectedCertificate]);

  return (
    <>
      <section
        className="certificates-section"
        id="certificates"
      >
        <div className="section-heading">
          <p>PROFESSIONAL DEVELOPMENT</p>
          <h2>
            My <span>Certificates</span>
          </h2>
          <div className="heading-line"></div>
        </div>

        <div className="certificates-grid">
          {certificates.map((certificate) => {
            const Icon = certificate.icon;

            return (
              <article
                className="certificate-card"
                key={certificate.title}
              >
                <div className="certificate-top">
                  <span className="certificate-icon">
                    <Icon size={24} strokeWidth={1.5} />
                  </span>
                </div>

                <h3>{certificate.title}</h3>

                <p>{certificate.description}</p>

                <button
                  type="button"
                  className="view-certificate-btn"
                  onClick={() =>
                    setSelectedCertificate(certificate)
                  }
                >
                  View Details
                  <ArrowUpRight size={17} strokeWidth={1.5} />
                </button>
              </article>
            );
          })}
        </div>
      </section>

      {selectedCertificate && (
        <div
          className="certificate-modal show"
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
              aria-label="Close details"
              onClick={() => setSelectedCertificate(null)}
            >
              <X size={22} />
            </button>

            <div className="certificate-design">
              <Award
                className="certificate-award"
                size={38}
                strokeWidth={1.2}
              />

              <p className="certificate-small-title">
                PROFESSIONAL DEVELOPMENT
              </p>

              <h2 id="certificateTitle">
                {selectedCertificate.title}
              </h2>

              <p>{selectedCertificate.description}</p>

              <div className="certificate-divider"></div>

              <div className="certificate-bottom">
                <span>Skills & Learning</span>
                <span>Portfolio</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Certificates;
