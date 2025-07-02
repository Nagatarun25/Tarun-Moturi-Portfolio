// Contact.jsx
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "", phone: "" });
  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    setFormData((p) => ({ ...p, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
    // TODO: Replace with your email sending logic or EmailJS integration
    try {
      await new Promise((r) => setTimeout(r, 1500));
      setStatus("Message sent! I will get back to you shortly.");
      setFormData({ name: "", email: "", message: "", phone: "" });
    } catch {
      setStatus("Failed to send message. Please try again.");
    }
  };

  return (
    <section id="contact">
      <h2>Contact Me</h2>
      <form onSubmit={handleSubmit} noValidate>
        <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} required />
        <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
        <input type="tel" name="phone" placeholder="Phone (optional)" value={formData.phone} onChange={handleChange} />
        <textarea name="message" placeholder="Message" value={formData.message} onChange={handleChange} required rows="5" />
        <button type="submit">Send Message</button>
        {status && <p className="status-message">{status}</p>}
      </form>
      <div className="hologram-bg"></div>
    </section>
  );
}
