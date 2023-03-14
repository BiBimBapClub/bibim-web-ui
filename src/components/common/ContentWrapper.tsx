import React from 'react';
import styled from 'styled-components';

const Fade = require('react-reveal/Fade');

const ContentDiv = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 100px;
`;
const PageTitle = styled.div`
  height: 100%;
  font-size: 100px;
  color: #00ff80;
  text-shadow:1px 1px white, -1px -1px #666;
`;
const SubTitle = styled.div`
  font-size: 24px;
  color: white;
  margin-bottom: 50px;
`;

interface Props {
  title: string;
  subTitle: string;
  children: JSX.Element;
}

function ContentWrapper({
  title,
  subTitle,
  children,
}: Props): React.ReactElement {
  return (
    <ContentDiv>
      <Fade up>
        <PageTitle>{title}</PageTitle>
        {subTitle && <SubTitle>{subTitle}</SubTitle>}
      </Fade>
      {children}
    </ContentDiv>
  );
}

export default ContentWrapper;
