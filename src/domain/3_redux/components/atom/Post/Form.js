const PostForm = ({ onCreatePost }) => {
  const addNewPost = (e) => {
    e.preventDefault();
    if (!e.target.title.value || !e.target.content.value) return;
    const title = e.target.title.value;
    const content = e.target.content.value;
    onCreatePost(title, content);
    e.target.title.value = "";
    e.target.content.value = "";
  };

  return (
    <>
      <h2>POST-FORM</h2>
      <form onSubmit={addNewPost}>
        <label>
          <input type="text" name="title" placeholder="제목" />
        </label>
        <label>
          <input type="text" name="content" placeholder="내용" />
        </label>
        <button type="submit">추가</button>
      </form>
    </>
  );
};
export default PostForm;
