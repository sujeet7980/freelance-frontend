import React from "react";
import "./Main.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
const Main = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  return (
    <div className="Main-container" data-aos="fade-up">
      <div className="left" data-aos="fade-right">
        <h1>
          Are you looking for <br /> freelancer ?
        </h1>
        <span>
          Forget the old rules. You can have the best <br /> people. Right now.
          Right here.
        </span>
        <div className="con1">
          <button className="button" role="button" data-aos="zoom-in">
            Hire a Freelancer
          </button>
          <div class="search" data-aos="zoom-in">
            <input
              type="text"
              class="searchTerm"
              placeholder="Search freelance work"
            />
            <button type="submit" class="searchButton">
              <span class="material-symbols-outlined">search</span>
            </button>
          </div>
        </div>
      </div>
      <div className="right" data-aos="fade-left">
        <img src="1st.png"></img>
      </div>
    </div>
  );
};

export default Main;
