import React, { useState } from "react";
import "./comment-modal.css";
import { AiOutlineClose } from "react-icons/ai";
import { useSelector } from "react-redux";

export function CommentModal({
  dispatch,
  addComment,
  postId,
  token,
  setCommentModal,
}) {
  const [text, setText] = useState("");
  const { user } = useSelector((store) => store.auth);

  const changeHandler = (e) => {
    setText(e.target.value);
  };

  const addCommentHandler = () => {
    dispatch(addComment({ postId, commentData: { text }, token }));
    setCommentModal(false);
  };

  return (
    <div>
      <AiOutlineClose
        onClick={() => setCommentModal(false)}
        className="close_btn"
      />
      <div className="comment_modal_container">
        <img src={user.avatarURL} className="avatar_img" alt="profile pic" />

        <input
          onChange={changeHandler}
          value={text}
          placeholder="Post your reply"
        />
        <button onClick={addCommentHandler} className="comment_btn">
          Comment
        </button>
      </div>
    </div>
  );
}
