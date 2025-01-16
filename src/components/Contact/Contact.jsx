import { useState } from 'react';
import styles from './Contact.module.css';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    alert('Message sent successfully!');
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className={styles.contact}>
      <h2 className={styles.mainHeading}>Contact Me</h2>
      <form id="contact-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          required
          value={formData.name}
          onChange={handleChange}
          className={styles.input}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          required
          value={formData.email}
          onChange={handleChange}
          className={styles.input}
        />
        <textarea
          name="message"
          placeholder="Message"
          required
          value={formData.message}
          onChange={handleChange}
          className={styles.textarea}
        ></textarea>
        <button type="submit" className={styles.submitBtn}>
          Send Message
        </button>
      </form>
    </section>
  );
} 