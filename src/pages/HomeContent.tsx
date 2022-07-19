import React from 'react';
import styled from 'styled-components';
import WrapContainer from '../components/common/WebContainer';

const TitleDiv = styled.div`
  width: 100%;
  line-height: 100%;
  font-size: 150px;
  color: #00ff80;
  display: flex;
`;

const SubTitleDiv = styled.div`
  width: 100%;
  font-size: 40px;
`;

const IntroDiv = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  margin-left: 50px;
  margin-top: 200px;
  flex-direction: column;
`;

function Content(): React.ReactElement {
  // 여기서 페이지 변경하는 로직 만들면 되지 않을까

  return (
    <WrapContainer>
      <IntroDiv>
        <TitleDiv>BiBiMBAP</TitleDiv>
        <SubTitleDiv>어쩌고 저쩌고 어쩌고 저쩌고</SubTitleDiv>
        <SubTitleDiv style={{ fontSize: '24px' }}>
          건국대학교 컴퓨터공학부 학술동아리 비빔밥
        </SubTitleDiv>
        <SubTitleDiv style={{ paddingLeft: '70vw', color: '#00ff80' }}>
          KONKUK
          <br />
          UNIVERSITY
        </SubTitleDiv>
      </IntroDiv>
    </WrapContainer>
  );
}

export default Content;
