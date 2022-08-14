import "./home.css";
import {
  LeftNav,
  MainContent,
  RightNav,
  Bookmarks,
  Profile,
  SinglePost,
  Explore,
} from "../../components/index";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

export function Home() {
  const [postModal, setPostModal] = useState(false);
  const [commentModal, setCommentModal] = useState(false);
  const [editProfileModal, setEditProfileModal] = useState(false);
  const { component, username } = useParams();

  const { allUsers } = useSelector((store) => store.user);
  const userDetail =
    allUsers.find((person) => person.username === username) ?? null;

  return (
    <div>
      <div
        className={
          postModal || editProfileModal || commentModal ? "blur" : "no_blur"
        }
      >
        <LeftNav postModal={postModal} setPostModal={setPostModal} />
        {component === "Home" && (
          <MainContent
            commentModal={commentModal}
            setCommentModal={setCommentModal}
          />
        )}
        {component === "Bookmarks" && (
          <Bookmarks
            commentModal={commentModal}
            setCommentModal={setCommentModal}
          />
        )}
        {component === "Explore" && (
          <Explore
            commentModal={commentModal}
            setCommentModal={setCommentModal}
          />
        )}
        {userDetail && (
          <Profile
            userDetail={userDetail}
            commentModal={commentModal}
            setCommentModal={setCommentModal}
            editProfileModal={editProfileModal}
            setEditProfileModal={setEditProfileModal}
          />
        )}
        {component?.length > 15 && (
          <SinglePost
            commentModal={commentModal}
            setCommentModal={setCommentModal}
          />
        )}
        <RightNav />
      </div>
    </div>
  );
}
