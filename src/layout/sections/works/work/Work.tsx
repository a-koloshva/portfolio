import React from 'react';
import styled from 'styled-components';
import { Button } from '../../../../components/Button';
import { theme } from '../../../../styles/Theme';

type WorkPropsType = {
  title: string;
  text: string;
  src: string;
};

export const Work = (props: WorkPropsType) => {
  return (
    <StyledWork>
      <WorkContent>
        <Title>{props.title}</Title>
        <Text>{props.text}</Text>
        <Button as="a" href="#" round>
          View Project
        </Button>
      </WorkContent>
      <Image src={props.src} alt="123" />
    </StyledWork>
  );
};

const StyledWork = styled.div`
  background-color: #c7e6b2;
  width: 100%;
  display: flex;
  border-radius: 24px;
  overflow: hidden;
`;

const WorkContent = styled.div`
  max-width: 400px;
  width: 50%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

const Image = styled.img`
  width: 50%;
  height: 530px;
  object-fit: cover;
`;

const Title = styled.h3`
  font-family: Playfair Display;
  font-size: 40px;
  font-weight: 700;
  line-height: 150%;
  text-transform: capitalize;
`;

const Text = styled.p`
  font-family: Nunito;
  font-size: 18px;
  font-weight: 400;
  line-height: 150%;
  margin: 15px 0;
  color: ${theme.colors.text};
`;
