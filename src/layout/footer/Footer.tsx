import React from 'react';
import styled from 'styled-components';
import { Icon } from '../../components/icon/Icon';
import { FlexWrapper } from '../../components/FlexWrapper';

export default function Footer() {
  return (
    <StyledFooter>
      <FlexWrapper direction={'column'} align={'center'}>
        <SocialList>
          <SocialItem>
            <SocialLink>
              <Icon height={'21px'} width={'21px'} viewBox={'0 0 21px 21px'} iconId={'githubSvg'} />
            </SocialLink>
          </SocialItem>
          <SocialItem>
            <SocialLink>
              <Icon
                height={'21px'}
                width={'21px'}
                viewBox={'0 0 21px 21px'}
                iconId={'telegramSvg'}
              />
            </SocialLink>
          </SocialItem>
          <SocialItem>
            <SocialLink>
              <Icon height={'21px'} width={'21px'} viewBox={'0 0 21px 21px'} iconId={'vkSvg'} />
            </SocialLink>
          </SocialItem>
        </SocialList>
        <Copyright>© 2023 Andrey Koloshva, All Rights Reserved.</Copyright>
      </FlexWrapper>
    </StyledFooter>
  );
}

const StyledFooter = styled.footer`
  background-color: #e8f8df;
  min-height: 20vh;
`;

const SocialList = styled.ul`
  display: flex;
  gap: 20px;
`;

const SocialItem = styled.li``;

const SocialLink = styled.a``;

const Copyright = styled.small``;
