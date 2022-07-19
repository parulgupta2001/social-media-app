import "./App.css";
import { Routes, Route } from "react-router-dom";
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
