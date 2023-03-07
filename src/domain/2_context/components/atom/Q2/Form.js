import { useUserContext } from "../../../../../store/3_context";
import ContextQ2Form2 from "./Form2";

const ContextQ2Form = () => {
  const { dispatch } = useUserContext();

  const addUser = (e) => {
    e.preventDefault();
    if (!e.target.name.value || !e.target.nickName.value) return;
    dispatch({
      type: "ADD_to_LIST",
      payload: {
        name: e.target.name.value,
        nickName: e.target.nickName.value,
      },
    });
    e.target.name.value = "";
    e.target.nickName.value = "";
  };

  return (
    <form onSubmit={addUser}>
      <h1>Q2Form</h1>
      <input placeholder="name" name="name" />
      <input placeholder="nick-name" name="nickName" />
      <button>추가</button>
      <ContextQ2Form2 />
    </form>
  );
};
export default ContextQ2Form;
