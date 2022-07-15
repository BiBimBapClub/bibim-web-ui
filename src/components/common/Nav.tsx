import React from 'react';
import styled from 'styled-components';
import 'antd/dist/antd.css';
import { Col, Row } from 'antd';
import logo from '../image/bibim_logo.png';

const FlexBox = styled.div`
  margin: 15px 0 0 0;
  font-size: 24px;
  width: 100vw;
  padding: 20px;
  display: flex;
  border-bottom: 2px solid white;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
const NavCol = styled(Col)``;
const NavRow = styled(Row)`
  width: 100%;
`;

function Nav(): React.ReactElement {
  return (
    <FlexBox>
      <NavRow justify="start">
        <NavCol span={1}>
          <img src={logo} alt="" />
        </NavCol>
        <NavCol span={3} offset={4}>
          홈
        </NavCol>
        <NavCol span={3}>동아리 소개</NavCol>
        <NavCol span={3}>동아리 활동</NavCol>
        <NavCol span={3}>후기</NavCol>
        <NavCol span={3}>정보 광장</NavCol>
      </NavRow>
    </FlexBox>
  );
}

export default Nav;
