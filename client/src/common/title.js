import React from "react";
import styled from "styled-components";

const ModalTitle = styled.div`
  height: 50px;
  background-color: #164D92;
  color: white;
  font-weight: 500;
  display: flex;
  align-items: center;
  padding-left: 10px;
`;

const Title = ({ children }) => {
  return <ModalTitle>{children}</ModalTitle>;
};

export default Title;
