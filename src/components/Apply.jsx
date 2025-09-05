import emailjs from '@emailjs/browser';
import { useRef, useState } from 'react';
import './Apply.css';

function Apply() {
  const formRef = useRef();
  const [submitted, setSubmitted] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_9b02m5r',         // ✅ Replace with your actual EmailJS service ID
        'template_ukwicdn',        // ✅ Replace with your actual template ID
        formRef.current,
        { publicKey: 'kNvczHl2B9ri5V2k-' }  // ✅ Replace with your actual public key
      )
      .then(
        () => {
          console.log('SUCCESS!');
          setSubmitted(true);
          formRef.current.reset();
        },
        (error) => {
          console.log('FAILED...', error.text);
        }
      );
  };

  return (
    <div className="apply-page">
      <section className="apply-hero">
        <h1>Apply to Mount Summer Convent School</h1>
        <p className="hero-subtitle">Join our vibrant and inclusive learning community.</p>
      </section>

      <section className="apply-form-section">
        <div className="form-container">
          {submitted && <p className="success-message">🎉 Thank you! Your application has been submitted.</p>}

          <form ref={formRef} onSubmit={sendEmail} className="apply-form">
            <label htmlFor="user_name">Full Name</label>
            <input type="text" id="user_name" name="user_name" required />

            <label htmlFor="user_email">Email Address</label>
            <input type="email" id="user_email" name="user_email" required />

            <label htmlFor="user_contact">Contact Number</label>
            <input type="tel" id="user_contact" name="user_contact" required />

            <label htmlFor="message">Your Message</label>
            <textarea id="message" name="message" rows="4" required />

            <button type="submit" className="cta-button">Submit Application</button>
          </form>
        </div>
      </section>
    </div>
  );
}

export default Apply;
