import React, { useEffect, useState } from "react";
import "./comment-modal.css";
import { AiOutlineClose } from "react-icons/ai";

export function CommentModal({
  dispatch,
  getSinglePost,
  singlePost,
  addComment,
  postId,
  token,
  setCommentModal,
}) {
  const [text, setText] = useState("");

  useEffect(() => {
    dispatch(getSinglePost(postId));
  }, []);

  const changeHandler = (e) => {
    setText(e.target.value);
  };

  const addCommentHandler = () => {
    dispatch(addComment({ postId, commentData: { text }, token }));
    setCommentModal(false);
  };

  return (
    <div className="comment_modal_container">
      <img src={singlePost.avatarURL} className="avatar_img" />

      <div>
        <input
          onChange={changeHandler}
          value={text}
          placeholder="Post your reply"
        />

        <button onClick={addCommentHandler} className="post_btn">
          Comment
        </button>
      </div>
      <AiOutlineClose onClick={() => setCommentModal(false)} />
    </div>
  );
}
