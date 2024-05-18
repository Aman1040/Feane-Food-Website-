import React from "react";
import "./Contact.css";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CallIcon from "@mui/icons-material/Call";
import EmailIcon from "@mui/icons-material/Email";
const Contact = () => {
  return (
    <div>
      <div className="contact-container">
        <div className="contact-first">
          <h2 className="contact-font">Contact Us</h2>
          <span>
            <LocationOnIcon /> Location
          </span>
          <span>
            <CallIcon /> call =91985694335
          </span>
          <span>
            <EmailIcon /> demo@gmail.com
          </span>
        </div>
        <div className="contact-second">
          <h2 className="contact-font">Feane</h2>
          <span style={{ fontSize: "x-small" }}>
            Food is mainly composed of water, lipids, proteins, and
            carbohydrates. Minerals (e.g., salts) and organic substances (e.g.,
            vitamins) can also be found in food. Plants, algae, and some
            microorganisms use photosynthesis to make some of their own
            nutrients.
          </span>
        </div>
        <div className="contact-third">
          <h2 className="contact-font">Opening Hours</h2>
          <span>Everyday</span>
          <span>10:00am-10:00pm</span>
        </div>
      </div>
      <div className="contact-copyright">
        © 2024 - IPLF. All rights reserved.
      </div>
    </div>
  );
};

export default Contact;
