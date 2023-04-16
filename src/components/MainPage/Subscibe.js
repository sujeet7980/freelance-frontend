import React from "react";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
const Subscibe = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  return (
    <div className="subscibe" data-aos="fade-up">
      <h1>Newsletter Subscription</h1>
      <span>
        Subscribe to our newsletter to get new freelance work and projects{" "}
      </span>
      <input placeholder="Enter your email address"></input>
      <button className="button" role="button">
        Subscribe
      </button>
    </div>
  );
};

export default Subscibe;
