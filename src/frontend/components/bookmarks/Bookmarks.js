import "./bookmarks.css";
import { Link } from "react-router-dom";
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

export function Bookmarks({ commentModal, setCommentModal }) {
  const dispatch = useDispatch();
  const { token, user } = useSelector((store) => store.auth);
  const { singlePost, posts, bookmarks } = useSelector((store) => store.posts);
  const [id, setId] = useState(null);

  const commentHandler = (_id) => {
    setCommentModal((prev) => !prev);
    setId(_id);
  };

  useEffect(() => {
    dispatch(getAllPosts());
  }, [posts]);

  const bookmarkedPosts = posts.filter((post) =>
    bookmarks.find((item) => item._id === post._id)
  );

  return (
    <div className="main">
      <div>
        <div className="page_header bookmark_header">Bookmarks</div>
      </div>
      {bookmarkedPosts.length > 0 ? (
        bookmarkedPosts.map(
          ({
            content,
            _id,
            avatarURL,
            comments,
            likes,
            firstName,
            lastName,
            username,
          }) => (
            <div className="bookmark_container">
              <Link to={`/page/${_id}`} className="comment_container_link">
                <div className="profile_post_content">
                  <img
                    src={avatarURL}
                    className="avatar_img"
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
                    <div>{content}</div>
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
                      onClick={() => dispatch(likePost({ postId: _id, token }))}
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
          )
        )
      ) : (
        <div>
          <img
            src="http://res.cloudinary.com/dwhran9qg/image/upload/Image/No_data-cuate_nqnpdu.svg"
            alt="no bookmark pic"
          />
          <div className="empty_bookmark_content">
            <div className="upper_content">Save Posts for later</div>
            <div className="follow_suggestion_username">
              Bookmark Posts to easily find them again in the future.
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
