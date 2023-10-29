import React from 'react';
import styled from 'styled-components';
import photo from '../../../assets/images/avatar.webp';
import { FlexWrapper } from '../../../components/FlexWrapper';
import { Container } from '../../../components/Container';
import { Button } from '../../../components/Button';
import { theme } from '../../../styles/Theme';

export const Main = () => {
  return (
    <StyledMain>
      <Container>
        <FlexWrapper align={'center'} justify={'space-between'}>
          <MainContent>
            <MainTitle>FrontEnd Developer</MainTitle>
            <MainName>Hello, my name is Andrey Koloshva</MainName>
            <MainText>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit
              officia consequat duis enim velit mollit. Exercitation veniam consequat sunt.
            </MainText>
            <ButtonWrapper>
              <Button as="a" href={'#'} primary>
                Projects
              </Button>
              <Button as="a" href={'#'} outlined>
                LinkedIn
              </Button>
            </ButtonWrapper>
          </MainContent>

          <Photo src={photo} alt="" />
        </FlexWrapper>
      </Container>
    </StyledMain>
  );
};

const StyledMain = styled.section`
  min-height: 100vh;
  display: flex;
`;

const MainContent = styled.div`
  max-width: 508px;
`;

const MainTitle = styled.h1`
  font-family: Nunito;
  font-size: 20px;
  font-weight: 700;
  text-transform: uppercase;
  color: ${theme.colors.accentText};
  margin-bottom: 12px;
`;

const MainName = styled.h2`
  font-family: Roboto;
  font-size: 64px;
  font-weight: 700;
  color: #333333;
`;

const MainText = styled.p`
  font-family: Nunito;
  font-size: 18px;
  font-weight: 400;
  line-height: 150%;
  color: ${theme.colors.text};
  margin: 32px 0;
`;

const ButtonWrapper = styled.div`
  display: flex;
  gap: 12px;
`;

const Photo = styled.img`
  width: 533px;
  object-fit: cover;
`;
