import React from 'react';
import styled from 'styled-components';
import { Logo } from '../../components/logo/Logo';
import { Menu } from '../../components/menu/Menu';

const items = ['Home', 'About Me', 'Skills', 'Projects', 'Contacts'];

export const Header = () => {
  return (
    <StyledHeader>
      <Logo />
      <Menu menuItems={items} />
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  background-color: #769688;
  display: flex;
  justify-content: space-between;
`;
