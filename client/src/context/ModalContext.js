import { createContext, useState } from "react";

export const ModalContext = createContext();

export const ModalContextProvider = ({ children }) => {
  const [renderModal, setRenderModal] = useState(false);

  const toggleModal = () => {
    setRenderModal((prev) => !prev);
  };

  return (
    <ModalContext.Provider value={{ renderModal, toggleModal }}>
      {children}
    </ModalContext.Provider>
  );
};
