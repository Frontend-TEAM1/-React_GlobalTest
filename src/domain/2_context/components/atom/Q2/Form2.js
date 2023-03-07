import { useUserContext } from "../../../../../store/3_context";

const ContextQ2Form2 = () => {

  const { dispatch } = useUserContext();

  return (
    <div>
      <h1>Q2Form2</h1>
      <button onClick={() => dispatch({ type: "ADD_EDIT_PROP" })}>STATUS 추가</button>
    </div>
  );
};
export default ContextQ2Form2;
