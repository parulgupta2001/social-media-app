import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../../features/index";
import "./login.css";

export function Login() {
  const [userDetail, setUserDetail] = useState({});
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const loginHandler = (e) => {
    e.preventDefault();
    dispatch(login(userDetail));
    setTimeout(() => navigate("/page/Home"), 1000);
  };

  return (
    <div>
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
