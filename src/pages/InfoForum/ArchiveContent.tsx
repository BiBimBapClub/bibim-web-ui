import React from 'react';
import styled from 'styled-components';
import ContentWrapper from '../../components/common/ContentWrapper';
// import styled from 'styled-components';
const Fade = require('react-reveal/Fade');

const DownloadArr = [
  '스터디 활동 보고서',
  '프로젝트 계획서',
  '프로젝트 중간 보고서',
  '프로젝트 최종 보고서',
];
const DownloadSpace = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const DownloadBar = styled.div`
  width: 581px;
  height: 58px;
  font-size: 28px;
  display: flex;
  cursor: pointer;
  margin-top: 30px;
  border-radius: 29px;
  background-color: black;
  color: white;
  align-items: center;
  justify-content: center;
`;

function ForumContent(): React.ReactElement {
  // 여기서 페이지 변경하는 로직 만들면 되지 않을까
  const Download = [];
  Download.push(
    DownloadArr.map((downloadName) => (
      <DownloadBar onClick={() => {}}>
        {downloadName}
        <div>💾</div>
      </DownloadBar>
    )),
  );
  return (
    <ContentWrapper title="자료실" subTitle="동아리 활동에 필요한 서식">
      <Fade up>
        <DownloadSpace>{Download}</DownloadSpace>
      </Fade>
    </ContentWrapper>
  );
}

export default ForumContent;
