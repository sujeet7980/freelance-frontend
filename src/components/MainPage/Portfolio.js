import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
const Portfolio = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  return (
    <div className="Portfolio" data-aos="fade-up">
    <span>Logos, websites, book covers & more!</span>
    <h1>
      Checkout The Best <small style={{ color: "#0958e9" }}>Portfolios</small>{" "}
      Here
    </h1>
    <div className="profile">
      <div className="profile-picture" data-aos="fade-left">
        <img src="profile.jpg" alt="profile 1"></img>
        <div className="data">
          <div className="name">
            <span>Suraj Sharma</span>
            <p>UI/UX Designer</p>
          </div>
          <span class="material-symbols-outlined">arrow_forward</span>
        </div>
      </div>
      <div className="profile-picture" data-aos="fade-right">
        <img src="profile.jpg" alt="profile 2"></img>
        <div className="data">
          <div className="name">
            <span>Suraj Sharma</span>
            <p>UI/UX Designer</p>
          </div>
          <span class="material-symbols-outlined">arrow_forward</span>
        </div>
      </div>
      <div className="profile-picture" data-aos="fade-left">
        <img src="profile.jpg" alt="profile 3"></img>
        <div className="data">
          <div className="name">
            <span>Suraj Sharma</span>
            <p>UI/UX Designer</p>
          </div>
          <span class="material-symbols-outlined">arrow_forward</span>
        </div>
      </div>

      <div className="profile-picture" data-aos="fade-right">
        <img src="profile.jpg" alt="profile 4"></img>
        <div className="data">
          <div className="name">
            <span>Suraj Sharma</span>
            <p>UI/UX Designer</p>
          </div>
          <span class="material-symbols-outlined">arrow_forward</span>
        </div>
      </div>
    </div>
  </div>
  );
};

export default Portfolio;
