import { useState, useEffect } from "react";
import { CommentModal, EditProfileModal } from "../index";
import { TbMessageCircle } from "react-icons/tb";
import { TiHeartOutline, TiHeart } from "react-icons/ti";
import { MdBookmarkBorder, MdBookmark, MdDelete } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import "./profile.css";
import { Link } from "react-router-dom";
import { sortPosts } from "../../helpers";
import {
  getUserPosts,
  editUserDetail,
  getSinglePost,
  addComment,
  likePost,
  dislikePost,
  removeBookmark,
  addBookmark,
  followAnotherUser,
  unfollowAnotherUser,
  deletePost,
} from "../../features/index";

export function Profile({
  userDetail,
  commentModal,
  setCommentModal,
  editProfileModal,
  setEditProfileModal,
}) {
  const { user, token } = useSelector((store) => store.auth);
  const dispatch = useDispatch();
  const {
    username,
    firstName,
    lastName,
    _id,
    followers,
    following,
    avatarURL,
    about,
    website,
  } = userDetail;

  const { bookmarks, singlePost, posts } = useSelector((store) => store.posts);
  const { userPosts, allUsers } = useSelector((store) => store.user);
  const [id, setId] = useState(null);

  useEffect(() => {
    dispatch(getUserPosts(username));
  }, [username, posts]);

  const whoToFollow = allUsers
    ?.filter(
      (person) =>
        !user?.following?.map((item) => item.username).includes(person.username)
    )
    .map((person) => person.username)
    .filter((person) => person !== user?.username);

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
        {username === user.username ? (
          <button
            onClick={() => setEditProfileModal((prev) => !prev)}
            className="edit_profile"
          >
            Edit profile
          </button>
        ) : whoToFollow.includes(username) ? (
          <button
            className="edit_profile"
            onClick={() =>
              dispatch(followAnotherUser({ followUserId: _id, token }))
            }
          >
            Follow
          </button>
        ) : (
          <button
            className="edit_profile"
            onClick={() =>
              dispatch(unfollowAnotherUser({ unfollowUserId: _id, token }))
            }
          >
            Unfollow
          </button>
        )}

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
            <div> {username === user.username ? user.about : about}</div>
            <a href={user.website}>
              {username === user.username ? user.website : website}
            </a>
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

                {username === user.username ? (
                  <MdDelete
                    title="delete"
                    className="post_icon icons"
                    onClick={() => dispatch(deletePost({ postId: _id, token }))}
                  />
                ) : null}
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
