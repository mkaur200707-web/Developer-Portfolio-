
function Contact() {

  function handleSubmit(event) {
    event.preventDefault();
    alert("The contact form is currently a demo. Message sending is not configured yet.");
  }

  return (
    <section className="contact-section" id="contact">

      <div className="section-heading">
        <p>GET IN TOUCH</p>
        <h2>Contact <span>Me</span></h2>
        <div className="heading-line"></div>
      </div>

      <div className="contact-container">

        <div className="contact-info">

          <h3>Let's Connect</h3>

          <p>
            Have a project, opportunity or just want to say hello?
            Feel free to get in touch with me.
          </p>

          <div className="contact-item">
            <span>📧</span>
            <div>
              <h4>Email</h4>
              <p>aanyasharma@gmail.com</p>
            </div>
          </div>

          <div className="contact-item">
            <span>📱</span>
            <div>
              <h4>Phone</h4>
              <p>+91 9999888800</p>
            </div>
          </div>

          <div className="contact-item">
            <span>📍</span>
            <div>
              <h4>Location</h4>
              <p>India</p>
            </div>
          </div>

        </div>

        <form className="contact-form" onSubmit={handleSubmit}>

          <input
            type="text"
            placeholder="Your Name"
            aria-label="Your Name"
            required
          />

          <input
            type="email"
            placeholder="Your Email"
            aria-label="Your Email"
            required
          />

          <input
            type="text"
            placeholder="Subject"
            aria-label="Subject"
          />

          <textarea
            placeholder="Your Message"
            aria-label="Your Message"
            rows="6"
            required
          ></textarea>

          <button type="submit" className="contact-btn">
            Send Message
          </button>

        </form>

      </div>

    </section>
  );
}

export default Contact;
