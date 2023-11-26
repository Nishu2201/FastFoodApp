import React from "react";
// import {BsFillSendFill} from "react-icons/bs";
import "./about.scss";

function ContactForm() {
  return (
    <div className="contact-form-box">
      <form>
        <div className="form-group">
          <input type="text" name="name" required placeholder="Name" />
        </div>
        <div className="form-group">
          <input type="email" name="email" required placeholder="Email" />
        </div>
        <div className="form-group">
          <textarea name="message" required placeholder="Message"></textarea>
        </div>
        <button type="submit"><b>Send 
            {/* <BsFillSendFill/> */}
            </b>
        <span></span></button>
      </form>
    </div>
  );
}
export default ContactForm;