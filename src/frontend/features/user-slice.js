import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { updateUser } from "./auth-slice";

const initialState = {
  allUsers: [],
  userPosts: [],
  userStatus: "idle",
  error: "",
};

const getAllUsers = createAsyncThunk("user/getAllUsers", async () => {
  const response = await axios.get("/api/users");
  return response.data.users;
});

const getUser = createAsyncThunk("user/getUser", async (username) => {
  const response = await axios.get(`/api/users/${username}`);
  return response.data;
});

const editUserDetail = createAsyncThunk(
  "user/editUserDetail",
  async ({ userData, token }, thunkAPI) => {
    const response = await axios.post(
      "/api/users/edit",
      { userData },
      { headers: { authorization: token } }
    );
    thunkAPI.dispatch(updateUser(response.data.user));
  }
);

const getUserPosts = createAsyncThunk("user/getUserPosts", async (username) => {
  const response = await axios.get(`/api/posts/user/${username}`);
  return response.data.posts;
});

const followAnotherUser = createAsyncThunk(
  "user/followAnotherUser",
  async ({ followUserId, token }, thunkAPI) => {
    const response = await axios.post(
      `/api/users/follow/${followUserId}`,
      {},
      { headers: { authorization: token } }
    );
    const allUsers = response.data.users;
    const user = thunkAPI.getState().auth.user;
    const newData = allUsers.find(
      (person) => person.username === user.username
    );
    thunkAPI.dispatch(updateUser({ ...user, following: newData.following }));
    return response.data.users;
  }
);

const unfollowAnotherUser = createAsyncThunk(
  "user/unfollowAnotherUser",
  async ({ unfollowUserId, token }, thunkAPI) => {
    const response = await axios.post(
      `/api/users/unfollow/${unfollowUserId}`,

      { headers: { authorization: token } }
    );
    return response.data.users;
  }
);

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: {
    [getAllUsers.pending]: (state) => {
      state.userStatus = "loading";
    },
    [getAllUsers.fulfilled]: (state, action) => {
      state.userStatus = "success";
      state.allUsers = action.payload;
    },
    [getAllUsers.rejected]: (state, action) => {
      state.userStatus = "failure";
      state.error = action.error;
    },

    [getUser.pending]: (state) => {
      state.userStatus = "loading";
    },
    [getUser.fulfilled]: (state, action) => {
      state.userStatus = "success";
      state.user = action.payload;
    },
    [getUser.rejected]: (state, action) => {
      state.userStatus = "failure";
    },
    [getUserPosts.pending]: (state) => {
      state.userStatus = "loading";
    },
    [getUserPosts.fulfilled]: (state, action) => {
      state.userStatus = "success";
      state.userPosts = action.payload;
    },
    [getUserPosts.rejected]: (state, action) => {
      state.userStatus = "failure";
      state.error = action.error;
    },

    [followAnotherUser.pending]: (state) => {
      state.userStatus = "loading";
    },
    [followAnotherUser.fulfilled]: (state, action) => {
      state.userStatus = "success";
      state.allUsers = action.payload;
    },
    [followAnotherUser.rejected]: (state, action) => {
      state.userStatus = "failure";
      state.error = action.error;
    },

    [unfollowAnotherUser.pending]: (state) => {
      state.userStatus = "loading";
    },
    [unfollowAnotherUser.fulfilled]: (state, action) => {
      state.userStatus = "success";
      state.allUsers = action.payload;
    },
    [unfollowAnotherUser.rejected]: (state, action) => {
      state.userStatus = "failure";
      state.error = action.error;
    },
  },
});

export const userReducer = userSlice.reducer;
export {
  getAllUsers,
  getUser,
  editUserDetail,
  getUserPosts,
  followAnotherUser,
  unfollowAnotherUser,
};
