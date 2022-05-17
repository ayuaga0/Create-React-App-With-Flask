import React from "react";
import styled from "styled-components";

const Item = styled.div`
  border-left: 1px solid rgba(229, 229, 229, 1);
  padding: 15px;
  display: flex;
  align-items: center;

  svg {
    margin-right: 10px;
  }
`;
const Text = styled.div``;

const NavItem = ({ svg, text, onClick }) => {
  return (
    <Item onClick={onClick}>
      {svg}
      <Text>{text}</Text>
    </Item>
  );
};

NavItem.defaultProps = {
    onClick: () => {}
}

export default NavItem;
