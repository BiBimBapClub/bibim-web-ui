import React from 'react';
import styled from 'styled-components';
import { Col, Row } from 'antd';
import ContentWrapper from '../../components/common/ContentWrapper';
// import styled from 'styled-components';
const BarRow = styled(Row)`
  margin-bottom: 100px;
`;
const BarLeft = styled.div`
  background-color: white;
  display: flex;
  padding: 0 15px 0 15px;
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
  padding: 0 15px 0 15px;
  width: 100%;
  height: 118px;
  border-top-left-radius: 59px;
  border-bottom-left-radius: 59px;
  align-items: center;
  justify-content: space-between;
`;
const GreenBall = styled.div`
  background-color: #00ff80;
  width: 80px;
  height: 80px;
  border-radius: 40px;
`;

function ActivityIntroduction(): React.ReactElement {
  // 여기서 페이지 변경하는 로직 만들면 되지 않을까
  return (
    <ContentWrapper title="활동 소개" subTitle="비빔밥의 주요활동을 소개합니다">
      <>
        <BarRow>
          <Col span={16}>
            <BarLeft>
              <h1>프로그래밍 스터디 & 프로젝트</h1>
              <GreenBall />
            </BarLeft>
          </Col>
          <Col span={8} />
        </BarRow>
        <BarRow>
          <Col span={16} offset={8}>
            <BarRight>
              <GreenBall />
              <h1>동아리 자체 공모전 개최</h1>
            </BarRight>
          </Col>
        </BarRow>
      </>
    </ContentWrapper>
  );
}

export default ActivityIntroduction;
