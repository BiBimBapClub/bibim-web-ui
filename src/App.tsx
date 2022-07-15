import React from 'react';
import styled from 'styled-components';
import { Row, Col } from 'antd';
import 'antd/dist/antd.css';
import Nav from './components/common/Nav';
import './globalStyle.css';
import ContentPage from './pages/Content';

const BackGround = styled.div`
  background-color: #232327;
  padding 0 0 0 0;
  margin 0 0 0 0;
  display : block;
  width: 100%;
  height: 100vh;
  font-family: 'LetKO';
  color: white;
`;

const AppNav = styled(Col)`
  width: 100vw;
`;
const Content = styled(Col)`
  display: flex;
  width: 100vw;
`;
function App(): React.ReactElement {
  return (
    <div>
      <BackGround>
        {/* <Row>
          <Col span={8}>col-8</Col>
          <Col span={16}>col-16</Col>
        </Row> */}
        <Row justify="center">
          <AppNav span={20}>
            <Nav />
          </AppNav>
          <AppNav span={4}> </AppNav>
        </Row>
        <Row justify="center">
          <Content span={22}>
            <ContentPage />
          </Content>
        </Row>
      </BackGround>
    </div>
  );
}

export default App;
