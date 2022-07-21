import React from 'react';
import styled from 'styled-components';

const ContentDiv = styled.div`
  width: 100%;
  height: 500px;
  display: flex;
  margin-left: 50px;
  margin-top: 200px;
  flex-direction: column;
`;
const PageTitle = styled.div`
  align-self: center;
  padding-bottom: 40px;
  font-size: 100px;
  color: #00ff80;
`;
function HonorOfBBBContent(): React.ReactElement {
  // 여기서 페이지 변경하는 로직 만들면 되지 않을까
  return (
    <ContentDiv>
      <PageTitle>Honor OF BBB</PageTitle>
    </ContentDiv>
  );
}

export default HonorOfBBBContent;
