import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { signup } from "../../features/index";
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

  const signupHandler = (e) => {
    setUserDetail({
      ...userDetail,
    });
    e.preventDefault();
    dispatch(signup(userDetail)).then((res) => console.log(res));
    setTimeout(() => Navigate("/page/Home"), 3000);
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
