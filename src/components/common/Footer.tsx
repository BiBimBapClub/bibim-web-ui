import React from 'react';
import { Row, Col } from 'antd';
import styled from 'styled-components';
import HomeContent from '../../pages/Home/HomeContent';
import ActiveContent from '../../pages/Activity/StudyContent';
import ForumContent from '../../pages/InfoForum/ArchiveContent';
import IntroductionContent from '../../pages/Introduction/IntroductionContent';
import ReviewContent from '../../pages/Review/ReviewContent';

const FooterBox = styled.div`
  margin: 180px 0 0 0;
  font-size: 10px;
  width: 100%;
  padding: 45px 0 0 0;
  display: flex;
  border-top: 2px solid white;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;
const FooterRow = styled(Row)`
  width: 95%;
  display: flex;
`;
const FooterCol = styled(Col)`
  display: flex;
`;
const SummaryRow = styled(FooterRow)`
  height: 120px;
  justify-self: flex-start;
`;
const SummaryCol = styled(FooterCol)`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-self: flex-start;
`;
const SponRow = styled(FooterRow)`
  height: 50px;
`;
const SponCol = styled(FooterCol)`
  height: 100%;
`;
const MenuTitle = styled.div`
  height: 40px;
  width: 70px;
  font-size: 11px;
  font-weight: Bold;
`;
const MenuDiv = styled.div`
  height: 25px;
  width: 70px;
  font-weight: lighter;
  text-decoration: underline;
`;
interface Props {
  setContent: React.Dispatch<React.SetStateAction<JSX.Element>>;
}

function Footer({ setContent }: Props): React.ReactElement {
  const menuArr = [
    ['동아리 연혁', '조직도', '활동소개', '명예의 전당'],
    ['스터디', '프로젝트'],
    ['후기내용'],
    ['자료실', 'Q&A', '대회 정보'],
  ];
  const Menu = [];
  for (let i = 0; i < menuArr.length; i += 1) {
    Menu.push(menuArr[i].map((menuName) => <MenuDiv>{menuName}</MenuDiv>));
  }
  return (
    <FooterBox>
      <SummaryRow>
        <SummaryCol span={7}>
          <span style={{ fontSize: '40px', color: '#00ff80' }}>BibimBap</span>
        </SummaryCol>
        <SummaryCol span={2} offset={7}>
          <MenuTitle
            onClick={() => {
              setContent(<HomeContent />);
            }}
          >
            홈
          </MenuTitle>
        </SummaryCol>
        <SummaryCol span={2}>
          <MenuTitle
            onClick={() => {
              setContent(<IntroductionContent />);
            }}
          >
            동아리 소개
          </MenuTitle>
          {Menu[0]}
        </SummaryCol>
        <SummaryCol span={2}>
          <MenuTitle
            onClick={() => {
              setContent(<ActiveContent />);
            }}
          >
            동아리 활동
          </MenuTitle>
          {Menu[1]}
        </SummaryCol>
        <SummaryCol span={2}>
          <MenuTitle
            onClick={() => {
              setContent(<ReviewContent />);
            }}
          >
            후기
          </MenuTitle>
          {Menu[2]}
        </SummaryCol>
        <SummaryCol span={2}>
          <MenuTitle
            onClick={() => {
              setContent(<ForumContent />);
            }}
          >
            정보광장
          </MenuTitle>
          {Menu[3]}
        </SummaryCol>
      </SummaryRow>
      <SponRow>
        <SponCol span={4}>모비스</SponCol>
        <SponCol span={4}>nhn클라우드</SponCol>
        <SponCol span={4}>후원문의</SponCol>
        <SponCol span={12} />
      </SponRow>
    </FooterBox>
  );
}

export default Footer;
