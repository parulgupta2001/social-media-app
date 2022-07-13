import "./left-navbar.css";
import { FaFeatherAlt } from "react-icons/fa";
import { AiFillHome } from "react-icons/ai";
import { RiHashtag } from "react-icons/ri";
import { FiBookmark } from "react-icons/fi";
import { CgProfile } from "react-icons/cg";
import { Link } from "react-router-dom";
import { PostModal } from "../index";
import { useDispatch, useSelector } from "react-redux";
import { addPost } from "../../features/post-slice";

export function LeftNav({ postModal, setPostModal }) {
  const token = useSelector((store) => store.auth.token);
  const dispatch = useDispatch();

  const postHandler = () => {
    setPostModal((prev) => !prev);
  };

  return (
    <div className="left_nav_container">
      <div className="functional_container">
        <div>
          <FaFeatherAlt className="logo" />
        </div>

        <Link to="/" className="left_nav_link">
          <div className="functional_icon_container">
            <AiFillHome className="function_icon" />
            <div className="functionality">Home</div>
          </div>
        </Link>

        <Link to="/explore" className="left_nav_link">
          <div className="functional_icon_container">
            <RiHashtag className="function_icon" />
            <div className="functionality">Explore</div>
          </div>
        </Link>

        <Link to="/bookmark" className="left_nav_link">
          <div className="functional_icon_container">
            <FiBookmark className="function_icon" />
            <div className="functionality">Bookmarks</div>
          </div>
        </Link>

        <Link to="/profile" className="left_nav_link">
          <div className="functional_icon_container">
            <CgProfile className="function_icon" />
            <div className="functionality">Profile</div>
          </div>
        </Link>

        <button className="post_btn" onClick={postHandler}>
          Post
        </button>
      </div>

      <div className="profile">
        <img src="http://res.cloudinary.com/dwhran9qg/image/upload/avatar/6_j6gf77.jpg" />
        <div>
          <div className="profile_name">Parul Gupta</div>
          <div className="profile_email">@guptaparul123</div>
        </div>
      </div>

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
