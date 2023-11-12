import React from 'react';
import styled from 'styled-components';
import { Icon } from '../../../../components/icon/Icon';

type SkillPropsType = {
  iconId: string;
  title: string;
  width?: string;
  height?: string;
  viewBox?: string;
};

export const Skill = (props: SkillPropsType) => {
  return (
    <StyledSkill>
      <Icon
        iconId={props.iconId}
        width={props.width}
        height={props.height}
        viewBox={`0 0 ${props.width} ${props.height}`}
      />
      <SkillTitle>{props.title}</SkillTitle>
    </StyledSkill>
  );
};

const StyledSkill = styled.div`
  width: 20%;
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-wrap: wrap;
  /* padding-bottom: 80px; */
`;

const SkillTitle = styled.h3`
  text-align: center;
`;
