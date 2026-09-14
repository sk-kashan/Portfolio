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

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear error for the field while typing
    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  };

  // Validate form
  const validate = () => {
    const newErrors = {};

    // Name
    if (!/^[a-zA-Z\s]{2,}$/.test(formData.name.trim())) {
      newErrors.name = "Enter a valid name.";
    }

    // Email
    if (
      !/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/.test(
        formData.email.trim()
      )
    ) {
      newErrors.email = "Enter a valid email.";
    }

    // Message
    if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters.";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  // Submit form
  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log("1. FORM SUBMITTED");

    setStatus("");

    // Validate
    if (!validate()) {
      console.log("2. VALIDATION FAILED");
      return;
    }

    console.log("2. VALIDATION PASSED");
    console.log("3. FORM DATA:", formData);

    // EmailJS credentials
    // Create React App uses process.env.REACT_APP_...
    const serviceID = process.env.REACT_APP_EMAILJS_SERVICE_ID;
    const templateID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;

    console.log("4. SERVICE ID:", serviceID);
    console.log("5. TEMPLATE ID:", templateID);
    console.log("6. PUBLIC KEY EXISTS:", !!publicKey);

    // Check configuration
    if (!serviceID || !templateID || !publicKey) {
      console.error("EmailJS configuration is missing.");

      setStatus(
        "Email service is not configured. Please check your EmailJS settings."
      );

      return;
    }

    setIsSending(true);
    setStatus("Sending your message...");

    // Data sent to EmailJS
    const templateParams = {
      name: formData.name.trim(),
      email: formData.email.trim(),
      message: formData.message.trim(),

      // These must match the variables in your EmailJS template
      from_name: formData.name.trim(),
      reply_to: formData.email.trim(),
    };

    console.log("7. SENDING TO EMAILJS:", templateParams);

    try {
      const response = await emailjs.send(
        serviceID,
        templateID,
        templateParams,
        publicKey
      );

      console.log("8. EMAILJS RESPONSE:", response);

      if (response.status === 200) {
        setStatus("Message sent! I'll get back to you soon.");

        // Clear form after successful email
        setFormData({
          name: "",
          email: "",
          message: "",
        });

        setErrors({});
      } else {
        setStatus("Message could not be sent. Please try again.");
      }
    } catch (error) {
      console.error("EMAILJS ERROR:", error);

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

        {/* Name */}
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

        {/* Email */}
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

        {/* Message */}
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

        {/* Submit button */}
        <button
          type="submit"
          className="secondary-btn"
          disabled={isSending}
        >
          {isSending ? "Sending..." : "Send Message"}
        </button>

        {/* Status message */}
        {status && <p className="status">{status}</p>}
      </form>
    </section>
  );
}

export default Contact;