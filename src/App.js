import "./App.css";
import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  Home,
  Login,
  Signup,
  Landing,
  PageNotFound,
} from "./frontend/pages/index";
import Mockman from "mockman-js";

function App() {
  return (
    <div className="app">
      <ToastContainer autoClose={1000} />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/page/:component" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/profile/:username" element={<Home />} />
        <Route path="/test-api" element={<Mockman />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default App;
