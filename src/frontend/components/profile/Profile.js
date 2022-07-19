import { useState } from "react";
import { CommentModal, EditProfileModal } from "../index";
import { BiCommentDetail } from "react-icons/bi";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { BsBookmark, BsFillBookmarkFill } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import "./profile.css";
import { Link } from "react-router-dom";
import {
  editUserDetail,
  getSinglePost,
  addComment,
  likePost,
  dislikePost,
  removeBookmark,
  addBookmark,
} from "../../features/index";

export function Profile({ commentModal, setCommentModal }) {
  const { user, token } = useSelector((store) => store.auth);
  const dispatch = useDispatch();
  const {
    username,
    firstName,
    lastName,
    followers,
    following,
    avatarURL,
    about,
    website,
  } = user;

  const { bookmarks, singlePost } = useSelector((store) => store.posts);
  const [editProfileModal, setEditProfileModal] = useState(false);
  const { userPosts } = useSelector((store) => store.user);
  const [id, setId] = useState(null);

  const sortPosts = (posts) => {
    let newOrder = [...posts].sort(
      (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
    );
    return newOrder;
  };

  const commentHandler = (_id) => {
    setCommentModal((prev) => !prev);
    setId(_id);
  };

  return (
    <div className="profile_container main">
      <div>
        <div className="profile_user_name user_name">
          {firstName} {lastName}
        </div>
        <img
          src="http://res.cloudinary.com/dwhran9qg/image/upload/avatar/cover_pic.jpg_ajyb1d.jpg"
          className="cover_page_pic"
          alt="cover pic"
        />
        <img src={avatarURL} className="avatar_display_pic" alt="profile pic" />
        <button
          onClick={() => setEditProfileModal((prev) => !prev)}
          className="edit_profile"
        >
          Edit profile
        </button>
        {editProfileModal && (
          <EditProfileModal
            editUserDetail={editUserDetail}
            dispatch={dispatch}
            token={token}
            user={user}
            setEditProfileModal={setEditProfileModal}
          />
        )}
        <div className="profile_content">
          <div>
            <div className="profile_user_name">
              {firstName} {lastName}
            </div>
            <span className="follow_suggestion_username">@{username}</span>
          </div>

          <div className="about_user_container">
            <div>{about}</div>
            <a href={user.website}>{website}</a>
            <div className="about_user_account">
              <div className="user_account_content">
                {userPosts.length}{" "}
                <span className="follow_suggestion_username">Posts</span>
              </div>
              <div className="user_account_content">
                {following.length}{" "}
                <span className="follow_suggestion_username">Following</span>
              </div>
              <div className="user_account_content">
                {followers.length}{" "}
                <span className="follow_suggestion_username">Followers</span>
              </div>
            </div>
            <div className="profile_posts_header">Posts</div>
          </div>
        </div>
      </div>
      {userPosts?.length > 0 ? (
        sortPosts(userPosts)?.map(
          ({
            content,
            _id,
            avatarURL,
            firstName,
            lastName,
            username,
            comments,
            likes,
          }) => (
            <div className="comment_container">
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
                      onClick={() => dispatch(likePost({ postId: _id, token }))}
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
                  postId={_id}
                  token={token}
                  setCommentModal={setCommentModal}
                />
              ) : null}
            </div>
          )
        )
      ) : (
        <p>Not posted anything yet!</p>
      )}
    </div>
  );
}
