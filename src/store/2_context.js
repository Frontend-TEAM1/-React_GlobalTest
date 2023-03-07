import { createContext, useContext, useState } from "react";

export const ModalContext = createContext();
export const useModalContext = () => useContext(ModalContext);

const ModalProvider = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <ModalContext.Provider value={[isModalOpen, setIsModalOpen]}>{children}</ModalContext.Provider>
  );
};

export default ModalProvider;
