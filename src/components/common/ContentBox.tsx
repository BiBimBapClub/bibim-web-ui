import React from 'react';
import styled from 'styled-components';

const Fade = require('react-reveal/Fade');

const BoxDiv = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: start;
  margin-top: 100px;
`;
const ImgDiv = styled.img`
  width: 100%;
  height: 40%;
  display: flex;
`;
const Title = styled.div`
  height: 50px;
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
const LanguageSpace = styled.div`
  width: 70px;
  height: 18px;
  font-size: 12px;
`;

interface Props {
  imgsrc: string;
  title: string;
  generation: number;
  children: JSX.Element;
  language: string[];
}

function ContentBox({
  imgsrc = '../image/bibim_logo.png',
  title,
  generation,
  children,
  language,
}: Props): React.ReactElement {
  const languageList = [];
  languageList.push(
    language.map((languageName) => (
      <LanguageSpace>{languageName}</LanguageSpace>
    )),
  );

  return (
    <BoxDiv>
      <Fade up>
        <ImgDiv src={imgsrc} />
        <GenerationDiv>
          {generation}
          <p>기</p>
        </GenerationDiv>
        <Title>{title}</Title>
        <DetailDiv>{children}</DetailDiv>
        <LanguageDiv>{languageList}</LanguageDiv>
      </Fade>
    </BoxDiv>
  );
}

export default ContentBox;
