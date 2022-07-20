import "./explore.css";
import { Link, useNavigate } from "react-router-dom";
import { BiCommentDetail } from "react-icons/bi";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { BsBookmark, BsFillBookmarkFill } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllPosts,
  getSinglePost,
  addComment,
  likePost,
  dislikePost,
  removeBookmark,
  addBookmark,
} from "../../features/index";
import { useState, useEffect } from "react";
import { CommentModal } from "../index";

export function Explore({ commentModal, setCommentModal }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { token, user } = useSelector((store) => store.auth);
  const { posts, singlePost, bookmarks } = useSelector((store) => store.posts);
  const [id, setId] = useState(null);

  useEffect(() => {
    dispatch(getAllPosts());
  }, [posts]);

  const commentHandler = (_id) => {
    setCommentModal((prev) => !prev);
    setId(_id);
  };

  return (
    <div className="main">
      <div className="page_header explore_header">Explore</div>
      <div>
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
              <div className="explore_container">
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
                      (person) => person.username === user.username
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
                      onClick={() =>
                        dispatch(removeBookmark({ postId: _id, token }))
                      }
                    />
                  ) : (
                    <BsBookmark
                      title="bookmark"
                      className="post_icon"
                      onClick={() =>
                        dispatch(addBookmark({ postId: _id, token }))
                      }
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
