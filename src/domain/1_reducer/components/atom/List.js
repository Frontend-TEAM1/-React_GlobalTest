const ReducerQ1List = ({ ingredients, onDelete }) => {
  return (
    <tbody>
      {ingredients &&
        ingredients.map((ingredient) => (
          <tr key={ingredient.id}>
            <td>{ingredient.name}</td>
            <td>{ingredient.price}</td>
            <td>
              <button onClick={() => onDelete(ingredient.id)}>삭제</button>
            </td>
          </tr>
        ))}
    </tbody>
  );
};
export default ReducerQ1List;
