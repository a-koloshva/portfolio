import React from 'react';
import styled from 'styled-components';
import { theme } from '../../styles/Theme';

export const Menu = (props: { menuItems: Array<string> }) => {
  return (
    <StyledMenu>
      <ul>
        {props.menuItems.map((item, index) => {
          return (
            <ListItem key={index}>
              <Link href="">{item}</Link>
            </ListItem>
          );
        })}
      </ul>
    </StyledMenu>
  );
};

const StyledMenu = styled.nav`
  ul {
    display: flex;
    gap: 48px;
  }
`;

const ListItem = styled.li``;

const Link = styled.a`
  font-family: Raleway;
  font-size: 18px;
  font-weight: 500;
  line-height: 28px;

  color: ${theme.colors.main};
`;
