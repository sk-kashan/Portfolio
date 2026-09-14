import { useState } from "react";
import emailjs from "@emailjs/browser";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("");
  const [isSending, setIsSending] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  };

  const validate = () => {
    const newErrors = {};

    if (!/^[a-zA-Z\s]{2,}$/.test(formData.name.trim())) {
      newErrors.name = "Enter a valid name.";
    }

    if (
      !/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/.test(
        formData.email.trim()
      )
    ) {
      newErrors.email = "Enter a valid email.";
    }

    if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters.";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setStatus("");

    if (!validate()) {
      return;
    }

    const serviceID = process.env.REACT_APP_EMAILJS_SERVICE_ID;
    const templateID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;

    if (!serviceID || !templateID || !publicKey) {
      setStatus(
        "Email service is not configured. Please check your EmailJS settings."
      );
      return;
    }

    setIsSending(true);
    setStatus("Sending your message...");

    const templateParams = {
      name: formData.name.trim(),
      email: formData.email.trim(),
      message: formData.message.trim(),
      from_name: formData.name.trim(),
      reply_to: formData.email.trim(),
    };

    try {
      await emailjs.send(
        serviceID,
        templateID,
        templateParams,
        publicKey
      );

      setStatus("Message sent! I'll get back to you soon.");

      setFormData({
        name: "",
        email: "",
        message: "",
      });

      setErrors({});
    } catch (error) {
      setStatus(
        "Something went wrong while sending the message. Please try again later."
      );
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section id="contact" className="contact">
      <h2>Contact</h2>

      <p>
        Your message will be sent to our email. Make sure to write correct
        credentials.
      </p>

      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="contact-form-heading">
          <span className="form-kicker">START A CONVERSATION</span>

          <span className="form-status">
            <i /> ONLINE
          </span>
        </div>

        <label htmlFor="contact-name">Your name</label>

        <input
          id="contact-name"
          type="text"
          name="name"
          placeholder="e.g. Alex Morgan"
          value={formData.name}
          onChange={handleChange}
          autoComplete="name"
          required
        />

        {errors.name && <p className="error">{errors.name}</p>}

        <label htmlFor="contact-email">Email address</label>

        <input
          id="contact-email"
          type="email"
          name="email"
          placeholder="you@example.com"
          value={formData.email}
          onChange={handleChange}
          autoComplete="email"
          required
        />

        {errors.email && <p className="error">{errors.email}</p>}

        <label htmlFor="contact-message">Your message</label>

        <textarea
          id="contact-message"
          name="message"
          placeholder="Tell me a little about your project..."
          value={formData.message}
          onChange={handleChange}
          rows="5"
          required
        />

        {errors.message && <p className="error">{errors.message}</p>}

        <button
          type="submit"
          className="secondary-btn"
          disabled={isSending}
        >
          {isSending ? "Sending..." : "Send Message"}
        </button>

        {status && <p className="status">{status}</p>}
      </form>
    </section>
  );
}

export default Contact;