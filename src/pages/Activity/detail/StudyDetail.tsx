import React from 'react';
import styled, { keyframes } from 'styled-components';

function StudyDetail(): React.ReactElement {
  const spread = keyframes`
    from{
      height: 0px
    }to{
      height: 100%;
    }
  `;
  const DetailDiv = styled.div`
    display: flex;
    flex-direction: column;
    width: 85%;
    height: 100%;
    margin-top: 40px;
    margin-bottom: 40px;
    background-color: #424242;
    color: white;
    animation: ${spread} 0.5s linear;
  `;
  const Title = styled.div`
    font-size: 40px;
    font-weight: 10px;
    color: white;
  `;
  const PeopleCheck = styled.div`
    font-size: 10px;
    margin-bottom: 10px;
  `;
  const Activity = styled.div`
    font-size: 10px;
  `;
  const FileBtn = styled.button`
    background-color: #00ff80;
    cursor: pointer;
    color: white;
  `;

  // 클릭해서 스터디 정보 보여주는 페이지
  return (
    <DetailDiv>
      <h5>1주차</h5>
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
    </DetailDiv>
  );
}

export default StudyDetail;
