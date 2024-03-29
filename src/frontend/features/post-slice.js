import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import axios from "axios";

const initialState = {
  posts: [],
  postsStatus: "idle",
  error: null,
  singlePost: null,
  singlePostStatus: "idle",
  bookmarks: [],
  bookmarksStatus: "idle",
};

const getAllPosts = createAsyncThunk("posts/getAllPosts", async () => {
  const response = await axios.get("/api/posts");
  return response.data.posts;
});

const getSinglePost = createAsyncThunk(
  "posts/getSinglePost",
  async (postId) => {
    const response = await axios.get(`/api/posts/${postId}`);
    return response.data.post;
  }
);

const addPost = createAsyncThunk(
  "posts/addPost",
  async ({ postData, token }) => {
    const response = await axios.post(
      "/api/posts",
      { postData },
      { headers: { authorization: token } }
    );
    console.log(response);
    return response.data.posts;
  }
);

const deletePost = createAsyncThunk(
  "posts/deletePost",
  async ({ postId, token }) => {
    console.log(postId, token);
    const response = await axios.delete(`/api/posts/${postId}`, {
      headers: { authorization: token },
    });
    return response.data.posts;
  }
);

const editPost = createAsyncThunk(
  "posts/editPost",
  async ({ postId, postData, token }) => {
    const response = await axios.post(
      `/api/posts/edit/${postId}`,
      { postData },
      { headers: { authorization: token } }
    );
    return response.data.posts;
  }
);

const likePost = createAsyncThunk(
  "posts/likePost",
  async ({ postId, token }) => {
    const response = await axios.post(
      `/api/posts/like/${postId}`,
      {},
      {
        headers: { authorization: token },
      }
    );
    return response.data.posts;
  }
);

const dislikePost = createAsyncThunk(
  "posts/dislikePost",
  async ({ postId, token }) => {
    const response = await axios.post(
      `/api/posts/dislike/${postId}`,
      {},
      {
        headers: { authorization: token },
      }
    );
    return response.data.posts;
  }
);

const getAllComments = createAsyncThunk(
  "posts/getAllComments",
  async (postId) => {
    const response = await axios.get(`/api/comments/${postId}`);
    return response.data.posts;
  }
);

const addComment = createAsyncThunk(
  "posts/addComment",
  async ({ postId, commentData, token }) => {
    const response = await axios.post(
      `/api/comments/add/${postId}`,
      { commentData },
      { headers: { authorization: token } }
    );
    return response.data.posts;
  }
);

const editComment = createAsyncThunk(
  "posts/editComment",
  async ({ postId, commentId, commentData, token }) => {
    const response = await axios.post(
      `/api/comments/edit/${postId}/${commentId}`,
      { commentData },
      { Headers: { authorization: token } }
    );
    return response.data.posts;
  }
);

const deleteComment = createAsyncThunk(
  "posts/deleteComment",
  async ({ postId, commentId, token }) => {
    const response = await axios.delete(
      `/api/comments/delete/${postId}/${commentId}`,
      { Headers: { authorization: token } }
    );
    return response.data.posts;
  }
);

const getAllBookmarks = createAsyncThunk(
  "posts/getAllBookmarks",
  async (token) => {
    const response = await axios.get("/api/users/bookmark", {
      headers: { authorization: token },
    });
    return response.data.bookmarks;
  }
);

const addBookmark = createAsyncThunk(
  "posts/addBookmark",
  async ({ postId, token }) => {
    const response = await axios.post(
      `/api/users/bookmark/${postId}`,
      {},
      {
        headers: { authorization: token },
      }
    );
    return response.data.bookmarks;
  }
);

const removeBookmark = createAsyncThunk(
  "posts/removeBookmark",
  async ({ postId, token }) => {
    const response = await axios.post(
      `/api/users/remove-bookmark/${postId}`,
      {},
      {
        headers: { authorization: token },
      }
    );
    return response.data.bookmarks;
  }
);

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},
  extraReducers: {
    [getAllPosts.pending]: (state) => {
      state.postsStatus = "loading";
    },
    [getAllPosts.fulfilled]: (state, action) => {
      state.postsStatus = "fulfilled";
      state.posts = action.payload;
    },
    [getAllPosts.rejected]: (state, action) => {
      state.postsStatus = "error";
      state.error = action.error;
    },

    [getSinglePost.fulfilled]: (state, action) => {
      state.postsStatus = "fulfilled";
      state.singlePost = action.payload;
    },
    [getSinglePost.rejected]: (state, action) => {
      state.singlePostStatus = "failed";
      state.error = action.error;
    },

    [addPost.fulfilled]: (state, action) => {
      state.postsStatus = "fulfilled";
      state.posts = action.payload;
      toast.success("Successfully Posted");
    },
    [addPost.rejected]: (state, action) => {
      state.postsStatus = "error";
      state.error = action.error;
      toast.error(`${state.error} Error. Please try again later!`);
    },

    [deletePost.fulfilled]: (state, action) => {
      state.postsStatus = "fulfilled";
      state.posts = action.payload;
      toast.success("Post deleted Successfully ");
    },
    [deletePost.rejected]: (state, action) => {
      state.postsStatus = "error";
      state.error = action.error;
      toast.error(`${state.error} Error. Please try again later!`);
    },

    [editPost.fulfilled]: (state, action) => {
      state.postsStatus = "fulfilled";
      state.posts = action.payload;
    },
    [editPost.rejected]: (state, action) => {
      state.postsStatus = "error";
      state.error = action.error;
    },

    [likePost.fulfilled]: (state, action) => {
      state.postsStatus = "fulfilled";
      state.posts = action.payload;
      toast.success("Post Liked");
    },
    [likePost.rejected]: (state, action) => {
      state.postsStatus = "error";
      state.error = action.error;
      toast.error(`${state.error} Error. Please try again later!`);
    },

    [dislikePost.fulfilled]: (state, action) => {
      state.postsStatus = "fulfilled";
      state.posts = action.payload;
      toast.success("Post Disliked");
    },
    [dislikePost.rejected]: (state, action) => {
      state.postsStatus = "error";
      state.error = action.error;
      toast.error(`${state.error} Error. Please try again later!`);
    },

    [getAllComments.fulfilled]: (state, action) => {
      state.postsStatus = "fulfilled";
      state.posts = action.payload;
    },
    [getAllComments.rejected]: (state, action) => {
      state.postsStatus = "error";
      state.error = action.error;
    },

    [addComment.fulfilled]: (state, action) => {
      state.postsStatus = "fulfilled";
      state.posts = action.payload;
      toast.success("Comment added");
    },
    [addComment.rejected]: (state, action) => {
      state.postsStatus = "error";
      state.error = action.error;
      toast.error(`${state.error} Error. Please try again later!`);
    },

    [editComment.fulfilled]: (state, action) => {
      state.postsStatus = "fulfilled";
      state.posts = action.payload;
    },
    [editComment.rejected]: (state, action) => {
      state.postsStatus = "error";
      state.error = action.error;
    },

    [deleteComment.fulfilled]: (state, action) => {
      state.postsStatus = "fulfilled";
      state.posts = action.payload;
    },
    [deleteComment.rejected]: (state, action) => {
      state.postsStatus = "error";
      state.error = action.error;
    },
    [getAllBookmarks.pending]: (state) => {
      state.bookmarksStatus = "loading";
    },
    [getAllBookmarks.fulfilled]: (state, action) => {
      state.bookmarksStatus = "fulfilled";
      state.bookmarks = action.payload;
    },
    [getAllBookmarks.rejected]: (state, action) => {
      state.bookmarksStatus = "error";
      state.error = action.error;
    },

    [addBookmark.fulfilled]: (state, action) => {
      state.bookmarksStatus = "fulfilled";
      state.bookmarks = action.payload;
      toast.success("Post Successfully Bookmarked");
    },
    [addBookmark.rejected]: (state, action) => {
      state.bookmarksStatus = "error";
      state.error = action.error;
      toast.error(`${state.error} Error. Please try again later!`);
    },

    [removeBookmark.fulfilled]: (state, action) => {
      state.bookmarksStatus = "fulfilled";
      state.bookmarks = action.payload;
      toast.success("Bookmark Removed");
    },
    [removeBookmark.rejected]: (state, action) => {
      state.bookmarksStatus = "error";
      state.bookmarks = action.error;
      toast.error(`${state.error} Error. Please try again later!`);
    },
  },
});

export {
  getAllPosts,
  getSinglePost,
  addPost,
  editPost,
  deletePost,
  likePost,
  dislikePost,
  addComment,
  editComment,
  deleteComment,
  getAllBookmarks,
  addBookmark,
  removeBookmark,
};
export const postsReducer = postsSlice.reducer;
