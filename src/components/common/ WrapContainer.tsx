import React from 'react';
import styled from 'styled-components';

const BiBimDiv = styled.div`
  margin: 0;
  background-color: #232327;
`;

const MenuDiv = styled.div`
  color: white;
  background-color: #232327;
  display: flex;
  &:hover {
  }
`;

interface Props {
  children: React.ReactElement;
}

function WebContainer({ children }: Props): React.ReactElement {
  const tabArr = ['홈', '동아리 소개', '동아리 활동', '후기', '정보 광장'];

  const menuItem = tabArr.map((menuName) => (
    <div className="menu-item">{menuName}</div>
  ));

  return (
    <BiBimDiv>
      <div id="menu">
        <div className="logo">Logo</div>
        <MenuDiv>{menuItem}</MenuDiv>
      </div>
      {children}
      {/* <Footer /> */}
    </BiBimDiv>
  );
}

export default WebContainer;
