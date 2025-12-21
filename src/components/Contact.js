import React, { useState } from "react";
import { validateEmail } from "../utils/helpers";
import { Container, Col } from "react-bootstrap";
import emailjs from "@emailjs/browser";

function Contact() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  // EmailJS configuration - Replace these with your EmailJS credentials
  // Get them from https://www.emailjs.com/
  const EMAILJS_SERVICE_ID = "service_h95y8bb"; // Replace with your EmailJS Service ID
  const EMAILJS_TEMPLATE_ID = "template_p0in30m"; // Replace with your EmailJS Template ID
  const EMAILJS_PUBLIC_KEY = "vWPnUEmUl9uD3s1U5"; // Replace with your EmailJS Public Key

  const handleInputChange = (e) => {
    const value = e.target.value;
    setErrorMessage("");
    setSuccessMessage("");

    if (e.target.name === "email") {
      setEmail(value);
    } else if (e.target.name === "name") {
      setName(value);
    } else if (e.target.name === "message") {
      setMessage(value);
    }
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage("");
    setSuccessMessage("");

    // Validation
    if (!name.trim()) {
      setErrorMessage("Please enter your name");
      return;
    }

    if (!email.trim()) {
      setErrorMessage("Please enter your email");
      return;
    }

    if (!validateEmail(email)) {
      setErrorMessage("Please enter a valid email address");
      return;
    }

    if (!message.trim()) {
      setErrorMessage("Please enter a message");
      return;
    }

    setIsSubmitting(true);

    // Prepare template parameters for EmailJS
    const templateParams = {
      from_name: name,
      from_email: email,
      message: message,
      to_name: "Jide Ogunbanjo",
      reply_to: email,
    };

    try {
      // Check if EmailJS credentials are configured
      if (
        EMAILJS_SERVICE_ID === "YOUR_SERVICE_ID" ||
        EMAILJS_TEMPLATE_ID === "YOUR_TEMPLATE_ID" ||
        EMAILJS_PUBLIC_KEY === "YOUR_PUBLIC_KEY"
      ) {
        setErrorMessage(
          "Email form not yet configured. Please email me directly at jideogun93@gmail.com or check EMAILJS_SETUP.md for setup instructions."
        );
        setIsSubmitting(false);
        return;
      }

      // Send email using EmailJS
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        EMAILJS_PUBLIC_KEY
      );

      // Success
      setSuccessMessage(
        `Thanks for reaching out, ${name}! I'll get back to you soon.`
      );
      setName("");
      setEmail("");
      setMessage("");
    } catch (error) {
      console.error("EmailJS Error:", error);

      // Provide more specific error messages
      if (error.text) {
        setErrorMessage(
          `Failed to send: ${error.text}. Please email me directly at jideogun93@gmail.com`
        );
      } else if (error.message && error.message.includes("credentials")) {
        setErrorMessage(
          "Email service not configured. Please email me directly at jideogun93@gmail.com"
        );
      } else {
        setErrorMessage(
          "Failed to send message. Please try again or email me directly at jideogun93@gmail.com"
        );
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const renderErrorMessage = () => {
    if (errorMessage) {
      return (
        <div
          style={{
            color: "#e8736b",
            marginTop: "1rem",
            padding: "0.75rem",
            backgroundColor: "#ffe5e5",
            borderRadius: "8px",
            fontWeight: "500",
          }}
        >
          {errorMessage}
        </div>
      );
    }
    return null;
  };

  const renderSuccessMessage = () => {
    if (successMessage) {
      return (
        <div
          style={{
            color: "#2d5016",
            marginTop: "1rem",
            padding: "0.75rem",
            backgroundColor: "#d4edda",
            borderRadius: "8px",
            fontWeight: "500",
          }}
        >
          {successMessage}
        </div>
      );
    }
    return null;
  };

  return (
    <Container className="form-wrapper">
      <div>
        Please reach out to{" "}
        <a className="emailText" href="mailto:jideogun93@gmail.com">
          Jideogun93@gmail.com
        </a>{" "}
        ! If you would like to connect and collaborate!<br></br>
        Click the icons in the footer for my Linked, Github and codesandbox
        profiles
      </div>

      <Col className="formClass">
        <form className="form" onSubmit={handleFormSubmit}>
          <input
            type="text"
            name="name"
            value={name}
            placeholder="Your Name"
            onChange={handleInputChange}
            required
          />
          <br></br>
          <input
            type="email"
            value={email}
            placeholder="Your Email"
            name="email"
            onChange={handleInputChange}
            required
          />
          <br></br>
          <textarea
            name="message"
            value={message}
            placeholder="Your Message (Feel free to share details about your project, collaboration ideas, or just say hello!)"
            onChange={handleInputChange}
            required
            rows="8"
          ></textarea>
          <br></br>
          <button
            type="submit"
            disabled={isSubmitting}
            style={{
              opacity: isSubmitting ? 0.7 : 1,
              cursor: isSubmitting ? "not-allowed" : "pointer",
            }}
          >
            {isSubmitting ? "Sending..." : "Submit"}
          </button>
        </form>
      </Col>

      {renderSuccessMessage()}
      {renderErrorMessage()}
    </Container>
  );
}

export default Contact;
