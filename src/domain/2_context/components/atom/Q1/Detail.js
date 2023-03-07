import { useModalContext } from "../../../../../store/2_context";
import ContextQ1Detail2 from "./Detail2";

const ContextQ1Detail = () => {
  const [isModalOpen, setIsModalOpen] = useModalContext();
  console.log(useModalContext());
  return (
    <>
      <h2>ContextQ1Detail</h2>
      {isModalOpen ? (
        <button onClick={() => setIsModalOpen(false)}>숨기기</button>
      ) : (
        <button onClick={() => setIsModalOpen(true)}>보이기</button>
      )}
      <ContextQ1Detail2 />
    </>
  );
};
export default ContextQ1Detail;
