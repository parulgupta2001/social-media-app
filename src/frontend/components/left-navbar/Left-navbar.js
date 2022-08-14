import "./left-navbar.css";
import { AiFillHome } from "react-icons/ai";
import { RiHashtag, RiLogoutCircleLine } from "react-icons/ri";
import { BsBookmark } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { Link, useNavigate } from "react-router-dom";
import { PostModal } from "../index";
import { useDispatch, useSelector } from "react-redux";
import { addPost, logout } from "../../features/index";

export function LeftNav({ postModal, setPostModal }) {
  const { user, token } = useSelector((store) => store.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const arr = [
    { component: "Home", icon: <AiFillHome /> },
    { component: "Explore", icon: <RiHashtag /> },
    { component: "Bookmarks", icon: <BsBookmark /> },
  ];

  const logoutHandler = () => {
    dispatch(logout());
    navigate("/");
  };

  const postHandler = () => {
    setPostModal((prev) => !prev);
  };

  return (
    <div className="left_nav_container">
      <div className="functional_container">
        <Link to="/page/Home" className="logo_link">
          <div className="logo website_name">ᖇᗴᑌᑎᎥ丅ᗴ</div>
        </Link>

        {arr.map((item) => (
          <Link to={`/page/${item.component}`} className="left_nav_link">
            <div className="functional_icon_container">
              <div className="function_icon">{item.icon}</div>
              <div className="functionality">{item.component}</div>
            </div>
          </Link>
        ))}

        <Link to={`/profile/${user?.username}`} className="left_nav_link">
          <div title="Profile" className="functional_icon_container">
            <div className="function_icon">
              <CgProfile />
            </div>
            <div className="functionality">Profile</div>
          </div>
        </Link>

        <div
          onClick={logoutHandler}
          title="Logout"
          className="functional_icon_container"
        >
          <div className="function_icon">
            <RiLogoutCircleLine />
          </div>
          <div className="functionality">Logout</div>
        </div>

        <button className="post_btn" onClick={postHandler}>
          Post
        </button>
      </div>

      <Link to={`/profile/${user?.username}`} className="left_nav_link">
        <div className="profile">
          <img src={user?.avatarURL} alt="profile pic" />
          <div className="about_profile">
            <div className="profile_name">
              {user?.firstName} {user?.lastName}
            </div>
            <div className="profile_email">@{user?.username}</div>
          </div>
        </div>
      </Link>

      {postModal && (
        <PostModal
          dispatch={dispatch}
          addPost={addPost}
          token={token}
          setPostModal={setPostModal}
        />
      )}
    </div>
  );
}
