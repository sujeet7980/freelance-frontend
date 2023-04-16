import "./App.css";
import SignUp from "./components/Login/Signup";
import Login from "./components/Login/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landingpage from "./components/MainPage/Landingpage";
import { Notification } from "./components/Notification";
import Profile from "./components/Profile/Profile";
import Me from "./components/me/Me";
import Update from "./components/me/Update";
import SearchFreelancer from "./components/Search/SearchFreelancer";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp/>} />
          <Route path="/" element={<Landingpage />} />
          <Route path="/profile" element={<Profile/>} />
          <Route path="/me" element={<Me/>} />
          <Route path="/update" element={<Update/>} />
          <Route path="/findFreelancer" element={<SearchFreelancer/>} />
        </Routes>
      </BrowserRouter>
      <Notification />
    </div>
  );
}

export default App;
