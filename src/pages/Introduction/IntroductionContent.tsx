import React from 'react';
import styled from 'styled-components';
import ContentWrapper from '../../components/common/ContentWrapper';

const WhiteLine = styled.span`
  width: 100%;
  height: 10px;
  margin-top: 420px;
  border-color: white;
  border-radius: 4px;
  background-color: white;
  position: absolute;
  z-index: 0;
`;
const YearTotalFlex = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const YearSpace = styled.div`
  width: 240px;
  height: 540px;
  z-index: 3;
`;
const WhiteColUP = styled.div`
  position: absolute;
  margin-top: 120px;
  margin-left: 70px;
  width: 6px;
  height: 80px;
  border-left: 3px dotted white;
`;
const WhiteColDOWN = styled.div`
  position: absolute;
  margin-bottom: 120px;
  margin-left: 70px;
  width: 6px;
  height: 80px;
  border-left: 3px dotted white;
`;
const YearText = styled.div`
  width: 240px;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
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
const YearArr = [2010, 2015, 2016, 2017, 2018, 2019, 2020, 2021];
const HistoryArr = [
  '동아리 설립, SKT 공모전 참여 안드로이드, FAlinux 세미나 참여',
  '안전 귀가 택시 앱 개발',
  'SKT 공모전 참여 안드로이드, FALinux 세미나 참여',
  '안전 귀가 택시 앱 개발',
  'SKT 공모전 참여 안드로이드, FAlinux 세미나 참여',
  '안전 귀가 택시 앱 개발',
  '동아리 설립, SKT 공모전 참여 안드로이드, FAlinux 세미나 참여',
  '코로나 비대면 스터디',
];
function IntroductionContent(): React.ReactElement {
  // 여기서 페이지 변경하는 로직 만들면 되지 않을까
  const YearDivArr = [];
  for (let i = 0; i < YearArr.length; i += 1) {
    if (i % 2 === 0) {
      YearDivArr.push(
        <YearSpace>
          <WhiteColUP />
          <YearText>{HistoryArr[i]}</YearText>
          <YearNum>{YearArr[i]}</YearNum>
          <YearText />
        </YearSpace>,
      );
    } else {
      YearDivArr.push(
        <YearSpace>
          <YearText />
          <YearNum>{YearArr[i]}</YearNum>
          <WhiteColDOWN />
          <YearText>{HistoryArr[i]}</YearText>
        </YearSpace>,
      );
    }
  }
  return (
    <ContentWrapper title="동아리소개" subTitle="비빔밥 소개">

      <>
        <WhiteLine />
        <YearTotalFlex>{YearDivArr}</YearTotalFlex>
      </>
    </ContentWrapper>
  );
}

export default IntroductionContent;
