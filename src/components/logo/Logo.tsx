import * as React from 'react';
import { Icon } from '../icon/Icon';
import styled from 'styled-components';
import { theme } from '../../styles/Theme';

export const Logo = () => {
  return (
    <a href="">
      <StyledLogo>Andrey Koloshva</StyledLogo>
    </a>
  );
};

const StyledLogo = styled.span`
  font-family: Comfortaa;
  font-size: 18px;
  font-weight: 700;
  line-height: 180%;

  color: ${theme.colors.main};
`;
