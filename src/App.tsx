import React, { useState } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { Row, Col } from 'antd';
import Nav from './components/common/Nav';
import './globalStyle.css';
import HomeContent from './pages/Home/HomeContent';
import Footer from './components/common/Footer';

const GlobalStyle = createGlobalStyle`
  body{
    padding: 0;
    margin: 0;
  }`;
const BackGround = styled.div`
  background-color: #232327;
  padding: 0 0 0 0;
  margin: 0 0 0 0;
  display: block;
  width: 100vw;
  height: 100vh;
  overflow: auto;
  font-family: 'LetKO';
  color: white;
`;

const AppNav = styled(Col)`
  width: 100vw;
`;
const ContentCol = styled(Col)`
  display: flex;
  width: 100vw;
  height: 100%;
`;

function App(): React.ReactElement {
  const [content, setContent] = useState(<HomeContent />);
  return (
    <div>
      <GlobalStyle />
      <BackGround>
        {/* <Row>
          <Col span={8}>col-8</Col>
          <Col span={16}>col-16</Col>
        </Row> */}
        <Row justify="center">
          <AppNav span={24}>
            <Nav setContent={setContent} />
          </AppNav>
        </Row>
        <Row justify="center">
          <ContentCol span={22}>{content}</ContentCol>
        </Row>
        <Row justify="center">
          <ContentCol span={22}>
            <Footer setContent={setContent} />
          </ContentCol>
        </Row>
      </BackGround>
    </div>
  );
}

export default App;
