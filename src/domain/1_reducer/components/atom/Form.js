const Q1Form = ({ onSubmit }) => {
  const onClickBtn = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const price = e.target.price.value;
    if (!name || !price) return;

    onSubmit(name, price);
    e.target.name.value = "";
    e.target.price.value = "";
  };

  return (
    <form onSubmit={onClickBtn}>
      <label>
        <input type="text" name="name" placeholder="재료" />
      </label>
      <label>
        <input type="number" name="price" placeholder="가격" />
      </label>
      <button type="submit">추가</button>
    </form>
  );
};
export default Q1Form;
