import "./left-navbar.css";
import { FaFeatherAlt } from "react-icons/fa";
import { AiFillHome } from "react-icons/ai";
import { RiHashtag } from "react-icons/ri";
import { IoNotificationsOutline } from "react-icons/io5";
import { BiEnvelope } from "react-icons/bi";
import { FiBookmark } from "react-icons/fi";
import { CgProfile } from "react-icons/cg";

export function LeftNav() {
  return (
    <div className="left_nav_container">
      <div className="functional_container">
        <div>
          <FaFeatherAlt className="logo" />
        </div>

        <div className="functional_icon_container">
          <AiFillHome className="function_icon" />
          <div className="functionality">Home</div>
        </div>

        <div className="functional_icon_container">
          <RiHashtag className="function_icon" />
          <div className="functionality">Explore</div>
        </div>

        <div className="functional_icon_container">
          <IoNotificationsOutline className="function_icon" />
          <div className="functionality">Notifications</div>
        </div>

        <div className="functional_icon_container">
          <BiEnvelope className="function_icon" />
          <div className="functionality">Messages</div>
        </div>

        <div className="functional_icon_container">
          <FiBookmark className="function_icon" />
          <div className="functionality">Bookmarks</div>
        </div>

        <div className="functional_icon_container">
          <CgProfile className="function_icon" />
          <div className="functionality">Profile</div>
        </div>

        <button className="tweet_btn">Tweet</button>
      </div>

      <div className="profile">
        <img src="http://res.cloudinary.com/dwhran9qg/image/upload/avatar/6_j6gf77.jpg" />
        <div>
          <div className="profile_name">Parul Gupta</div>
          <div className="profile_email">@guptaparul123</div>
        </div>
      </div>
    </div>
  );
}
