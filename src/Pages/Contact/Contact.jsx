import React from "react";
import "./Contact.scss";

const Contact = () => {
  const onSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="contact-form-container">
      <div className="contact-form">
        <h1>Let’s get you started</h1>
        <form onSubmit={onSubmit}>
          <label>
            Full Name
            <input type="text" placeholder="Name" />
          </label>
          <label>
            Email address
            <input type="text" placeholder="Email" />
          </label>
          <label>
            Phone number
            <input type="number" placeholder="+91" />
          </label>
          <label>
            College Name
            <input type="text" placeholder="College Name" />
          </label>
          <button>Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
