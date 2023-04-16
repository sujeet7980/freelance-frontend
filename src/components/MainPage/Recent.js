import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
const Recent = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  return (
    <div className="latest-main" data-aos="fade-up">
      <div className="heading">
        <div className="title">
          <h3>The latest freelance works!</h3>
          <h2>
            Recently Posted <b style={{ color: "#0958e9" }}>Work!</b>
          </h2>
        </div>
        <div className="prev-next">
          <span class="material-symbols-outlined">arrow_back</span>
          <span class="material-symbols-outlined">arrow_forward</span>
        </div>
      </div>
      <div className="account">
        <div className="project-box" data-aos="fade-up">
          <div className="logo">
            <img src="logo1.png" alt="Logo 1"></img>
          </div>
          <h6>Logo Design</h6>
          <p>
            Need a professional logo with writing underneath for our Furniture
            company
          </p>
          <div className="rating">
            <span>
              Highest bid <br /> 15,000 INR
            </span>
            <a href="#">Apply now</a>
          </div>
        </div>
        <div className="project-box" data-aos="fade-up">
          <div className="logo">
            <img src="logo2.png" alt="Logo 2"></img>
          </div>
          <h6>Graphic Design</h6>
          <p>
            We need a graphic designer with UI/UX skills for our Jwellery
            company
          </p>
          <div className="rating">
            <span>
              Highest bid <br /> 15,000 INR
            </span>
            <a href="#">Apply now</a>
          </div>
        </div>
        <div className="project-box" data-aos="fade-up">
          <div className="logo">
            <img src="logo3.png" alt="Logo 3"></img>
          </div>
          <h6>Need a SEO</h6>
          <p>
            Need a SEO for our company who will let our company to a higher
            level
          </p>
          <div className="rating">
            <span>
              Highest bid <br /> 15,000 INR
            </span>
            <a href="#">Apply now</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recent;
