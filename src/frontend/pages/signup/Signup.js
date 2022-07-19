import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { signup } from "../../features/auth-slice";
import "./signup.css";

export function Signup() {
  const Navigate = useNavigate();
  const dispatch = useDispatch();
  const [detail, setDetail] = useState({});

  const signupHandler = (e) => {
    e.preventDefault();
    dispatch(signup(detail));
    Navigate("/");
  };

  return (
    <div>
      <form onSubmit={signupHandler} className="signup_container">
        <h3>WELCOME</h3>
        <div className="input_name_label">
          <div>
            <label className="first_name_label first_name">First name</label>
            <input
              type="text"
              className="name_input first_name"
              value={detail.firstName}
              onChange={(e) =>
                setDetail({ ...detail, firstName: e.target.value })
              }
            />
          </div>
          <div>
            <label className="last_name_label last_name">Last name</label>
            <input
              type="text"
              className="name_input last_name"
              value={detail.lastName}
              onChange={(e) =>
                setDetail({ ...detail, lastName: e.target.value })
              }
            />
          </div>
        </div>
        <div>
          <div>
            <label htmlFor="name">Email</label>
          </div>
          <div>
            <input
              type="email"
              className="user_input"
              value={detail.email}
              onChange={(e) => setDetail({ ...detail, email: e.target.value })}
            />
          </div>
        </div>
        <div>
          <div>
            <label htmlFor="name">Username</label>
          </div>
          <div>
            <input
              type="text"
              className="user_input"
              value={detail.username}
              onChange={(e) =>
                setDetail({ ...detail, username: e.target.value })
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
              value={detail.password}
              onChange={(e) =>
                setDetail({ ...detail, password: e.target.value })
              }
            />
          </div>
        </div>
        <div>
          <div>
            <label>Confirm Password</label>
          </div>
          <div>
            <input type="password" className="user_input" />
          </div>
        </div>
        <button className="signup_btn" type="submit">
          Create New Account
        </button>
        <div>
          <div>----------------------OR----------------------</div>
          <div className="exist_account">
            Already an account?
            <Link to="/login" className="login_link">
              Login
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
}
