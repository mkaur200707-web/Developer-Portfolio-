
import {
  UserRound,
  Target,
  Lightbulb,
  TrendingUp
} from 'lucide-react';

function About() {
  return (
    <section className="about-section" id="about">
      <div className="section-heading">
        <p>GET TO KNOW ME</p>
        <h2>
          About <span>Me</span>
        </h2>
        <div className="heading-line"></div>
      </div>

      <div className="about-container">
        <div className="about-card">
          <div className="about-icon">
            <UserRound size={24} strokeWidth={1.5} />
          </div>

          <h3>Who Am I?</h3>

          <p>
            I am a passionate Computer Science student who enjoys
            creating modern and user-friendly websites. I am interested
            in web development, programming and learning new technologies.
          </p>

          <p>
            I believe in learning by building real projects and
            continuously improving my technical and creative skills.
          </p>
        </div>

        <div className="about-details">
          <div className="detail-box">
            <span className="detail-icon">
              <Target size={23} strokeWidth={1.5} />
            </span>

            <div>
              <h4>My Goal</h4>
              <p>To become a skilled software developer.</p>
            </div>
          </div>

          <div className="detail-box">
            <span className="detail-icon">
              <Lightbulb size={23} strokeWidth={1.5} />
            </span>

            <div>
              <h4>My Interest</h4>
              <p>Web Development, Java &amp; UI Design.</p>
            </div>
          </div>

          <div className="detail-box">
            <span className="detail-icon">
              <TrendingUp size={23} strokeWidth={1.5} />
            </span>

            <div>
              <h4>My Approach</h4>
              <p>Learn, build, improve and grow.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
