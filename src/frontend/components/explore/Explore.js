import "./explore.css";
import { Link, useNavigate } from "react-router-dom";
import { TbMessageCircle } from "react-icons/tb";
import { TiHeartOutline, TiHeart } from "react-icons/ti";
import { MdBookmarkBorder, MdBookmark } from "react-icons/md";
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
                  <div className="icons">
                    {likes.likedBy.some(
                      (person) => person.username === user?.username
                    ) ? (
                      <TiHeart
                        title="like"
                        className="liked_post post_icon"
                        onClick={() =>
                          dispatch(dislikePost({ postId: _id, token }))
                        }
                      />
                    ) : (
                      <TiHeartOutline
                        title="like"
                        className="post_icon"
                        onClick={() =>
                          dispatch(likePost({ postId: _id, token }))
                        }
                      />
                    )}

                    {likes.likedBy.length > 0 && likes.likedBy.length}
                  </div>

                  <div className="icons">
                    <TbMessageCircle
                      title="comment"
                      className="post_icon"
                      onClick={() => commentHandler(_id)}
                    />
                    {comments?.length > 0 && comments?.length}
                  </div>

                  {bookmarks?.some((post) => post._id === _id) ? (
                    <MdBookmark
                      title="bookmark"
                      className="added_bookmark post_icon icons"
                      onClick={() => {
                        dispatch(removeBookmark({ postId: _id, token }));
                      }}
                    />
                  ) : (
                    <MdBookmarkBorder
                      title="bookmark"
                      className="post_icon icons"
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
