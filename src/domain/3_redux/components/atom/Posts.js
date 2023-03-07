import Post from "./Post/Post";

const AllPosts = ({
  posts,
  onEditPost,
  onDeletePost,
  onAddComment,
  onEditComment,
  onDeleteComment,
}) => {
  return (
    <div>
      {posts.map((post) => (
        <Post
          key={post.id}
          post={post}
          onEditPost={onEditPost}
          onDeletePost={onDeletePost}
          onAddComment={onAddComment}
          onEditComment={onEditComment}
          onDeleteComment={onDeleteComment}
        />
      ))}
    </div>
  );
};
export default AllPosts;
