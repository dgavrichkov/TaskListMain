import { ReactNode } from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";

type ModalProps = {
  isOpen: boolean;
  message: string;
  onClose: () => void;
  children?: ReactNode;
};

export const Modal = ({ isOpen, message, onClose, children }: ModalProps) => {
  if (!isOpen) return null;
  return ReactDOM.createPortal(
    <StyledWrap className="modal">
      <p className="modal__message">{message}</p>
      {children}
      <button className="modal__ok" onClick={onClose}>
        OK
      </button>
    </StyledWrap>,
    document.body
  );
};

const StyledWrap = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 50vw;
  height: 50vw;
  border: 1px solid black;
  background: white;
  border-radius: 20px;
  padding: 40px;
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;
  overflow-y: auto;
`;
