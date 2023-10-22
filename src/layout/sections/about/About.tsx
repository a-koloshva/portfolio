import React from 'react';
import styled from 'styled-components';
import { SectionTitle } from '../../../components/SectionTitle';

export const About = () => {
  return (
    <StyledAbout>
      <SectionTitle>About Me</SectionTitle>
      <StyledText>
        The long barrow was built on land previously inhabited in the Mesolithic period. It
        consisted of a sub-rectangular earthen tumulus, estimated to have been 15 metres (50 feet)
        in length, with a chamber built from sarsen megaliths on its eastern end. Both inhumed and
        cremated human remains were placed within this chamber during the Neolithic period,
        representing at least nine or ten individuals.
      </StyledText>
    </StyledAbout>
  );
};

const StyledAbout = styled.section`
  min-height: 100vh;
  background-color: #ccb686;
`;

const StyledText = styled.p`
  color: green;
`;
