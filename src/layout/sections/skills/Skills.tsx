import React from 'react';
import styled from 'styled-components';
import { FlexWrapper } from '../../../components/FlexWrapper';
import { SectionTitle } from '../../../components/SectionTitle';
import { Skill } from './skill/Skill';
import { Container } from '../../../components/Container';

export const Skills = () => {
  return (
    <StyledSkills>
      <Container>
        <SectionTitle>Skills</SectionTitle>
        <FlexWrapper justify={'space-between'} align={'center'} wrap={'wrap'} gap={'80px 0px'}>
          <Skill iconId={'vscode'} title={'VScode'} width={'120px'} height={'120px'} />
          <Skill iconId={'html'} title={'HTML'} width={'120px'} height={'120px'} />
          <Skill iconId={'css'} title={'CSS'} width={'120px'} height={'120px'} />
          <Skill iconId={'js'} title={'Javascript'} width={'120px'} height={'120px'} />
          <Skill iconId={'react'} title={'ReactJS'} width={'120px'} height={'120px'} />
          <Skill iconId={'redux'} title={'Redux'} width={'120px'} height={'120px'} />
          <Skill iconId={'sass'} title={'Sass'} width={'120px'} height={'120px'} />
          <Skill iconId={'bootstrap'} title={'Bootstrap'} width={'89px'} height={'120px'} />
          <Skill iconId={'git'} title={'Git'} width={'106px'} height={'120px'} />
          <Skill iconId={'github'} title={'Github'} width={'88px'} height={'120px'} />
        </FlexWrapper>
      </Container>
    </StyledSkills>
  );
};

const StyledSkills = styled.section``;
