import React from 'react';
import styled from 'styled-components';
import { Col, Row } from 'antd';

const SubNavCol = styled(Col)`
  &:hover,
  &:focus {
    background-color: #000000;
    color: #eeeeee;
    cursor: pointer;
  }
  background-color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  color: black;
  font-size: 18px;
  text-align: center;
`;
const SubNavRow = styled(Row)`
  width: 100vw;
  height: 50px;
`;
interface Props {
  number: number;
}

function SubNav({ number }: Props): React.ReactElement {
  const subArr = [
    ['동아리 연혁', '조직도', '활동소개', '명예의 전당'],
    ['스터디', '프로젝트'],
    ['후기내용'],
    ['자료실', 'Q&A', '대회 정보'],
  ];
  let subLen = 0;
  let colSpan = 0;
  let subMenu;
  if (number > 1) {
    subLen = subArr[number - 2].length;
    colSpan = 24 / subLen;
    subMenu = subArr[number - 2].map((subName) => (
      <SubNavCol span={colSpan}>{subName}</SubNavCol>
    ));
  }
  if (number === 2) {
    return <SubNavRow>{subMenu}</SubNavRow>;
  }
  if (number === 3) {
    return <SubNavRow>{subMenu}</SubNavRow>;
  }
  if (number === 4) {
    return <SubNavRow>{subMenu}</SubNavRow>;
  }
  if (number === 5) {
    return <SubNavRow>{subMenu}</SubNavRow>;
  }
  return <span />;
}

export default SubNav;
