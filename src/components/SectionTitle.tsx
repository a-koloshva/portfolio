import styled from 'styled-components';
import { theme } from '../styles/Theme';

export const SectionTitle = styled.h2`
  font-family: 'Playfair Display', sans-serif;
  font-size: 48px;
  font-weight: 700;
  line-height: 72px;
  text-align: center;
  margin-bottom: 90px;

  position: relative;

  &::before {
    content: '';
    display: inline-block;
    width: 100px;
    height: 4px;
    background-color: ${theme.colors.accent};

    position: absolute;
    left: 50%;
    bottom: -4px;
    transform: translateX(-50%);
  }
`;
