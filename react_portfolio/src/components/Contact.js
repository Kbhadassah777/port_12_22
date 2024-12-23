import React from "react";

const Contact = () => (
  <section className="contact">
  <div className="contact-form-container">
    <h2 className="contact-form-title">Get in Touch</h2>
    <form className="contact-form">
      <div className="form-group">
        <label htmlFor="name" className="form-label">Name</label>
        <input type="text" id="name" name="name" className="form-input" placeholder="Your Name" required />
      </div>
      <div className="form-group">
        <label htmlFor="email" className="form-label">Email</label>
        <input type="email" id="email" name="email" className="form-input" placeholder="Your Email" required />
      </div>
      <div className="form-group">
        <label htmlFor="message" className="form-label">Message</label>
        <textarea id="message" name="message" className="form-textarea" placeholder="Your Message" rows="6" required></textarea>
      </div>
      <button type="submit" className="form-submit-button">Send Message</button>
    </form>
  </div>
  </section>
);

export default Contact;
