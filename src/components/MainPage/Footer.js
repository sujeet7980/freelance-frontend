import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
const Footer = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  return (
    <>
       <div className="footer" data-aos="fade-up">
        <div className="col">
          <h1>Freelancable</h1>
          <p>
            Powerful Freelance Marketplace <br /> System with ability to change
            the <br /> Users (Freelancers & Clients)
          </p>
        </div>
        <div className="col1" data-aos="fade-up" data-aos-delay="200">
          <h1>For Clients</h1>
          <p>Find Freelancers</p>
          <p>Post Project</p>
          <p>Refund Policy</p>
          <p>Privacy Policy</p>
        </div>
        <div className="col1" data-aos="fade-up" data-aos-delay="400">
          <h1>For Freelancers</h1>
          <span>Find Work</span>
          <span>Create Account</span>
        </div>
        <div className="col1" data-aos="fade-up" data-aos-delay="600">
          <h1>Call Us</h1>
          <div className="flex-right">
            <span class="material-symbols-outlined">pin_drop</span>
            <span>Jabalpur</span>
          </div>
          <div className="flex-right">
            <span class="material-symbols-outlined">call</span>
            <span>+91 1234567890</span>
          </div>
          <div className="flex-right">
            <span class="material-symbols-outlined">mail</span>{" "}
            <span>freelance@gmail.com</span>
          </div>
        </div>
      </div>
      <div className="reserved" data-aos="fade-up" data-aos-delay="800">
        <span>2023 freelance. All right reserved</span>
      </div>
    </>
  );
};

export default Footer;
