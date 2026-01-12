import React from "react";

import { images } from "../../constants";
import { AppWrap, MotionWrap } from "../../wrapper";
import "./Footer.scss";

const Footer = () => {
  return (
    <>
      <h2 className="head-text">
        Take a coffee <span>&</span> chat with me
      </h2>
      <div className="app__footer-cards">
        <a
          href="mailto:pulkit161001@gmail.com"
          className="p-text"
          target="_blank"
          rel="noreferrer"
        >
          <div className="app__footer-card">
            <img src={images.email} alt="email" />
            pulkit161001@gmail.com
          </div>
        </a>
        <a
          href="tel:+91-9992876738"
          className="p-text"
          target="_blank"
          rel="noreferrer"
        >
          <div className="app__footer-card">
            <img src={images.mobile} alt="phone" />
            +91 99928-76738
          </div>
        </a>
        <a
          href="https://api.whatsapp.com/send/?phone=919896076738&text=Hello"
          className="p-text"
          target="_blank"
          rel="noreferrer"
        >
          <div className="app__footer-card">
            <img src={images.whatsapp} alt="phone" />
            +91 98960-76738
          </div>
        </a>
      </div>
      {/* {!isFormSubmitted ? (
        <div className="app__footer-form app__flex">
          <div className="app__flex">
            <input
              className="p-text"
              type="text"
              placeholder="Full Name"
              name="username"
              value={username}
              onChange={handleChangeInput}
            />
          </div>
          <div className="app__flex">
            <input
              className="p-text"
              type="email"
              placeholder="Your Email"
              name="email"
              value={email}
              onChange={handleChangeInput}
            />
          </div>
          <div>
            <textarea
              className="p-text"
              placeholder="Your Message"
              value={message}
              name="message"
              onChange={handleChangeInput}
            />
          </div>
          <button type="button" className="p-text" onClick={handleSubmit}>
            {!loading ? "Send Message" : "Sending..."}
          </button>
        </div>
      ) : (
        <div>
          <h3 className="head-text">
            <span>🙌 Thank you</span> for getting in touch!
          </h3>
        </div>
      )} */}
    </>
  );
};

export default AppWrap(
  MotionWrap(Footer, "app__footer"),
  "contact",
  "app__whitebg"
);
