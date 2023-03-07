const CommentForm = ({ onAddComment, id }) => {
  const addComment = (e) => {
    e.preventDefault();
    if (!e.target.name.value || !e.target.content.value) return;
    const name = e.target.name.value;
    const content = e.target.content.value;
    onAddComment(name, content, id);
    e.target.name.value = "";
    e.target.content.value = "";
  };
  return (
    <form onSubmit={addComment}>
      <label>
        <input type="text" name="name" placeholder="이름" />
      </label>
      <label>
        <input type="text" name="content" placeholder="내용" />
      </label>
      <button type="submit">추가</button>
    </form>
  );
};
export default CommentForm;
