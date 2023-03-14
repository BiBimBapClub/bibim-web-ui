import React from 'react';
import styled from 'styled-components';

const Fade = require('react-reveal/Fade');

const TitleDiv = styled.div`
  width: 100%;
  line-height: 100%;
  font-size: 150px;
  color: #00ff80;
  text-shadow:2px 2px white, -2px -2px #666;
  display: flex;
`;

const SubTitleDiv = styled.div`
  width: 100%;
  font-size: 40px;
`;

const HomeDiv = styled.div`
  width: 100%;
  height: 500px;
  display: flex;
  margin-left: 50px;
  margin-top: 200px;
  flex-direction: column;
`;

function Content(): React.ReactElement {
  // 여기서 페이지 변경하는 로직 만들면 되지 않을까

  return (
    <Fade up>
      <HomeDiv>
        <TitleDiv>
          BiBiMBAP
          <small>beta</small>
        </TitleDiv>
        <SubTitleDiv>당신은 오늘부터 코딩 고수</SubTitleDiv>
        <SubTitleDiv style={{ fontSize: '24px' }}>
          건국대학교 컴퓨터공학부 학술동아리 비빔밥
        </SubTitleDiv>
        <SubTitleDiv style={{ paddingLeft: '70vw', color: '#00ff80' }}>
          KONKUK
          <br />
          UNIVERSITY
        </SubTitleDiv>
      </HomeDiv>
    </Fade>
  );
}

export default Content;
