import { useModalContext } from "../../../../../store/2_context";

const ContextQ1Detail2 = () => {
  const [isModalOpen, setIsModalOpen] = useModalContext();
  return (
    <>
      <h2>ContextQ1Detail2</h2>
      {isModalOpen ? (
        <button onClick={() => setIsModalOpen(false)}>숨기기</button>
      ) : (
        <button onClick={() => setIsModalOpen(true)}>보이기</button>
      )}
    </>
  );
};
export default ContextQ1Detail2;
