import "./main-content.css";
import { useNavigate, Link } from "react-router-dom";
import { BiCommentDetail } from "react-icons/bi";
import { AiOutlineHeart } from "react-icons/ai";
import { BsBookmark } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllPosts,
  getSinglePost,
  addPost,
  addComment,
} from "../../features/post-slice";
import { useState, useEffect } from "react";
import { CommentModal } from "../index";

export function MainContent({ commentModal, setCommentModal }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const token = useSelector((store) => store.auth.token);
  const { posts, singlePost } = useSelector((store) => store.posts);
  const [text, setText] = useState("");
  const [id, setId] = useState(null);

  useEffect(() => {
    dispatch(getAllPosts());
  }, []);

  const changeHandler = (e) => {
    setText(e.target.value);
  };

  const postHandler = () => {
    dispatch(addPost({ postData: { content: text }, token }));
    setText("");
  };

  const commentHandler = (_id) => {
    setCommentModal((prev) => !prev);
    setId(_id);
  };

  return (
    <div className="main_content_container">
      <div className="post_content">
        <div className="go_to_home">Home</div>

        <div className="post_input">
          <img
            src="http://res.cloudinary.com/dwhran9qg/image/upload/avatar/6_j6gf77.jpg"
            className="avatar_img"
          />
          <input
            placeholder="What's happening?"
            onChange={(e) => changeHandler(e)}
          />
        </div>
        <button
          className="post_button"
          onClick={(content, _id) => postHandler(content, _id)}
        >
          Post
        </button>
      </div>

      <div className="posts">
        {posts.map(
          ({
            firstName,
            lastName,
            username,
            content,
            _id,
            avatarURL,
            comments,
            likes,
          }) => (
            <div>
              <div className="comment_container">
                <Link to={`/${_id}`} className="comment_container_link">
                  <div className="comment_content">
                    <img src={avatarURL} className="avatar_img" />
                    <div className="comment_text">
                      <div className="avatar_name">
                        <span className="follow_suggestion_name">
                          {firstName} {lastName}
                        </span>
                        <span className="follow_suggestion_username">
                          @{username}
                        </span>
                      </div>
                      {content}
                    </div>
                  </div>
                </Link>

                <div className="comment_container_icon">
                  <div>
                    <AiOutlineHeart />
                    {likes.likeCount}
                  </div>

                  <div>
                    <BiCommentDetail
                      title="comment"
                      onClick={() => commentHandler(_id)}
                    />
                    {comments.length > 0 && comments.length}
                  </div>

                  <BsBookmark title="bookmark" />
                </div>

                {commentModal ? (
                  <CommentModal
                    dispatch={dispatch}
                    getSinglePost={getSinglePost}
                    singlePost={singlePost}
                    addComment={addComment}
                    postId={id}
                    token={token}
                    setCommentModal={setCommentModal}
                    key={id}
                  />
                ) : null}
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
}
