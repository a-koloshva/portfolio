import React from 'react';
import styled from 'styled-components';
import photo from '../../../assets/images/avatar.webp';
import { FlexWrapper } from '../../../components/FlexWrapper';
import { Icon } from '../../../components/icon/Icon';
import { Container } from '../../../components/Container';

export const Main = () => {
  return (
    <StyledMain>
      <Container>
        <FlexWrapper align={'center'} justify={'space-between'}>
          <div>
            <MainTitle>A Web Developer.</MainTitle>
            <MainName>Andrey Koloshva</MainName>
            <MainText>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit
              officia consequat duis enim velit mollit. Exercitation veniam consequat sunt.
            </MainText>
          </div>

          <Photo src={photo} alt="" />
        </FlexWrapper>
        <div>
          <Arrow href="">
            <Icon iconId={'arrowSvg'} />
          </Arrow>
        </div>
      </Container>
    </StyledMain>
  );
};

const StyledMain = styled.section`
  min-height: 100vh;
  display: flex;
`;

const MainTitle = styled.h1``;

const MainName = styled.h2``;

const MainText = styled.p``;

const Photo = styled.img`
  width: 533px;
  object-fit: cover;
`;

const Arrow = styled.a``;
