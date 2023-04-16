import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
const About = () => {

  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  return (
    <div className="about-page">
    <div className="girl" data-aos="fade-right">
      <img src="2nd.png" alt="girl" />
      <span className="freelancer">
        {" "}
        <b style={{ fontSize: 36, color: "#0958e9" }}>500+</b> <br />{" "}
        freelancers
      </span>
      <span className="work-posted">
        {" "}
        <b style={{ fontSize: 36, color: "#0958e9" }}>300+</b>
        <br /> freelance work Posted
      </span>
    </div>
    <div className="about-text" data-aos="fade-left">
      <h1>
        Find The Best <br />{" "}
        <small style={{ color: "#0958e9" }}>Freelancers</small> Here{" "}
      </h1>
      <ul>
        <li>-World's largest freelance marketplace</li>
        <li>-Any job you can possibly think of</li>
        <li>-Save up to 90% & get quotes for free</li>
        <li>-Pay only when you're 100% happy</li>
      </ul>
    </div>
  </div>
  );
};

export default About;
