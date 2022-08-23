import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../../features/index";
import "./login.css";
import { toast } from "react-toastify";

export function Login() {
  const [userDetail, setUserDetail] = useState({});
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const loginHandler = (e) => {
    e.preventDefault();
    dispatch(login(userDetail)).then((response) => {
      if (response?.payload?.encodedToken) {
        navigate("/page/Home");
      } else if (
        response.error.message === "Request failed with status code 401"
      ) {
        toast.error("Please enter correct credentials");
      } else {
        toast.error(`${response.error.message}. Please try again.`);
      }
    });
  };

  return (
    <div className="login">
      <form onSubmit={loginHandler} className="login_container">
        <h3>LOGIN</h3>
        <div>
          <div>
            <label htmlFor="name">Username</label>
          </div>
          <div>
            <input
              type="text"
              className="user_input"
              value={userDetail.username}
              onChange={(e) =>
                setUserDetail({ ...userDetail, username: e.target.value })
              }
            />
          </div>
        </div>
        <div>
          <div>
            <label htmlFor="password">Password</label>
          </div>
          <div>
            <input
              type="password"
              className="user_input"
              value={userDetail.password}
              onChange={(e) =>
                setUserDetail({ ...userDetail, password: e.target.value })
              }
            />
            <div className="forgot_password"> Forgot Password?</div>
          </div>
        </div>
        <button className="login_btn" type="submit">
          LOGIN
        </button>

        <button
          className="login_btn"
          onClick={() =>
            setUserDetail({
              username: "parul",
              password: "parul123",
            })
          }
        >
          Login as Guest
        </button>

        <div>
          <div>----------------------OR----------------------</div>
          <div className="need_account">
            Need an account?
            <Link to="/signup" className="signup_link">
              Signup
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
}
