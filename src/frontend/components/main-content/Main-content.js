import "./main-content.css";
import { Link, useNavigate } from "react-router-dom";
import { BiCommentDetail } from "react-icons/bi";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { BsBookmark, BsFillBookmarkFill } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllPosts,
  getSinglePost,
  addPost,
  addComment,
  dislikePost,
  likePost,
  removeBookmark,
  addBookmark,
} from "../../features/index";
import { useState, useEffect } from "react";
import { CommentModal } from "../index";

export function MainContent({ commentModal, setCommentModal }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user, token } = useSelector((store) => store.auth);
  const { posts, singlePost, bookmarks } = useSelector((store) => store.posts);
  const [text, setText] = useState("");
  const [id, setId] = useState(null);

  useEffect(() => {
    dispatch(getAllPosts());
  }, [posts]);

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

  const sortPosts = (posts) => {
    let newOrder = [...posts].sort(
      (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
    );
    return newOrder;
  };

  return (
    <div className="main_content_container main">
      <div className="post_content">
        <div className="page_header">Home</div>

        <div className="post_input">
          <Link to={`/profile/${user?.username}`}>
            <img
              src={user?.avatarURL}
              className="avatar_img"
              alt="profile pic"
            />
          </Link>
          <input
            placeholder="What's happening?"
            value={text}
            onChange={(e) => changeHandler(e)}
          />
        </div>
        <button className="post_button" onClick={postHandler}>
          Post
        </button>
      </div>

      <div className="posts">
        {sortPosts(posts).map(
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
                <Link to={`/page/${_id}`} className="comment_container_link">
                  <div className="comment_content">
                    <img
                      src={avatarURL}
                      className="avatar_img"
                      onClick={() => navigate(`/profile/${username}`)}
                      alt="profile pic"
                    />
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
                    {likes.likedBy.some(
                      (person) => person.username === user?.username
                    ) ? (
                      <AiFillHeart
                        title="like"
                        className="liked_post post_icon"
                        onClick={() =>
                          dispatch(dislikePost({ postId: _id, token }))
                        }
                      />
                    ) : (
                      <AiOutlineHeart
                        title="like"
                        className="post_icon"
                        onClick={() =>
                          dispatch(likePost({ postId: _id, token }))
                        }
                      />
                    )}

                    {likes.likedBy.length > 0 && likes.likedBy.length}
                  </div>

                  <div>
                    <BiCommentDetail
                      title="comment"
                      className="post_icon"
                      onClick={() => commentHandler(_id)}
                    />
                    {comments?.length > 0 && comments?.length}
                  </div>

                  {bookmarks?.some((post) => post._id === _id) ? (
                    <BsFillBookmarkFill
                      title="bookmark"
                      className="added_bookmark post_icon"
                      onClick={() => {
                        dispatch(removeBookmark({ postId: _id, token }));
                      }}
                    />
                  ) : (
                    <BsBookmark
                      title="bookmark"
                      className="post_icon"
                      onClick={() => {
                        dispatch(addBookmark({ postId: _id, token }));
                      }}
                    />
                  )}
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
