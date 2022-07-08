import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Home } from "./frontend/pages/home/Home";
import Mockman from "mockman-js";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/test-api" element={<Mockman />} />
      </Routes>
    </div>
  );
}

export default App;
