import React from "react";
import "./skills.css";
import HTML from "../../image/html-5.png";
import CSS from "../../image/css-3.png";
import JSX from "../../image/atom (1).png";
import SRS from "../../image/srs.png";

const skills = () => {
  return (
    <div className="Skills">
      <div className="skill-text">
        <h2 className="sk-title">My Skills</h2>
        <h3 className="sk-subtitle">Design & Development</h3>
      </div>
      <div className="skill-row">
        <img className="skill-img" src={HTML} alt="" />
        <h4>HTML</h4>
        <p class="clear">
          This is the first skill I learnt as regards tech knowledge
          development. Well I guess this is the foundation to every other
          programming language.
        </p>
      </div>
      <div className="skill-row">
        <img className="skill-img1" src={CSS} alt="" />
        <h4>CSS</h4>
        <p>
          Used for styling, this is the second skill I came across using to
          style sites and add design to make its interface user friendly.
        </p>
      </div>
      <div className="skill-row">
        <img className="skill-img2" src={JSX} alt="" />
        <h4>JavaScript | React</h4>
        <p>
          Used to add functionality to webpages, I learnt and still learning
          Javascript especially the Reactjs. I decided React because it is
          declarative, efficient and flexible. It allows for creation of large
          web applications that can change data without reloading page.
        </p>
      </div>
      <div className="skill-row">
        <img className="skill-img1" src={SRS} alt="" />
        <h4>Software Requirement Specification</h4>
        <p class="clear">
          In SRS, I learnt proper documentation where software to be developed
          are described along side details of its expected performance.
        </p>
      </div>
      <hr />
    </div>
  );
};

export default skills;
