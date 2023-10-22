import React from 'react';
import styled from 'styled-components';
import photo from '../../../assets/images/avatar.webp';
import { FlexWrapper } from '../../../components/FlexWrapper';
import { Icon } from '../../../components/icon/Icon';

export const Main = () => {
  return (
    <StyledMain>
      <FlexWrapper align={'center'} justify={'space-around'}>
        <div>
          <MainTitle>A Web Developer.</MainTitle>
          <MainName>Andrey Koloshva</MainName>
          <MainText>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia
            consequat duis enim velit mollit. Exercitation veniam consequat sunt.
          </MainText>
        </div>

        <Photo src={photo} alt="" />
      </FlexWrapper>

      <Arrow href="">
        <Icon iconId={'arrowSvg'} />
      </Arrow>
    </StyledMain>
  );
};

const StyledMain = styled.div`
  min-height: 100vh;
  background-color: #a5cfb2;
`;

const MainTitle = styled.h1`
  color: red;
`;

const MainName = styled.h2`
  color: green;
`;

const MainText = styled.p`
  color: blue;
`;

const Photo = styled.img`
  width: 533px;
  object-fit: cover;
`;

const Arrow = styled.a`
  display: block;
  text-align: center;
`;
