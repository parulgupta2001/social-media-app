import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Home, Login, Signup, SinglePost } from "./frontend/pages/index";
import { RequiresAuth } from "./frontend/requires-auth";
import Mockman from "mockman-js";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route
          path="/"
          element={
            // <RequiresAuth>
            <Home />
            // </RequiresAuth>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/:postId" element={<SinglePost />} />
        <Route path="/test-api" element={<Mockman />} />
      </Routes>
    </div>
  );
}

export default App;
