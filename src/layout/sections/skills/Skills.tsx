import React from 'react';
import styled from 'styled-components';
import { FlexWrapper } from '../../../components/FlexWrapper';
import { SectionTitle } from '../../../components/SectionTitle';
import { Skill } from './skill/Skill';

export const Skills = () => {
  return (
    <StyledSkills>
      <SectionTitle>Skills</SectionTitle>
      <FlexWrapper justify={'space-between'} align={'center'} wrap={'wrap'}>
        <Skill iconId={'jsSvg'} title={'Javascript'} />
        <Skill iconId={'tsSvg'} title={'Typescript'} />
        <Skill iconId={'reactSvg'} title={'ReactJS'} />
        <Skill iconId={'jsSvg'} title={'Javascript'} />
        <Skill iconId={'tsSvg'} title={'Typescript'} />
        <Skill iconId={'reactSvg'} title={'ReactJS'} />
      </FlexWrapper>
    </StyledSkills>
  );
};

const StyledSkills = styled.section`
  min-height: 100vh;
`;
