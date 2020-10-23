import React from "react";

import "./contact.css";

const Contact = () => {
  return (
    <div id="contact" className="contact-container">
      <h2>Contact</h2>
      <form action="https://formspree.io/f/mzbkrjya" method="POST">
        <input
          className="name-input"
          type="text"
          name="name"
          placeholder="Name"
        ></input>
        <input
          className="email-input"
          type="text"
          name="_replyto"
          placeholder="Email"
        ></input>
        <textarea
          className="contact-textarea"
          name="message"
          placeholder="Your message"
        ></textarea>

        <button className="contact-submit" type="submit">
          Send
        </button>
      </form>
    </div>
  );
};

export default Contact;
