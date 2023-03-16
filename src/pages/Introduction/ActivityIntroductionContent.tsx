import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { Col, Row } from 'antd';
import ContentWrapper from '../../components/common/ContentWrapper';
// import styled from 'styled-components';
import openStack from '../../components/image/OpenStack1.jpeg';
import hackathon from '../../components/image/Hackathon1.jpeg';
import opParty from '../../components/image/OPParty.jpeg';
import endingParty from '../../components/image/EndingParty.png';
import algorithmStudy from '../../components/image/AlgorithmStudy.jpeg';

const Fade = require('react-reveal/Fade');

const WholeDiv = styled.div`
  width: 100vw;
`;
const spread = keyframes`
  from{
    height: 3000px
  }
  to{
    height: 120px
  }
`;
const BarRow = styled(Row)`
  margin-bottom: 100px;
  width: 100%;
  height: 120px;
  animation: ${spread} 0.5s linear;
`;
const BarLeft = styled.div`
  background-color: white;
  display: flex;
  padding: 0 15px 0 80px;
  flex-direction: row;
  width: 100%;
  height: 118px;
  border-top-right-radius: 59px;
  border-bottom-right-radius: 59px;
  align-items: center;
  justify-content: space-between;
`;
const BarRight = styled.div`
  background-color: white;
  display: flex;
  flex-direction: row;
  padding: 0 80px 0 15px;
  width: 100%;
  height: 118px;
  border-top-left-radius: 59px;
  border-bottom-left-radius: 59px;
  align-items: center;
  justify-content: space-between;
`;
const CenterH1 = styled.h1`
  margin: 0 0 0 0;
  font-size: 50px;
`;
const GreenBall = styled.div`
  background-color: #00ff80;
  width: 80px;
  height: 80px;
  border-radius: 40px;
`;
const ActivityTextArr = [
  '튜터, 팀원들과 함께하는 스터디 & 프로젝트 ',
  '동아리 자체 공모전 개최',
  '각종 동아리 친목 활동 행사',
  '학과 외의 공과대학 학생과의 교류',
  '다양한 외부 대회 프로젝트 참여',
  '취업한 선배님들과의 연계',
  '학점과 취업 모두를 생각하는 동아리',
];

function ActivityIntroduction(): React.ReactElement {
  // 여기서 페이지 변경하는 로직 만들면 되지 않을까
  const ActivityImageArr = [
    openStack,
    hackathon,
    opParty,
    endingParty,
    algorithmStudy,
    hackathon,
    openStack,
  ];
  const ActivityDivArr: any[] = [];
  const [hoverImage, setHoverImage] = useState(<div />);
  // const handleHover = (index : number) => {
  //   // 해당 index에 대한 hover 액션 처리
  //   console.log(index);
  //   setHoverImage(<img alt="" src={ActivityImageArr[index]} />);
  // };
  // const handleHoverExit = (index : number) => {
  //   // 해당 index에 대한 hover 액션 종료 처리
  //   console.log(index);
  //   setHoverImage(<div />);
  // };
  for (let i = 0; i < ActivityTextArr.length; i += 1) {
    if (i % 2 === 0) {
      ActivityDivArr.push(
        // <BarRow
        //   key={i}
        //   onMouseEnter={() => handleHover(i)}
        //   onMouseLeave={() => handleHoverExit(i)}
        // >
        <BarRow>
          <Col span={16}>
            <Fade left>
              <BarLeft>
                <CenterH1>{ActivityTextArr[i]}</CenterH1>
                <GreenBall />
              </BarLeft>
              {hoverImage && <div>{hoverImage}</div>}
            </Fade>
          </Col>
          <Col span={8} />
        </BarRow>,
      );
    } else {
      ActivityDivArr.push(
        <BarRow onMouseOver={() => {
          setHoverImage(
            <div>
              <img alt="" src={ActivityImageArr[i]} />
            </div>,
          );
        }}
        >
          <Col span={16} offset={8}>
            <Fade right>
              <BarRight>
                <GreenBall />
                <CenterH1>{ActivityTextArr[i]}</CenterH1>
              </BarRight>
            </Fade>
          </Col>
        </BarRow>,
      );
    }
  }
  return (
    <ContentWrapper title="활동 소개" subTitle="비빔밥의 주요활동을 소개합니다">
      <WholeDiv>{ActivityDivArr}</WholeDiv>
    </ContentWrapper>
  );
}

export default ActivityIntroduction;
