import { useEffect, useState } from "react";
import { BiCommentDetail } from "react-icons/bi";
import { AiFillLike } from "react-icons/ai";
import { BsBookmark } from "react-icons/bs";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getSinglePost, addComment } from "../../features/post-slice";
import { LeftNav, RightNav, CommentModal } from "../../components/index";
import "./single-post.css";

export function SinglePost() {
  const postId = useParams();
  const dispatch = useDispatch();
  const singlePost = useSelector((store) => store.posts.singlePost);
  const token = useSelector((store) => store.auth.token);
  const [commentModal, setCommentModal] = useState(false);
  const [postModal, setPostModal] = useState(false);

  useEffect(() => {
    dispatch(getSinglePost(postId));
  }, []);

  const { avatarURL, comments, content, likes, _id } = singlePost;

  return (
    <main>
      <LeftNav postModal={postModal} setPostModal={setPostModal} />
      <div>
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
        <h2>Post</h2>
        <div>
          <img src={avatarURL} />
          {content}
        </div>
        <div>
          <div>
            <BiCommentDetail
              title="comment"
              onClick={() => setCommentModal(true)}
            />
            {comments.length > 0 && comments.length}
          </div>
          <div>
            <div>
              <AiFillLike />
              {likes.likeCount}
            </div>
          </div>

          <BsBookmark title="bookmark" />
        </div>
        {singlePost.comments.map(({ text, avatarURL, _id }) => (
          <div key={_id}>
            <div>
              <img src={avatarURL} />
              {text}
            </div>
            <div>
              <div>
                <AiFillLike />
                {likes.likeCount}
              </div>
            </div>
          </div>
        ))}
      </div>
      <RightNav />
    </main>
  );
}
