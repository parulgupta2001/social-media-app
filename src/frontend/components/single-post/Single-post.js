import { useEffect } from "react";
import { BiCommentDetail } from "react-icons/bi";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { BsFillBookmarkFill, BsBookmark } from "react-icons/bs";
import { useParams, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  getSinglePost,
  addComment,
  likePost,
  dislikePost,
  addBookmark,
  removeBookmark,
} from "../../features/index";
import { CommentModal } from "../index";
import "./single-post.css";

export function SinglePost({ commentModal, setCommentModal }) {
  const { component } = useParams();
  const dispatch = useDispatch();
  const { singlePost, bookmarks, posts } = useSelector((store) => store.posts);
  const { token, user } = useSelector((store) => store.auth);

  useEffect(() => {
    dispatch(getSinglePost(component));
  }, [posts]);

  const username = singlePost?.username;

  return (
    <div className="main single_post_container">
      <h2 className="page_header">Post</h2>
      <div className="profile_post_content single_post_content">
        <Link to={`/profile/${username}`}>
          <img
            src={singlePost?.avatarURL}
            className="avatar_img"
            alt="profile pic"
          />
        </Link>
        <div className="comment_text">
          <div className="avatar_name">
            <span className="follow_suggestion_name">
              {singlePost?.firstName} {singlePost?.lastName}
            </span>
            <span className="follow_suggestion_username">
              @{singlePost?.username}
            </span>
          </div>
          <div>{singlePost?.content}</div>
        </div>
      </div>

      <div className="comment_container_icon single_post_icon ">
        <div>
          {singlePost?.likes.likedBy.some(
            (person) => person.username === user.username
          ) ? (
            <AiFillHeart
              title="like"
              className="liked_post post_icon"
              onClick={() =>
                dispatch(dislikePost({ postId: singlePost?._id, token }))
              }
            />
          ) : (
            <AiOutlineHeart
              title="like"
              className="post_icon"
              onClick={() =>
                dispatch(likePost({ postId: singlePost?._id, token }))
              }
            />
          )}

          {singlePost?.likes.likedBy.length > 0 &&
            singlePost?.likes.likedBy.length}
        </div>

        <div>
          <BiCommentDetail
            title="comment"
            className="post_icon"
            onClick={() => setCommentModal(true)}
          />
          {singlePost?.comments?.length > 0 && singlePost?.comments?.length}
        </div>

        {bookmarks?.some((post) => post._id === singlePost?._id) ? (
          <BsFillBookmarkFill
            title="bookmark"
            className="added_bookmark post_icon"
            onClick={() =>
              dispatch(removeBookmark({ postId: singlePost?._id, token }))
            }
          />
        ) : (
          <BsBookmark
            title="bookmark"
            className="post_icon"
            onClick={() =>
              dispatch(addBookmark({ postId: singlePost?._id, token }))
            }
          />
        )}
      </div>

      {singlePost?.comments.map(
        ({ text, avatarURL, firstName, lastName, username }) => (
          <div className="profile_post_content single_post_comment_content">
            <img src={avatarURL} className="avatar_img" alt="profile pic" />
            <div className="comment_text">
              <div className="avatar_name">
                <span className="follow_suggestion_name">
                  {firstName} {lastName}
                </span>
                <span className="follow_suggestion_username">@{username}</span>
              </div>
              <div>{text}</div>
            </div>
          </div>
        )
      )}

      {commentModal ? (
        <CommentModal
          dispatch={dispatch}
          getSinglePost={getSinglePost}
          singlePost={singlePost}
          addComment={addComment}
          postId={singlePost?._id}
          token={token}
          setCommentModal={setCommentModal}
        />
      ) : null}
    </div>
  );
}
