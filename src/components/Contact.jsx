
import {
  Mail,
  Phone,
  MapPin,
  Send,
  ArrowUpRight
} from 'lucide-react';

function Contact() {
  const contactEmail = 'aanyasharma@gmail.com';

  function handleSubmit(event) {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    const name = formData.get('name').trim();
    const email = formData.get('email').trim();
    const subject =
      formData.get('subject').trim() || 'Portfolio Inquiry';
    const message = formData.get('message').trim();

    const body =
      `Name: ${name}\n` +
      `Email: ${email}\n\n` +
      `${message}`;

    const mailtoUrl =
      `mailto:${contactEmail}` +
      `?subject=${encodeURIComponent(subject)}` +
      `&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoUrl;
  }

  return (
    <section className="contact-section" id="contact">
      <div className="section-heading">
        <p>GET IN TOUCH</p>
        <h2>
          Contact <span>Me</span>
        </h2>
        <div className="heading-line"></div>
      </div>

      <div className="contact-container">
        <div className="contact-info">
          <p className="contact-eyebrow">
            HAVE SOMETHING IN MIND?
          </p>

          <h3>Let's Connect</h3>

          <p className="contact-intro">
            Have a project, opportunity or just want
            to say hello? I'd love to hear from you.
            Feel free to reach out.
          </p>

          <div className="contact-item">
            <span className="contact-icon">
              <Mail size={21} strokeWidth={1.5} />
            </span>

            <div>
              <h4>Email</h4>
              <a href={`mailto:${contactEmail}`}>
                {contactEmail}
              </a>
            </div>
          </div>

          <div className="contact-item">
            <span className="contact-icon">
              <Phone size={21} strokeWidth={1.5} />
            </span>

            <div>
              <h4>Phone</h4>
              <a href="tel:+919999888800">
                +91 9999888800
              </a>
            </div>
          </div>

          <div className="contact-item">
            <span className="contact-icon">
              <MapPin size={21} strokeWidth={1.5} />
            </span>

            <div>
              <h4>Location</h4>
              <p>India</p>
            </div>
          </div>
        </div>

        <form
          className="contact-form"
          onSubmit={handleSubmit}
        >
          <div className="form-heading">
            <h3>Send a Message</h3>
            <p>
              Fill in the details below to get in touch.
            </p>
          </div>

          <div className="form-row">
            <div className="form-field">
              <label htmlFor="contact-name">
                Your Name
              </label>

              <input
                id="contact-name"
                name="name"
                type="text"
                placeholder="Enter your name"
                autoComplete="name"
                required
              />
            </div>

            <div className="form-field">
              <label htmlFor="contact-email">
                Your Email
              </label>

              <input
                id="contact-email"
                name="email"
                type="email"
                placeholder="Enter your email"
                autoComplete="email"
                required
              />
            </div>
          </div>

          <div className="form-field">
            <label htmlFor="contact-subject">
              Subject
            </label>

            <input
              id="contact-subject"
              name="subject"
              type="text"
              placeholder="What is this about?"
            />
          </div>

          <div className="form-field">
            <label htmlFor="contact-message">
              Your Message
            </label>

            <textarea
              id="contact-message"
              name="message"
              placeholder="Write your message here..."
              rows={5}
              required
            ></textarea>
          </div>

          <button type="submit" className="contact-btn">
            Send Message
            <Send size={17} strokeWidth={1.7} />
          </button>

          <p className="contact-form-note">
            This opens your email application to send
            the message.
            <ArrowUpRight size={14} strokeWidth={1.5} />
          </p>
        </form>
      </div>
    </section>
  );
}

export default Contact;
