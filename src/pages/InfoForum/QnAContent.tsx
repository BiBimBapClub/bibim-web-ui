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
  display: flex;
  padding: 0 15px 0 15px;
  margin-top: 30px;
  border-radius: 29px;
  background-color: white;
  color: black;
  align-items: center;
  justify-content: start;
`;

function QnAContent(): React.ReactElement {
  // 여기서 페이지 변경하는 로직 만들면 되지 않을까
  const [arrow, setArrow] = useState(['▼', '▼', '▼', '▼']);
  const [answer, setAnswer] = useState([<div />, <div />, <div />, <div />]);

  const QA = [];

  QA.push(
    QAList.map((QAName, i) => (
      <div>
        <QBar
          onClick={() => {
            const copyArrow = [...arrow];
            const copyAnswer = [...answer];
            if (copyArrow[i] === '▼') {
              copyArrow[i] = '▲';
              copyAnswer.splice(i, 1, <ABar>{QAList[i][1]}</ABar>);
              // copyAnswer = <ABar>QAName[1]</ABar>;
            } else {
              copyArrow[i] = '▼';
              copyAnswer.splice(i, 1, <span />);
            }
            setArrow(copyArrow);
            setAnswer(copyAnswer);
            console.log('hihi');
          }}
        >
          <div>{QAName[0]}</div>
          <div>{arrow[i]}</div>
        </QBar>
        {answer[i]}
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
