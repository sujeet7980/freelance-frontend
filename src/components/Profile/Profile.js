 import "./Profile.css";
import axios from "axios";
import UserForm from "./UserForm";
import { useState, createContext } from "react";
// import { saveAs } from "file-saver";
import { useNavigate } from "react-router-dom";
import ProgressBar from "./ProgressBar";
export const AppContext = createContext();


const Profile = () => {
  const navigate = useNavigate();
    const [details, setDetails] = useState({
        step: 1,
        name: "sujeet",
        email: "20@gmail.com",
        headline: "hello sir",
        status: 0,
      });
      const progress = document.getElementById("progress");
      const circles = document.querySelectorAll(".circle");
      const update = (currentActive) => {
        console.log(currentActive);
        circles.forEach((circle, index) => {
          if (index < currentActive) circle.classList.add("active");
          else circle.classList.remove("active");
        });
        const actives = document.querySelectorAll(".active");
        progress.style.width =
          ((actives.length - 1) / (circles.length - 1)) * 100 + "%";
      };
      const prevStep = () => {
        setDetails({ ...details, step: details.step - 1 });
        update(details.step - 1);
      };
      const formSubmit = (e) => {
        e.preventDefault();
        setDetails({ ...details, step: details.step + 1 });
        if (details.step === 5) handleSubmit();
        update(details.step + 1);
      };
      const handleChange = (e) => {
        const { name, value } = e.target;
        setDetails((prevState) => ({
          ...prevState,
          [name]: value,
        }));
      };
      const handleSubmit = () => {
        setDetails((prevState) => ({
          ...prevState,
          step: prevState.step + 1,
        }));
        console.log(details);
        console.log(localStorage.getItem('token'));
        axios
          .post("http://localhost:8000/api/v1/freelancer/", details,{headers:{Authorization:localStorage.getItem('token')}})
          .then((res) => console.log(res.data))
        navigate('/me',{replace: true});
      };
  return (
    <div className="w-100">
    <div>
      <div className="col-lg-8 mx-auto text-center mt-5">
        <h1>
          <b>Let's Build your Profile!</b>
        </h1>
        <p className="lead">
          Please provide accurate and clear description wherever necessary.
        </p>
        <hr />
      </div>
      <ProgressBar />
      <AppContext.Provider
        value={{
          details,
          setDetails,
          handleChange,
          formSubmit,
          handleSubmit,
          prevStep,
        }}
      >
        <UserForm />
      </AppContext.Provider>
    </div>
  </div>
  )
}

export default Profile