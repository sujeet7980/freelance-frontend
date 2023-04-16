import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
const Account = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  return (
    <div className="account">
      <div className="p" data-aos="fade-up">
        <span class="material-symbols-outlined">lock_open</span>
        <h6>Create account</h6>
        <p>First you have to create a account here</p>
      </div>
      <div className="p" data-aos="fade-up">
        <span class="material-symbols-outlined">quick_reference_all</span>
        <h6> Search work </h6>
        <p>Search the best freelance work here</p>
      </div>
      <div className="p" data-aos="fade-up">
        <span class="material-symbols-outlined">collections_bookmark</span>
        <h6>Save and apply</h6>
        <p>Apply or save and start your work</p>
      </div>
    </div>
  );
};

export default Account;
