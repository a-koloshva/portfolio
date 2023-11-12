import styled, { css } from 'styled-components';
import { theme } from '../styles/Theme';

type ButtonPropsType = {
  primary?: boolean;
  outlined?: boolean;
};

export const Button = styled.button<ButtonPropsType>`
  border: none;
  border-radius: 8px;
  padding: 8px 24px;
  font-family: Roboto;
  font-size: 18px;
  font-weight: 500;
  line-height: 150%;

  ${(props) =>
    props.primary &&
    css<ButtonPropsType>`
      background-color: ${theme.colors.accent};
      color: ${theme.colors.main};
    `}

  ${(props) =>
    props.outlined &&
    css<ButtonPropsType>`
      background-color: transparent;
      color: ${theme.colors.main};
      border: 2px solid ${theme.colors.main};
    `}
`;
