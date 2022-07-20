import React from 'react';
import styled from 'styled-components';

const ContentDiv = styled.div`
  width: 100%;
  height: 500px;
  display: flex;
  margin-left: 50px;
  margin-top: 200px;
  flex-direction: column;
  align-content: center;
  justify-content: center;
`;
const WhiteLine = styled.span`
  width: 100%;
  height: 10px;
  border-color: white;
  border-radius: 4px;
  background-color: white;
  position: absolute;
`;
const YearSpace = styled.div`
  width: 240px;
  height: 540px;
  justify-content: center;
  align-content: center;
  z-index: 1;
`;
const YearText = styled.div`
  width: 240px;
  height: 200px;
`;
const YearNum = styled.div`
  width: 140px;
  height: 140px;
  border-radius: 70px;
  background-color: white;
  color: black;
  display: flex;
  text-align: center;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  z-index: 1;
  font-size: 23px;
`;

function IntroductionContent(): React.ReactElement {
  // 여기서 페이지 변경하는 로직 만들면 되지 않을까
  return (
    <ContentDiv>
      <WhiteLine />
      <YearSpace>
        <YearText>hihi</YearText>
        <YearNum>2010</YearNum>
        <YearText />
      </YearSpace>
    </ContentDiv>
  );
}

export default IntroductionContent;
