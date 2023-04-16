import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
const Category = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  return (
    <div className="category " data-aos="fade-up">
      <h1>
        Choose Different <label style={{ color: "#0958e9" }}>Category</label>
      </h1>
      <div class="row-outer">
        <div class="cont2">
          <div class="grid-wrapper1">
            <div class="box" data-aos="fade-up">
              <img src="graphic.jpeg"></img>
              <span>Graphic designer</span>
            </div>
            <div class="box" data-aos="fade-up">
              <img src="animation.jpg"></img>
              <span>Animation</span>
            </div>
            <div class="box" data-aos="fade-up">
              <img src="illusion.jpg"></img>
              <span>Illustration</span>
            </div>
            <div class="box" data-aos="fade-up">
              <img src="Flyers.jpeg"></img>
              <span>Flyers & Vouchers</span>
            </div>
            <div class="box" data-aos="fade-up">
              <img src="logo_designer.jpeg"></img>
              <span>Logo Design</span>
            </div>{" "}
            <div class="box" data-aos="fade-up">
              <img src="social_graphic.jpeg"></img>
              <span>Social graphics</span>
            </div>
            <div class="box" data-aos="fade-up">
              <img src="article_writing.jpeg"></img>
              <span>Article writing</span>
            </div>
            <div class="box" data-aos="fade-up">
              <img src="vedio_editing.jpeg"></img>
              <span>Video Editing</span>
            </div>
          </div>
        </div>
      </div>
      <button className="button" role="button" data-aos="fade-up">
        More Categories
      </button>
    </div>
  );
};

export default Category;
