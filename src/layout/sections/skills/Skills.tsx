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
        <FlexWrapper justify={'space-between'} align={'center'} wrap={'wrap'}>
          <Skill iconId={'vscode'} title={'VScode'} width={'112px'} height={'120px'} />
          <Skill iconId={'html'} title={'HTML'} width={'120px'} height={'120px'} />
          <Skill iconId={'css'} title={'CSS'} width={'120px'} height={'120px'} />
          <Skill iconId={'js'} title={'Javascript'} width={'120px'} height={'120px'} />
          <Skill iconId={'react'} title={'ReactJS'} width={'113px'} height={'120px'} />
          <Skill iconId={'react'} title={'ReactJS'} />
        </FlexWrapper>
      </Container>
    </StyledSkills>
  );
};

const StyledSkills = styled.section``;
