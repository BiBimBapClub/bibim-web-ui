import React from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';
import ContentWrapper from '../../components/common/ContentWrapper';

// const Zoom = require('react-reveal/Zoom');
const Bounce = require('react-reveal/Bounce');

const Carousel = styled(Slider)`
  width: 100%;
  height: 540px;
`;
const WhiteLine = styled.span`
  position: absolute;
  width: 90vw;
  height: 10px;
  align-self: flex-start;
  margin-top: 280px;
  border-color: white;
  border-radius: 4px;
  background-color: white;
  z-index: 0;
`;
const WhitelineDiv = styled.div`
  width: 93vw;
  height: 15px;
`;
const BounceLine = styled(Bounce)`
  height: 12px;
  width: 100vw;
  display: flex;
  align-self: flex-start;
  justify-self: flex-start;
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
  padding-left: 35px;
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

const YearArr = [2010, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023];
const HistoryArr = [
  '동아리 설립, SKT 공모전 참여 안드로이드, FAlinux 세미나 참여',
  '안전 귀가 택시 앱 개발',
  'SKT 공모전 참여 안드로이드, FALinux 세미나 참여',
  '안전 귀가 택시 앱 개발',
  'SKT 공모전 참여 안드로이드, FAlinux 세미나 참여',
  '안전 귀가 택시 앱 개발',
  '동아리 설립, SKT 공모전 참여 안드로이드, FAlinux 세미나 참여',
  '코로나 비대면 스터디',
  '동아리 설립, SKT 공모전 참여 안드로이드, FAlinux 세미나 참여',
  '코로나 비대면 스터디',
];
function IntroductionContent(): React.ReactElement {
  // 여기서 페이지 변경하는 로직 만들면 되지 않을까
  const YearDivArr = [];
  for (let i = 0; i < YearArr.length; i += 1) {
    if (i % 2 === 0) {
      YearDivArr.push(
        <Bounce top cascade>
          <YearSpace>
            <WhiteColUP />
            <YearText>{HistoryArr[i]}</YearText>
            <YearNum>{YearArr[i]}</YearNum>
            <YearText />
          </YearSpace>
        </Bounce>,
      );
    } else {
      YearDivArr.push(
        <Bounce bottom cascade>
          <YearSpace>
            <YearText />
            <YearNum>{YearArr[i]}</YearNum>
            <WhiteColDOWN />
            <YearText>{HistoryArr[i]}</YearText>
          </YearSpace>
        </Bounce>,
      );
    }
  }
  return (
    <ContentWrapper title="동아리소개" subTitle="비빔밥 소개">
      <>
        <BounceLine left>
          <WhitelineDiv>
            <WhiteLine />
          </WhitelineDiv>
        </BounceLine>

        <YearTotalFlex>
          <Carousel
            className="slider variable-width"
            dots
            infinite
            centerPadding="180px"
            autoplay
            autoplaySpeed={4000}
            slidesToShow={8}
            slidesPerRow={1}
            slidesToScroll={1}
            speed={500}
          >
            {YearDivArr}
          </Carousel>
        </YearTotalFlex>
      </>
    </ContentWrapper>
  );
}

export default IntroductionContent;
