import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Col, Row } from 'antd';
import logo from '../image/bibim_logo.png';
import SubNav from './SubNav';
import HomeContent from '../../pages/Home/HomeContent';
import StudyContent from '../../pages/Activity/StudyContent';
import ArchiveContent from '../../pages/InfoForum/ArchiveContent';
import IntroductionContent from '../../pages/Introduction/IntroductionContent';
import ReviewContent from '../../pages/Review/ReviewContent';

const FlexBox = styled.div`
  margin: 0 0 0 0;
  font-size: 24px;
  width: 100vw;
  padding: 0 0 0 0;
  display: flex;
  border-bottom: 2px solid white;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
const NavCol = styled(Col)`
  &:hover,
  &:focus {
    background-color: #ffffff;
    color: #222222;
    cursor: pointer;
  }
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 0px;
  margin-bottom: 0px;
  text-align: center;
`;
const NavRow = styled(Row)`
  width: 100%;
  margin: 0 20px 0 20px;
`;
const SubCol = styled(Col)`
  height: 50px;
`;
const SubRow = styled(Row)`
  width: 100%;
  height: 52px;
  margin-top: 0px;
  margin-bottom: 0px;
`;
interface Props {
  setContent: React.Dispatch<React.SetStateAction<JSX.Element>>;
}

function Nav({ setContent }: Props): React.ReactElement {
  const [checkHovering, setCheckHovering] = useState(0);
  const [subBar, setSubBar] = useState(
    <SubNav number={checkHovering} setContent={setContent} />,
  );
  // const [checkSubHov, setCheckSubHov] = useState(0);

  useEffect(() => {
    if (checkHovering === 1) {
      setSubBar(<SubNav number={checkHovering} setContent={setContent} />);
    } else if (checkHovering === 2) {
      setSubBar(<SubNav number={checkHovering} setContent={setContent} />);
    } else if (checkHovering === 3) {
      setSubBar(<SubNav number={checkHovering} setContent={setContent} />);
    } else if (checkHovering === 4) {
      setSubBar(<SubNav number={checkHovering} setContent={setContent} />);
    } else if (checkHovering === 5) {
      setSubBar(<SubNav number={checkHovering} setContent={setContent} />);
    } else {
      setSubBar(<SubNav number={checkHovering} setContent={setContent} />);
    }
  }, [checkHovering]);
  return (
    <div>
      <FlexBox>
        <NavRow justify="start">
          <NavCol
            span={1}
            onClick={() => {
              setContent(<HomeContent />);
            }}
          >
            <img src={logo} alt="" />
          </NavCol>
          <NavCol
            span={3}
            offset={8}
            onMouseOver={() => {
              setCheckHovering(1);
            }}
            onClick={() => {
              setContent(<HomeContent />);
            }}
          >
            홈
          </NavCol>
          <NavCol
            span={3}
            onMouseOver={() => {
              setCheckHovering(2);
            }}
            onClick={() => {
              setContent(<IntroductionContent />);
            }}
          >
            동아리 소개
          </NavCol>
          <NavCol
            span={3}
            onMouseOver={() => {
              setCheckHovering(3);
            }}
            onClick={() => {
              setContent(<StudyContent />);
            }}
          >
            동아리 활동
          </NavCol>
          <NavCol
            span={3}
            onMouseOver={() => {
              setCheckHovering(4);
            }}
            onClick={() => {
              setContent(<ReviewContent />);
            }}
          >
            후기
          </NavCol>
          <NavCol
            span={3}
            onMouseOver={() => {
              setCheckHovering(5);
            }}
            onClick={() => {
              setContent(<ArchiveContent />);
            }}
          >
            정보 광장
          </NavCol>
        </NavRow>
      </FlexBox>
      <div>
        <SubRow
          justify="start"
          onMouseLeave={() => setCheckHovering(0)}
          onBlur={() => 0}
        >
          <SubCol span={24}>{subBar}</SubCol>
        </SubRow>
      </div>
    </div>
  );
}

export default Nav;
