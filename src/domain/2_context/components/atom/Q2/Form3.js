import { useUserContext } from "../../../../../store/3_context";

const ContextQ2Form3 = () => {
  const { dispatch } = useUserContext();

  return (
    <div>
      <h1>Q2Form3</h1>
      <button onClick={() => dispatch({ type: "RESET" })}>RESET</button>
    </div>
  );
};
export default ContextQ2Form3;
