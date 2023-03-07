import { useRef, useState } from "react";
import Comment from "../Comment/Comment";
import CommentForm from "../Comment/Form";
import UserCard from "../UserCard/Card";

const Post = ({ post, onEditPost, onDeletePost, onAddComment, onEditComment, onDeleteComment }) => {
  const [editing, setEditing] = useState(false);
  const newPostContent = useRef();

  const onEditClick = () => {
    setEditing((editing) => !editing);
    if (editing) {
      onEditPost(post.id, newPostContent.current.value);
    }
  };

  // onChange={(e) => (newPostContent.current.value = e.target.value)}

  return (
    <div style={{ border: "1px solid #999", paddingTop: "10px" }}>
      {post.myPost && (
        <button type="button" onClick={onEditClick}>
          {editing ? "저장" : "수정"}
        </button>
      )}
      {post.myPost && (
        <button type="button" onClick={() => onDeletePost(post.User.id)}>
          삭제
        </button>
      )}
      <h2>--PostTitle--</h2>
      <h2>{post.title}</h2>
      <UserCard user={post.User} />
      <h2>--PostContent--</h2>
      {editing ? (
        <textarea ref={newPostContent} defaultValue={post.content}></textarea>
      ) : (
        <p>{post.content}</p>
      )}
      <CommentForm onAddComment={onAddComment} id={post.id} />
      <div
        style={{
          display: "table",
          borderCollapse: "collapse",
          border: "1px solid #000",
        }}
      >
        {post.Comments &&
          post.Comments.map((comment) => (
            <Comment
              key={comment.id}
              comment={comment}
              id={post.id}
              onEditComment={onEditComment}
              onDeleteComment={onDeleteComment}
            />
          ))}
      </div>
    </div>
  );
};
export default Post;
