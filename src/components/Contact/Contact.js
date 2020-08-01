import React from "react"
import "./Contact.scss"

const Contact = () => (
  <div className="contact-container">
    <div className="contact-inner-container">
      <div>
        <input type="text" className="textInput" />
        <input type="text" className="textInput" />
      </div>
      <input type="text" className="textInput" />
      <textarea className="textArea" />
    </div>
  </div>
)

export default Contact
