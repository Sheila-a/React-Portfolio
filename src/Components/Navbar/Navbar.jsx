import React from "react";
import "./Navbar.css";

const currentDate = new Date();
const currentTime = currentDate.getHours();

const customStyle = {
  color: "white",
  fontStyle: "italic",
};

let greeting;

if (currentTime < 12) {
  greeting = "Good Morning !";
} else if ((currentTime > 12 && currentTime < 18) || currentTime === 12) {
  greeting = "Good Afternoon !";
} else {
  greeting = "Good Evening !";
}

const Navbar = () => {
  return (
    <div className="Navbar">
      <h1 className="heading" style={customStyle}>
        {greeting}
      </h1>
    </div>
  );
};

export default Navbar;
