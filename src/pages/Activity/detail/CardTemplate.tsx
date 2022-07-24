import React from 'react';
import styled from 'styled-components';

interface Props {
  cardName: string;
  week: string;
  year: string;
  pageType: 'study' | 'project';
  field?: string;
  teamLeaderName?: string;
  teamName?: string;
  tutorName?: string;
  usedStack?: string | string[];
  onClick: React.MouseEventHandler<HTMLDivElement>;
}

const CardDiv = styled.div`
  width: 270px;
  height: 270px;
  padding: 20px;
  border-radius: 20px;
  background-color: white;
  color: black;
  position: relative;
  display: flex;
  flex-direction: column;
`;

const CardUpperDiv = styled.div`
  width: 100%;
  height: 20%;
  display: flex;
`;

const CardInfoDiv = styled.div`
  width: 100%;
  text-align: center;
  height: 70%;
`;

const CardFooterDiv = styled.div`
  width: 100%;
  height: 10%;
`;

const UpperRightP = styled.p`
  margin: 0;
  margin-left: auto;
  font-size: 18px;
`;

const CardTitleP = styled.p`
  margin: 0;
  display: block;
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 36px;
`;

const CardWeekP = styled.p`
  margin: 0;
  width: 100%;
  font-size: 18px;
`;

const CardYearP = styled.p`
  margin: 0;
  font-size: 18px;
`;

const FooterCenterP = styled.p`
  margin: 0;
  overflow: hidden;
  display: block;
  font-size: 18px;
  width: 240px;
  text-align: center;
  text-overflow: ellipsis;
`;

function CardTemplate({
  cardName,
  week,
  pageType,
  year,
  field,
  teamLeaderName,
  tutorName,
  usedStack,
  teamName,
  onClick,
}: Props): React.ReactElement {
  return (
    <CardDiv onClick={onClick}>
      <CardUpperDiv>
        <CardYearP>{year}</CardYearP>
        <UpperRightP>
          {pageType === 'study' ? field : `팀장 ${teamLeaderName}`}
        </UpperRightP>
      </CardUpperDiv>
      <CardInfoDiv>
        <CardWeekP>
          {pageType === 'study' ? `${week}주차` : `${teamName}`}
        </CardWeekP>
        <CardTitleP>{cardName}</CardTitleP>
      </CardInfoDiv>
      <CardFooterDiv>
        <FooterCenterP>
          {pageType === 'study' ? `튜터 ${tutorName}` : usedStack?.toString()}
        </FooterCenterP>
      </CardFooterDiv>
    </CardDiv>
  );
}

CardTemplate.defaultProps = {
  field: '',
  teamLeaderName: '',
  tutorName: '',
  usedStack: '',
  teamName: '',
};

export default CardTemplate;
