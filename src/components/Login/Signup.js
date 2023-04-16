import React, { useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import axios from "axios";
import { Link ,useNavigate} from "react-router-dom";
import "./signup.css";
const SignUp = () =>{
  const navigate = useNavigate();
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    passwordConfirm: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(user);
    axios.post("http://localhost:8000/api/v1/users/signup", user).then((response) => {
      console.log(response.status, response.data);
      navigate('/login', { replace: true });
    });
  };
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  return (
    <div className="signup " data-aos="fade-down">
      <div className="signup-form">
        <h2>Join us</h2>
        <h5>Create your personal account</h5>
        <form onSubmit={handleSubmit} action="/home">
          <p>
            <label>Username</label>
            <br />
            <input  type="text" name="name" value={user.name} onChange={handleInputChange} autoComplete="off" required />
          </p>
          <p>
            <label>Email address</label>
            <br />
            <input  type="email" name="email" value={user.email} onChange={handleInputChange} autoComplete="off"  required />
          </p>
          <p>
            <label>Password</label>
            <br />
            <input type="password" name="password" value={user.password} onChange={handleInputChange}  autoComplete="off"  required />
          </p>
          <p>
            <label>Confirm Password</label>
            <br />
            <input type="password" name="passwordConfirm" value={user.passwordConfirm} onChange={handleInputChange}  autoComplete="off"  required />
          </p>
          <p>
            <input type="checkbox" name="checkbox" id="checkbox" required />{" "}
            <span>
              I agree all statements in{" "}
              <a
                href="https://google.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                terms of service
              </a>
            </span>
            .
          </p>
          <p>
            <button id="sub_btn" type="submit">
           Register 
            </button>
          </p>
        </form>
        <footer>
          <p>
            <Link to="/">Back to Homepage</Link>.
          </p>
        </footer>
      </div>
    </div>
  );
}

export default SignUp;
