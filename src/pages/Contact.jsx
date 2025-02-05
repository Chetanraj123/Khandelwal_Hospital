import React, { useState } from "react";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import "./Contact.css";

const Contact = () => {
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission

    const form = e.target;
    const formData = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/xzzdgllp", {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });

      if (response.ok) {
        setStatus("Thanks for your message! We'll get back to you soon.");
        form.reset(); // Reset form fields
      } else {
        setStatus("Oops! Something went wrong. Please try again.");
      }
    } catch (error) {
      setStatus("Error submitting the form. Please check your internet connection.");
    }
  };

  return (
    <div className="contact-section">
      <div className="container">
        <h1 className="section-title">Contact Us</h1>

        <div className="grid-layout">
          {/* Contact Information */}
          <div className="contact-info-card">
            <h2 className="card-title">Get in Touch</h2>

            <div className="contact-info">
              <div className="info-item">
                <MapPin className="icon" />
                <div className="info-text">
                  <h3 className="info-subtitle">Address</h3>
                  <p className="info-description">
                    84, Karani Vihar-B, Road No. 17
                    <br />
                    Vishwakarma Industrial Area
                    <br />
                    Jaipur, Rajasthan 302013
                  </p>
                </div>
              </div>

              <div className="info-item">
                <Phone className="icon" />
                <div className="info-text">
                  <h3 className="info-subtitle">Phone</h3>
                  <p className="info-description">+91 9314660352</p>
                </div>
              </div>

              <div className="info-item">
                <Mail className="icon" />
                <div className="info-text">
                  <h3 className="info-subtitle">Email</h3>
                  <p className="info-description">kips.jaip@gmail.com</p>
                </div>
              </div>

              <div className="info-item">
                <Clock className="icon" />
                <div className="info-text">
                  <h3 className="info-subtitle">Working Hours</h3>
                  <p className="info-description">
                    24/7 Emergency Services
                    <br />
                    Regular Hours: Mon-Fri: 9:00 AM - 6:00 PM
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="contact-form-card">
            <h2 className="card-title">Send us a Message</h2>
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label className="form-label">Name</label>
                <input type="text" name="name" className="form-input" placeholder="Your Name" required />
              </div>

              <div className="form-group">
                <label className="form-label">Email</label>
                <input type="email" name="email" className="form-input" placeholder="Your Email" required />
              </div>

              <div className="form-group">
                <label className="form-label">Subject</label>
                <input type="text" name="subject" className="form-input" placeholder="Subject" required />
              </div>

              <div className="form-group">
                <label className="form-label">Message</label>
                <textarea name="message" className="form-input form-textarea" placeholder="Your Message" required></textarea>
              </div>

              <button type="submit" className="submit-btn">Send Message</button>
            </form>

            {status && <p className="form-status">{status}</p>}
          </div>
        </div>
      </div>

      <iframe
        className="map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3554.8825993740998!2d75.7946575!3d27.0022633!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db20f82af02c7%3A0xeed187ab661c5cc9!2sKhandelwal%20Hospital!5e0!3m2!1sen!2sin!4v1738691717971!5m2!1sen!2sin"
      ></iframe>
    </div>
  );
};

export default Contact;
