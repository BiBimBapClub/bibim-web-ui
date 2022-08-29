import React, { MouseEventHandler } from 'react';
import styled from 'styled-components';
import ContentWrapper from '../../components/common/ContentWrapper';
import ContentBox from '../../components/common/ContentBox';

const ContestDomain = styled.div`
  width: 100%;
  display: flex;
  color: white;
  font-size: 40px;
  flex-direction: row;
  align-items: flex-start;
`;
const ContestDiv = styled.div`
  width: 100%;
  height: 600px;
  display: flex;
  flex-direction: row;
  align-items: start;
  justify-items: start;
`;
const handleOnClickCard: MouseEventHandler<HTMLDivElement> = (e) => {
  const { currentTarget } = e;
  console.log(currentTarget);
  // router로 작동되는게 바람직할 것으로 보임.
  // 글마다 글 id가 있어서 div에 할당했다가 클릭했을 때, id로 db 조회해서 세부 정보 얻어오는 방식으로 만들어야할 듯.
};
function ContestContent(): React.ReactElement {
  // 여기서 페이지 변경하는 로직 만들면 되지 않을까
  return (
    <ContentWrapper title="대회 정보" subTitle="">
      <>
        <ContestDomain>동아리 주관</ContestDomain>
        <ContestDiv>
          <ContentBox
            onClick={handleOnClickCard}
            title="비빔밥 해커톤 대회"
            imgsrc="../../components/common/image/bibim_logo.png"
            leader="조윤혁"
            week="2주간"
            year="6기"
            language={['python', 'swift', 'react']}
          >
            <div>
              <span>행사 기간: 7/26 ~ 7/27</span>
              <span> 신청기간 : 6/28~7/1</span>
              <span> 주제 : ~~</span>
            </div>
          </ContentBox>
          <ContentBox
            onClick={handleOnClickCard}
            title="비빔밥 해커톤 대회"
            imgsrc="../../components/common/image/bibim_logo.png"
            leader="조윤혁"
            week="2주간"
            year="6기"
            language={['python', 'swift', 'react']}
          >
            <div>
              <span>행사 기간: 7/26 ~ 7/27</span>
              <span> 신청기간 : 6/28~7/1</span>
              <span> 주제 : ~~</span>
            </div>
          </ContentBox>
          <ContentBox
            onClick={handleOnClickCard}
            title="비빔밥 해커톤 대회"
            imgsrc="../../components/common/image/bibim_logo.png"
            leader="조윤혁"
            week="2주간"
            year="6기"
            language={['python', 'swift', 'react']}
          >
            <div>
              <span>행사 기간: 7/26 ~ 7/27</span>
              <span> 신청기간 : 6/28~7/1</span>
              <span> 주제 : ~~</span>
            </div>
          </ContentBox>
        </ContestDiv>
        <ContestDomain>외부 대회</ContestDomain>
        <ContestDiv>
          <ContentBox
            onClick={handleOnClickCard}
            title="비빔밥 해커톤 대회"
            imgsrc="../../components/common/image/bibim_logo.png"
            leader="조윤혁"
            week="2주간"
            year="6기"
            language={['python', 'swift', 'react']}
          >
            <div>
              <span>행사 기간: 7/26 ~ 7/27</span>
              <span> 신청기간 : 6/28~7/1</span>
              <span> 주제 : ~~</span>
            </div>
          </ContentBox>
        </ContestDiv>
      </>
    </ContentWrapper>
  );
}

export default ContestContent;
