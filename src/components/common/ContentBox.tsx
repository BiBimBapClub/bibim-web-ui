/* eslint-disable global-require */
import React, { useState } from 'react';
import styled from 'styled-components';

const Fade = require('react-reveal/Fade');

const BoxDiv = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: start;
  margin-top: 100px;
  padding: 15px;
  background-color: #333333;
  box-shadow: 3px 3px 15px #666666;
  cursor: pointer;
`;
const ImgDiv = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
`;
const WeekDiv = styled.div`
  font-size: 20px;
  color: white;
`;
const Title = styled.div`
  font-size: 42px;
  color: white;
`;
const GenerationDiv = styled.div`
  font-size: 24px;
  display: flex;
  flex-direction: start;
  color: #00ff80;
`;
const DetailDiv = styled.div`
  font-size: 14px;
  color: rgba(255, 255, 255, 0.8);
`;
const LanguageDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  height: 20px;
`;
const LeaderDiv = styled.div`
  width: 70px;
  height: 18px;
  font-size: 16px;
`;
const LanguageSpace = styled.div`
  width: 70px;
  height: 18px;
  font-size: 12px;
`;

interface Props {
  imgsrc: string;
  title: string;
  year: string;
  leader: string;
  week: string;
  children: JSX.Element;
  language: string[];
  onClick: React.MouseEventHandler<HTMLDivElement>;
}
function ContentBox({
  imgsrc = '../image/bibim_logo.png',
  title,
  week,
  leader,
  year,
  children,
  language,
  onClick,
}: Props): React.ReactElement {
  const languageList = [];
  languageList.push(
    language.map((languageName) => (
      <LanguageSpace>{languageName}</LanguageSpace>
    )),
  );
  const [imageState, setImageState] = useState('');
  import(imgsrc).then((img) => {
    setImageState(img);
  });
  return (
    <BoxDiv onClick={onClick}>
      <Fade up>
        <ImgDiv />
        {imageState}
        {imgsrc}
        <GenerationDiv>{year}</GenerationDiv>
        <WeekDiv>{week}</WeekDiv>
        <Title>{title}</Title>
        <DetailDiv>{children}</DetailDiv>
        <LeaderDiv>{leader}</LeaderDiv>
        <LanguageDiv>{languageList}</LanguageDiv>
      </Fade>
    </BoxDiv>
  );
}

export default ContentBox;
