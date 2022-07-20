import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { useSelector } from "react-redux";
import "./post-modal.css";

export function PostModal({ dispatch, addPost, token, setPostModal }) {
  const [text, setText] = useState("");
  const { user } = useSelector((store) => store.auth);

  const changeHandler = (e) => {
    setText(e.target.value);
  };

  const postClickHandler = () => {
    dispatch(
      addPost({
        postData: { content: text },
        token,
      })
    );
    setPostModal(false);
  };

  return (
    <div className="modal">
      <div className="modal_container">
        <div>
          <AiOutlineClose
            onClick={() => setPostModal(false)}
            className="close_btn"
          />
          <div className="post_input">
            <img
              className="avatar_img"
              src={user.avatarURL}
              alt="profile pic"
            />
            <input
              className="post_modal_input"
              onChange={changeHandler}
              value={text}
              placeholder="What's Happening?"
            />
          </div>
        </div>

        <button onClick={postClickHandler} className="post_button">
          Post
        </button>
      </div>
    </div>
  );
}
