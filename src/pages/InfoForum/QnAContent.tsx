import React, { useState } from 'react';
import styled from 'styled-components';
import ContentWrapper from '../../components/common/ContentWrapper';
// import styled from 'styled-components';
const Fade = require('react-reveal/Fade');

const QAList = [
  [
    'Q1. 2학기 부원 모집은 어제부터인가요?',
    'A1. 2학기 부원 모집은 9월 1일 부터입니다.',
  ],
  [
    'Q2. 회장님ㅇ느 뭘 먹어서 그렇게 잘 생기셨나요??',
    'A2. 2학기 부원 모집은 9월 1일 부터입니다.',
  ],
  [
    'Q3. 12학기 부원 모집은 어제부터인가요?',
    'A3. 12학기 부원 모집은 9월 1일 부터입니다.',
  ],
  [
    'Q4. 22학기 부원 모집은 어제부터인가요?',
    'A4. 222학기 부원 모집은 9월 1일 부터입니다.',
  ],
];
const QASpace = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const QBar = styled.div`
  width: 581px;
  height: 58px;
  display: flex;
  margin-top: 30px;
  padding: 0 15px 0 15px;
  border-radius: 29px;
  background-color: black;
  cursor: pointer;
  color: white;
  align-items: center;
  justify-content: space-between;
`;
const ABar = styled.div`
  width: 581px;
  height: 58px;
  display: none;
  padding: 0 15px 0 15px;
  margin-top: 30px;
  border-radius: 29px;
  background-color: white;
  color: black;
  align-items: center;
  justify-content: start;
`;
const AID = document.getElementById('A1');
function SetDisplay() {
  if (AID?.style.display === 'none') {
    AID.style.display = 'flex';
  } else if (AID?.style.display === 'flex') {
    AID.style.display = 'none';
  }
}
function QnAContent(): React.ReactElement {
  // 여기서 페이지 변경하는 로직 만들면 되지 않을까
  const [arrow, setArrow] = useState('▼');
  const QA = [];
  QA.push(
    QAList.map((QAName) => (
      <div>
        <QBar
          onClick={() => {
            setArrow('▲');
            SetDisplay();
            console.log('hihi');
          }}
        >
          <div>{QAName[0]}</div>
          <div>{arrow}</div>
        </QBar>
        <ABar id="A1">{QAName[1]}</ABar>
      </div>
    )),
  );
  return (
    <ContentWrapper title="Q&A" subTitle="">
      <Fade up>
        <QASpace>{QA}</QASpace>
      </Fade>
    </ContentWrapper>
  );
}

export default QnAContent;
