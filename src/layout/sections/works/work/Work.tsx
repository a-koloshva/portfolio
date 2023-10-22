import React from 'react';
import styled from 'styled-components';

type WorkPropsType = {
  title: string;
  text: string;
  src: string;
};

export const Work = (props: WorkPropsType) => {
  return (
    <StyledWork>
      <Image src={props.src} alt="123" />
      <Title>{props.title}</Title>
      <Text>{props.text}</Text>
      <Link href={'#'}>code</Link>
      <Link href={'#'}>demo</Link>
    </StyledWork>
  );
};

const StyledWork = styled.div`
  background-color: #c7e6b2;
  max-width: 522px;
  width: 100%;
`;

const Image = styled.img`
  width: 100%;
  height: 388px;
  object-fit: cover;
`;

const Title = styled.h3``;

const Text = styled.p``;

const Link = styled.a``;
