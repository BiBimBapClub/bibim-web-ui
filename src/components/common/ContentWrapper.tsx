import React from 'react';
import styled from 'styled-components';

const ContentDiv = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  margin-left: 50px;
  margin-top: 200px;
  flex-direction: column;
`;
const PageTitle = styled.div`
  align-self: center;
  height: 100%;
  font-size: 100px;
  color: #00ff80;
`;
const SubTitle = styled.div`
  font-size: 24px;
  align-self: center;
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
      <PageTitle>{title}</PageTitle>
      {subTitle && <SubTitle>{subTitle}</SubTitle>}
      {children}
    </ContentDiv>
  );
}

export default ContentWrapper;
