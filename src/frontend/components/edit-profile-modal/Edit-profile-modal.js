import "./edit-profile-modal.css";
import { AiOutlineClose } from "react-icons/ai";
import { useState } from "react";

export function EditProfileModal({
  editUserDetail,
  dispatch,
  token,
  user,
  setEditProfileModal,
}) {
  const { firstName, lastName } = user;
  const [userData, setUserData] = useState({});

  const updateUserDetails = () => {
    dispatch(editUserDetail({ userData, token }));
    setUserData({ website: "", about: "" });
    setEditProfileModal(false);
  };

  return (
    <div>
      <div className="edit_profile_container">
        <div>
          <AiOutlineClose
            className="close_btn"
            onClick={() => setEditProfileModal((prev) => !prev)}
          />
          <div className="page_header">Update Profile</div>
        </div>

        <div className="edit_profile_content_container">
          <div className="edit_profile_content">
            <label htmlFor="firstName">First Name</label>
            <input type="text" value={firstName} />
          </div>

          <div className="edit_profile_content">
            <label htmlFor="lastName">Last Name</label>
            <input type="text" value={lastName} />
          </div>

          <div className="edit_profile_content">
            <label htmlFor="website">Website</label>
            <input
              type="text"
              onChange={(e) =>
                setUserData({ ...userData, website: e.target.value })
              }
              value={userData.website}
            />
          </div>

          <div className="edit_profile_content">
            <label htmlFor="about">About</label>
            <textarea
              type="text"
              onChange={(e) =>
                setUserData({ ...userData, about: e.target.value })
              }
              value={userData.about}
            />
          </div>

          <button className="update_btn" onClick={updateUserDetails}>
            Update
          </button>
        </div>
      </div>
    </div>
  );
}
