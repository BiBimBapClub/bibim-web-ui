import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Col, Row } from 'antd';
import logo from '../image/bibim_logo.png';
import SubNav from './SubNav';
import HomeContent from '../../pages/HomeContent';
import ActiveContent from '../../pages/ActiveContent';
import ForumContent from '../../pages/ForumContent';
import IntroductionContent from '../../pages/IntroductionContent';
import ReviewContent from '../../pages/ReviewContent';

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
  const [subBar, setSubBar] = useState(<SubNav number={checkHovering} />);
  const [checkSubHov, setCheckSubHov] = useState(0);
  useEffect(() => {
    if (checkHovering === 1) {
      setSubBar(<SubNav number={checkHovering} />);
    } else if (checkHovering === 2) {
      setSubBar(<SubNav number={checkHovering} />);
    } else if (checkHovering === 3) {
      setSubBar(<SubNav number={checkHovering} />);
    } else if (checkHovering === 4) {
      setSubBar(<SubNav number={checkHovering} />);
    } else if (checkHovering === 5) {
      setSubBar(<SubNav number={checkHovering} />);
    } else {
      setSubBar(<SubNav number={checkHovering} />);
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
              setCheckSubHov(1);
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
              setCheckSubHov(2);
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
              setCheckSubHov(3);
            }}
            onClick={() => {
              setContent(<ActiveContent />);
            }}
          >
            동아리 활동
          </NavCol>
          <NavCol
            span={3}
            onMouseOver={() => {
              setCheckHovering(4);
              setCheckSubHov(4);
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
              setCheckSubHov(5);
            }}
            onClick={() => {
              setContent(<ForumContent />);
            }}
          >
            정보 광장
          </NavCol>
        </NavRow>
      </FlexBox>
      <div
        onMouseOver={() => setCheckHovering(checkSubHov)}
        onFocus={() => 0}
        onMouseOut={() => setCheckHovering(0)}
        onBlur={() => 0}
      >
        <SubRow justify="start">
          <SubCol span={24}>{subBar}</SubCol>
        </SubRow>
      </div>
    </div>
  );
}

export default Nav;
