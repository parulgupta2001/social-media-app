import "./right-navbar.css";
import { followAnotherUser, getAllUsers } from "../../features/index";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export function RightNav() {
  const dispatch = useDispatch();
  const { allUsers } = useSelector((store) => store.user);
  const { token, user } = useSelector((store) => store.auth);
  const [searchUser, setSearchUser] = useState("");

  useEffect(() => {
    dispatch(getAllUsers());
  }, [dispatch]);

  const search = (input, allUsers) => {
    if (input.trim().length === 0) {
      return null;
    } else {
      return (
        allUsers.filter(
          (person) =>
            person.username.includes(input) ||
            person.firstName.includes(input) ||
            person.lastName.includes(input)
        ) ?? null
      );
    }
  };

  const whoToFollow = allUsers
    ?.filter(
      (person) =>
        !user?.following?.map((item) => item.username).includes(person.username)
    )
    .filter((person) => person.username !== user?.username);

  const followHandler = (_id) => {
    dispatch(followAnotherUser({ followUserId: _id, token }));
  };

  return (
    <div className="right_nav_container">
      <input
        placeholder="Search users"
        className="right_nav_input"
        onChange={(e) => {
          setSearchUser(search(e.target.value, allUsers));
        }}
      />
      <div className="search_result_container">
        {searchUser &&
          searchUser?.map(({ avatarURL, firstName, lastName, username }) => (
            <div className="follow_suggestions search_suggestions">
              <Link
                to={`/profile/${username}`}
                className="comment_container_link"
              >
                <div className="avatar_name">
                  <img
                    src={avatarURL}
                    className="avatar_img"
                    alt="profile pic"
                  />
                  <div>
                    <div className="follow_suggestion_name">
                      {firstName} {lastName}
                    </div>
                    <div className="follow_suggestion_username">
                      @{username}
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
      </div>
      <div className="who_to_follow">
        <div className="who_to_follow_header">Who to follow</div>
        {whoToFollow?.map(
          ({ _id, avatarURL, firstName, lastName, username }) => (
            <div className="follow_suggestions">
              <Link
                to={`/profile/${username}`}
                className="comment_container_link"
              >
                <div className="avatar_name">
                  <img
                    src={avatarURL}
                    className="avatar_img"
                    alt="profile pic"
                  />
                  <div>
                    <div className="follow_suggestion_name">
                      {firstName} {lastName}
                    </div>
                    <div className="follow_suggestion_username">
                      @{username}
                    </div>
                  </div>
                </div>
              </Link>
              <button
                className="follow_btn"
                onClick={(e) => {
                  e.stopPropagation();
                  followHandler(_id);
                }}
              >
                Follow
              </button>
            </div>
          )
        )}
      </div>
    </div>
  );
}
