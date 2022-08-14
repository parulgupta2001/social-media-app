import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { login, signup } from "../../features/index";
import "./signup.css";

export function Signup() {
  const Navigate = useNavigate();
  const dispatch = useDispatch();
  const [userDetail, setUserDetail] = useState({
    firstName: "",
    lastName: "",
    username: "",
    password: "",
    email: "",
    avatarURL:
      "http://res.cloudinary.com/dwhran9qg/image/upload/avatar/blank_avatar_eymn5m",
  });

  const [dummy, setDummy] = useState(false);

  const signupHandler = (e) => {
    setUserDetail({
      ...userDetail,
    });
    e.preventDefault();
    dummy ? dispatch(login(userDetail)) : dispatch(signup(userDetail));
    setTimeout(() => Navigate("/page/Home"), 1000);
  };

  return (
    <div className="signup">
      <form onSubmit={signupHandler} className="signup_container">
        <h3>WELCOME</h3>
        <div className="input_name_label">
          <div>
            <label className="first_name_label first_name">First name</label>
            <input
              type="text"
              className="name_input first_name"
              value={userDetail.firstName}
              onChange={(e) =>
                setUserDetail({ ...userDetail, firstName: e.target.value })
              }
            />
          </div>
          <div>
            <label className="last_name_label last_name">Last name</label>
            <input
              type="text"
              className="name_input last_name"
              value={userDetail.lastName}
              onChange={(e) =>
                setUserDetail({ ...userDetail, lastName: e.target.value })
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
              value={userDetail.email}
              onChange={(e) =>
                setUserDetail({ ...userDetail, email: e.target.value })
              }
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
          </div>
        </div>

        <button className="signup_btn" type="submit">
          Create New Account
        </button>

        <button
          className="dummy_signup_btn"
          onClick={() => {
            setDummy(true);
            setUserDetail({
              ...userDetail,
              firstName: "Dummy",
              lastName: "Gupta",
              email: "dummy@gmail.com",
              username: "parul",
              password: "parul123",
            });
          }}
        >
          Dummy Signup
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
