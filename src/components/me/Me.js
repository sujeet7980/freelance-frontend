import React from "react";
import Navbar from "../MainPage/Navbar";
import "./me.css";
import { useNavigate } from "react-router-dom";

const Me = () => {
  const navigate = useNavigate();
  const handleEdit = ()=>{
    navigate('/update',{replace:true})
  }
  return (
    <>
      <Navbar />
      <div className="main-container">
        <div className="left">
          <div className="profile-container mb-3">
            <span>
              <img src="./profile.jpg"></img>
            </span>
            {/* <img src="./profile.jpg"></img> */}
            <div className="Profile-details">
              <h3>Meself</h3>
              <div className="flex-properties">
                <span class="material-symbols-outlined">distance</span>
                <span>City-State</span>
              </div>
            </div>
            <button
              type="button"
              className=" edit-details btn btn-outline-primary"
              onClick={handleEdit}
            >
              Edit
            </button>
            {/* <button className="edit-details">Edit</button> */}
          </div>
          <span>
            <strong>WEB DEVELOPER</strong>
          </span>
          <p>
            I am a web developer. I have a 2 years of experience . I works on
            many projects using the technology react, nodejs, javascript, etc.
          </p>
          <span>
            <strong>Experience</strong>
          </span>
          <div className="education d-flex flex-column">
            <span>Role</span>
            <span>company</span>
            <span>about</span>
          </div>

          <span>
            <strong>Projects</strong>
          </span>
          <div className="education d-flex flex-column">
            <span>Name</span>
            <span>technology</span>
            <span>duration</span>
          </div>

          <div className="detail-container">
            <span>
              <h4>$30.00</h4>
              <p>Hourly rate</p>
            </span>
            <span>
              <h4>$30.00</h4>
              <p>total earned</p>
            </span>
            <span>
              <h4>14</h4>
              <p>Jobs</p>
            </span>
            <span>
              <h4>4.7</h4>
              <p> Rating</p>
            </span>
          </div>
        </div>
        <div className="right">
          <div className="d-flex flex-column">
            <h3>Education</h3>
            <span>school name</span>
            <span>year-year</span>
            <span>score</span>
          </div>
          <div className="d-flex flex-column">
            <h3>Skills</h3>
            <span>Html</span>
            <span>CSS</span>
            <span>Java Script</span>
            <span>React</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Me;
