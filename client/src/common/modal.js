import React from "react";
import styled from "styled-components";
import { Close } from "../assets";
import Title from "./title";

const OverlayContainer = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 10;
  background-color: rgb(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ModalContainer = styled.div`
  min-width: 500px;
  background-color: white;
  position: relative;

`;

const ModalClose = styled.span`
  position: absolute;
  right: 5px;
  top: 10px;
  cursor: pointer;
`;

const Modal = ({ children, onModalClose }) => {
  return (
    <OverlayContainer>
      <ModalContainer>
        <ModalClose onClick={onModalClose}>
          <Close />
        </ModalClose>
        {children}
      </ModalContainer>
    </OverlayContainer>
  );
};

Modal.Title = Title;

export default Modal;
