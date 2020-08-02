import React from "react"
import "./Contact.scss"

const Contact = () => (
  <div className="contact-container">
    <div className="contact-inner-container">
      <div>
        <input type="text" placeholder="Email" className="textInput" />
        <input type="text" placeholder="Subject" className="textInput" />
      </div>
      <input
        type="text"
        placeholder="Full name"
        className="textInput full-name"
      />
      <textarea placeholder="How may I help?" className="textArea" />
    </div>
  </div>
)

export default Contact
