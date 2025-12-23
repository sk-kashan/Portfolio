import { useState } from "react";
import emailjs from "@emailjs/browser";

function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const validate = () => {
    const newErrors = {};
    if (!/^[a-zA-Z\s]{2,}$/.test(formData.name)) newErrors.name = "Enter a valid name.";
    if (!/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/.test(formData.email))
      newErrors.email = "Enter a valid email.";
    if (!/^.{10,}$/.test(formData.message)) newErrors.message = "Message must be at least 10 characters.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    emailjs.send(
      "service_4450w7g",    
      "template_tj3x0zk", 
      formData,
      "Qhnl5ulysso7-iNDt"
    )
    .then(() => {
      alert("Message sent! I'll get back to you soon.");
      setFormData({ name: "", email: "", message: "" });
      setErrors({});
    }, (error) => {
      console.error(error);
      alert("Something went wrong. Try again!");
    });
  };

  return (
    <section id="contact" className="contact">
      <h2>Contact</h2>
      <p>Your Message Will be sent to our Gmail, we will reply you soon, make sure to write correct credentials.</p>
      <form className="contact-form" onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required />
        {errors.name && <p className="error">{errors.name}</p>}

        <input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} required />
        {errors.email && <p className="error">{errors.email}</p>}

        <textarea name="message" placeholder="Your Message" value={formData.message} onChange={handleChange} rows="5" required />
        {errors.message && <p className="error">{errors.message}</p>}

        <button type="submit" className="secondary-btn">Send Message</button>
      </form>
    </section>
  );
}

export default Contact;
