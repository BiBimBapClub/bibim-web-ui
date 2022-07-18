import React from 'react';
import styled from 'styled-components';
import { Col, Row } from 'antd';

const SubNavCol = styled(Col)`
  &:hover,
  &:focus {
    background-color: #000000;
    color: #eeeeee;
  }
  background-color: #ffffff;
  color: black;
  font-size : 12px;
  text-align : center;
  .
  .
`;
const SubNavRow = styled(Row)`
  width: 100vw;
`;
interface Props {
  number: number;
}

function SubNav({ number }: Props): React.ReactElement {
  if (number === 1) {
    console.log(number);
    return (
      <SubNavRow>
        <SubNavCol span={24}>11111111111</SubNavCol>
      </SubNavRow>
    );
  }
  if (number === 2) {
    return (
      <SubNavRow>
        <SubNavCol span={24}>222222222222</SubNavCol>
      </SubNavRow>
    );
  }
  if (number === 3) {
    return (
      <SubNavRow>
        <SubNavCol span={24}>3333333333333</SubNavCol>
      </SubNavRow>
    );
  }
  if (number === 4) {
    return (
      <SubNavRow>
        <SubNavCol span={24}>444444444444</SubNavCol>
      </SubNavRow>
    );
  }
  if (number === 5) {
    return (
      <SubNavRow>
        <SubNavCol span={24}>5555555555555555</SubNavCol>
      </SubNavRow>
    );
  }
  return <span />;
}

export default SubNav;
