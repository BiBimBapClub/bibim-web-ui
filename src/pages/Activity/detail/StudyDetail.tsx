import React from 'react';
import styled, { keyframes } from 'styled-components';

// const Zoom = require('react-reveal/Slide');

function StudyDetail(): React.ReactElement {
  const spread = keyframes`
    from {
      width: 100%;
      height: 0px;
      font-size: 0px;
      color: rgba(0,0,0,0);
      background-color: rgba(0,0,0,0);
      display: none;

    }
    to {
      width: 100%;
      height: 515px;
      font-size: 0px;
      color: white;
    }
  `;
  const spread2 = keyframes`
  from {
    font-size: 0px;
    color: rgba(0,0,0,0);
    background-color: rgba(0,0,0,0);
    display: none;

  }
  to {
    font-size: 0px;
    color: white;
    display: none;

  }
`;
  const spread3 = keyframes`
from {
  width: 0vw;
  height: 0px;
  font-size: 0px;
  color: rgba(0,0,0,0);
  background-color: rgba(0,0,0,0);
  display: none;

}
to {
  width: 100%;
  height: 100%;
  font-size: 0px;
  color: white;
}`;
  const spread4 = keyframes`
from {
  width: 0vw;
  height: 0px;
  font-size: 0px;
  color: rgba(0,0,0,0);
  background-color: rgba(0,0,0,0);
  border-color: rgba(0,0,0,0);
  display: none;

}
to {
  width: 0vw;
  height: 0px;
  font-size: 0px;
  background-color: rgba(0,0,0,0);
  color: rgba(0,0,0,0);
  border-color: rgba(0,0,0,0);
  display: none;
}
`;
  const DetailDiv = styled.div`
    display: flex;
    flex-direction: column;
    padding: 30px 20px 20px 60px;
    width: 100%;
    height: 515px;
    margin-top: 40px;
    margin-bottom: 40px;
    background-color: #424242;
    color: white;
    animation: ${spread} 0.5s ease-in;
  `;
  const Title = styled.div`
    font-size: 50px;
    font-weight: 10px;
    color: white;
    animation: ${spread3} 0.5s ease-in;
  `;
  const PeopleCheck = styled.div`
    font-size: 20px;
    margin-bottom: 10px;
    animation: ${spread2} 0.5s ease-in;
  `;
  const Activity = styled.div`
    font-size: 20px;
    animation: ${spread2} 0.5s ease-in;
  `;
  const FileBtn = styled.button`
    background-color: #00ff80;
    width: 200px;
    height: 40px;
    align-self: center;
    cursor: pointer;
    color: white;
    animation: ${spread4} 2s ease-in;
  `;
  // const handleButtonClick: MouseEventHandler<HTMLDivElement> = (e) => {
  //   const { target } = e;
  //   console.log(target);
  // };
  // 클릭해서 스터디 정보 보여주는 페이지
  return (
    // <Zoom bottom>
    <DetailDiv>
      1주차
      <Title>템플릿</Title>
      <PeopleCheck>
        <span style={{ fontWeight: 15 }}>스터디 참가인원</span>
        <span>김진욱 김진욱 김진욱 김진욱</span>
      </PeopleCheck>
      <Activity>
        <span style={{ fontWeight: 15 }}>활동 내용</span>
        <span>김진욱 김진욱 김진욱 김진욱</span>
      </Activity>
      <FileBtn onClick={() => {}}>파일첨부</FileBtn>
      <input type="file" style={{ display: 'none' }} />
    </DetailDiv>
    // </Zoom>
  );
}

export default StudyDetail;
