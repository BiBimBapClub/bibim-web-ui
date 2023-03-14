import React from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';
import ContentWrapper from '../../components/common/ContentWrapper';

// const Zoom = require('react-reveal/Zoom');
// function SampleNextArrow(props: CustomArrowProps) {
//   const { className, style, onClick } = props;
//   return (
//     <div
//       className={className}
//       style={{ ...style, display: "block", background: "red" }}
//       onClick={onClick}
//     />
//   );
// }

// function SamplePrevArrow(props: CustomArrowProps) {
//   const { className, style, onClick } = props;
//   return (
//     <div
//       className={className}
//       style={{ ...style, display: "block", background: "green" }}
//       onClick={onClick}
//     />
//   );
// }

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
  margin-left: 80px;
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
  display: flex;
  flex-direction: column;
  width: 240px;
  align-items: center;
  z-index: 3;
`;
const WhiteColUP = styled.div`
  position: absolute;
  margin-top: 185px;
  width: 15px; /* 사이즈 */
  height: 15px; /* 사이즈 */
  border-top: 5px solid #FFFFFF; /* 선 두께 */
  border-right: 5px solid #FFFFFF; /* 선 두께 */
  border-radius: 1px;
  transform: rotate(315deg); /* 각도 */
`;
const WhiteColDOWN = styled.div`
  position: absolute;
  margin-top: 345px;
  width: 15px; /* 사이즈 */
  height: 15px; /* 사이즈 */
  border-top: 5px solid #FFFFFF; /* 선 두께 */
  border-right: 5px solid #FFFFFF; /* 선 두께 */
  border-radius: 1px;
  transform: rotate(135deg);
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

const YearArr = [2010, 2015, 2016, 2017, 2018, 2019, 2020, 2022, 2023];
const HistoryArr = [
  '• 동아리 설립 •SKT 공모전 참여 •안드로이드 FAlinux 세미나 참여',
  '• 안전 귀가 택시 앱 개발 •Google Developers Hackathon Korea 참여 • IC칩을 활용한 스마트 OTP제안 프로그램 • 스마트워치 활용 헬스케어앱 • 뇌파 이용 졸음 운전 예방 앱',
  '• VR을 활용한 소화기 사용 교육 프로젝트 • 그리드 컴퓨팅을 활용한 웹서비스 사용성 • IoT 기반 아이 돌봄 서비스 개발 • 머신러닝 활용 IoT 보안 솔루션 • 정의 설계 경진대회 장려상',
  '• 비빔밥 소속 선배들의 취업 간담회 • MFC 기반 부루마블 게임 개발 • 여행 가이드 매칭 서비스 개발 • 시각 장애니 경로 안내 네비게이션 개발 • 공공 데이터 활용 지진대비처 안내 서비스 개발',
  '• 공과대학으로 소속변경 • 동아리 내 부서 편성 • 제 1회 동아리 공모전 진행',
  '• 제 2회 공모전 진행 • 외부 코딩 봉사활동 진행 • 단체 VR EXPO 참관 •제 3회 공모전 진행',
  '• 코로나 특수 비대면 위주 스터디 프로젝트 활동',
  '• 비빔밥 해커톤 개최 • 오픈스택X비빔밥 스터디',
  '• 현대 모비스 해커톤 참여',
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
            // nextArrow={<SlickArrowR/>}
          >
            {YearDivArr}
          </Carousel>
        </YearTotalFlex>
      </>
    </ContentWrapper>
  );
}

export default IntroductionContent;
