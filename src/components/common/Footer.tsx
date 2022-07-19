import React from 'react';
import { Row, Col } from 'antd';
import styled from 'styled-components';

const FooterBox = styled.div`
  margin: 0 0 0 0;
  font-size: 24px;
  width: 100vw;
  padding: 0 0 0 0;
  display: flex;
  border-bottom: 2px solid white;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
const FooterRow = styled(Row)`
  width: 95vw;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const FooterCol = styled(Col)`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const SummaryRow = styled(FooterRow)`
  height: 120px;
`;
const SummaryCol = styled(FooterCol)`
  height: 100%;
`;
const SponRow = styled(FooterRow)`
  height: 50px;
`;
const SponCol = styled(FooterCol)`
  height: 100%;
`;
const MenuDiv = styled.div`
  height: 20px;
  width: 40px;
`;

function Footer(): React.ReactElement {
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
        <SummaryCol span={7}>content</SummaryCol>
        <SummaryCol span={2} offset={7}>
          {Menu[0]}
        </SummaryCol>
        <SummaryCol span={2}>{Menu[1]}</SummaryCol>
        <SummaryCol span={2}>{Menu[2]}</SummaryCol>
        <SummaryCol span={2}>{Menu[3]}</SummaryCol>
        <SummaryCol span={2}>{Menu[4]}</SummaryCol>
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
