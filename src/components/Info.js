import React from "react";
import vector from "../icons/Vector.png";
import icon from "../icons/Icon.png";

export default function Info() {
  return (
    <div className="info">
      <div className="info-img"></div>
      <h1>Maanvendra Singh</h1>
      <h4>Frontend Developer</h4>
      <h5>maansingh.website</h5>
      <div className="info--buttons">
        <a
          href="https://mailto:maanstark@gmail.com
          "
          target="_blank"
          rel="noreferrer"
        >
          <button className="button-email">
            <span>
              <img src={icon} alt="mail-logo" />
            </span>{" "}
            Email
          </button>
        </a>
        <a href="https://www.linkedin.com/in/maansingh/" target="_blank" rel="noreferrer">
          <button className="button-linkedin">
            <span>
              <img src={vector} alt="linkedin-logo" />
            </span>{" "}
            LinkedIn
          </button>
        </a>
      </div>
    </div>
  );
}
