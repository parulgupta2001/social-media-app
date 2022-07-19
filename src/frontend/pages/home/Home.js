import "./home.css";
import { LeftNav, MainContent, RightNav } from "../../components/index";
import { useState } from "react";

export function Home() {
  const [postModal, setPostModal] = useState(false);
  const [commentModal, setCommentModal] = useState(false);

  return (
    <>
      <div className="home_container">
        <LeftNav
          className="left_nav"
          postModal={postModal}
          setPostModal={setPostModal}
        />
        <MainContent
          className="main_content"
          commentModal={commentModal}
          setCommentModal={setCommentModal}
        />
        <RightNav className="right_nav" />
      </div>
    </>
  );
}
