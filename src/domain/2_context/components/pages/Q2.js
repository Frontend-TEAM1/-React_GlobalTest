import NavigateButton from "../../../../components/NavigateButton";
import { useUserContext } from "../../../../store/3_context";
import ContextQ2Form from "../atom/Q2/Form";
import ContextQ2Form3 from "../atom/Q2/Form3";

const ContextQ2Page = () => {
  /* 문제 2 - 2
      1. Form1에서 값을 입력하면 userList에 데이터가 추가되도록 구현해보세요
      2. Form2에서 버튼을 클릭하면 userList의 각 요소에 isEdit: true의 속성이 추가되도록 구현해보세요
      3. Form3에서 reset 버튼을 클릭하면 userList를 초기화 시키도록 구현해보세요
      4. 제출 버튼을 누르면 isEdit true인 userList만 console.log로 출력해보세요 (단, isEdit이 true인 데이터도 전역으로 관리해주세요.) 
        
      단, userList 상태 관리는 전역으로 관리하고 비즈니스 로직도 분리하기 위해 useReducer, useContext를 사용하여 구현해보세요
      (일반 state를 사용하는 문제가 아니기 때문에 전역으로 상태관리를 할 수 있도록 해주세요) 관련 로직은 src/store/3_context.js에 구현해주세요*/

  const { dispatch } = useUserContext();

  return (
    <>
      <h2>문제 2 - 2</h2>
      <ContextQ2Form />
      <ContextQ2Form3 />
      <div style={{ marginTop: "32px" }}>
        <button onClick={() => dispatch({ type: "SUBMIT" })}>SUBMIT</button>
      </div>
      <NavigateButton to={"/3_redux/q1"} />
    </>
  );
};
export default ContextQ2Page;
