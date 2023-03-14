import React, { ChangeEventHandler, useState } from 'react';
import { Row, Col, Button } from 'antd';
import styled from 'styled-components';
import Slider from 'react-slick';
import Dropdown from '../../components/common/Dropdown';
import ContentWrapper from '../../components/common/ContentWrapper';
import IU from '../../components/image/iu.jpg';

const HonorList = [
  [
    'NO1',
    IU,
    '17 컴공',
    '조대현',
    '깃허브',
  ],
  [
    'Title',
    '../image/iu.jpg',
    '컴퓨터 공학과 학번',
    '이름',
    '깃허브',
  ],
  [
    'Title',
    '../image/iu.jpg',
    '컴퓨터 공학과 학번',
    '이름',
    '깃허브',
  ],
  [
    'Title',
    '../image/iu.jpg',
    '컴퓨터 공학과 학번',
    '이름',
    '깃허브',
  ],
  [
    'Title',
    '../image/iu.jpg',
    '컴퓨터 공학과 학번',
    '이름',
    '깃허브',
  ],
  [
    'Title',
    '../image/iu.jpg',
    '컴퓨터 공학과 학번',
    '이름',
    '깃허브',
  ],
  [
    'Title',
    '../image/iu.jpg',
    '컴퓨터 공학과 학번',
    '이름',
    '깃허브',
  ],
];
const CommonRow = styled(Row)`
  width: 100%;
`;
const CommonCol = styled(Col)`
  width: 100%;
`;
const BtnRow = styled(CommonRow)``;
const BtnCol = styled(CommonCol)``;

const YearDropDown = styled(Dropdown)`
  margin: 0 0 0 0;
`;

const ButtonAll = styled(Button)`
  margin: 0 0 0 0;
  width: 155px;
  height: 55px;
  background-color: #00ff80;
  color: white;
  border-radius: 30px;
  text-align: center;
`;
const ButtonYear = styled(Button)`
  margin-left: 130px;
  width: 155px;
  height: 55px;
  background-color: #00ff80;
  color: white;
  border-radius: 30px;
  text-align: center;
`;
const HonorRow = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 80px;
  width: 100%;
  height: 550px;
  color: #ffffff;
`;
const Carousel = styled(Slider)`
  width: 100%;
  height: 540px;
`;
const HonorBox = styled.div`
  display: flex;
  margin-right: 30px;
  flex-direction: row;
  font-size: 40px;
  width: 450px;
  height: 100%;
`;
const HonorSpace = styled.div`
  background-color: rgba(255,255,255,0.7);
  display: flex;
  width: 420px;
  height: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
`;
const HollowSpace = styled.div`
  display: flex;
  /* background-color: rgba(0, 0, 0, 0);*/
  background-color: black;

  width: 30px;
  height: 100%;
`;
const BBBImage = styled.img`
  display: flex;
  height: 150px;
`;

function HonorOfBBBContent(): React.ReactElement {
  // 여기서 페이지 변경하는 로직 만들면 되지 않을까

  const yearList = ['전체', '2020', '2021', '2022'];
  const [currentSelectYear, setCurrentSelectYear] = useState('');

  const handleOnChangeYear: ChangeEventHandler<HTMLSelectElement> = (e) => {
    const { target } = e;
    console.log(currentSelectYear);
    if (target.value === '전체') {
      setCurrentSelectYear('');
    } else {
      setCurrentSelectYear(target.value);
    }
  };
  const HonorBBBARR = [];
  for (let i = 0; i < HonorList.length; i += 1) {
    HonorBBBARR.push(
      <HonorBox>
        <HonorSpace>
          <h3>{HonorList[i][0]}</h3>
          <BBBImage src={HonorList[i][1]} />
          <div>{HonorList[i][2]}</div>
          <h5>{HonorList[i][3]}</h5>
          <h6>{HonorList[i][4]}</h6>
        </HonorSpace>
        <HollowSpace />
      </HonorBox>,
    );
  }

  return (
    <ContentWrapper
      title="명예의 전당"
      subTitle="학기 별 우수 활동 인원을 소개합니다"
    >
      <>
        <BtnRow>
          <BtnCol span={4}>
            <YearDropDown
              dropdownList={yearList}
              onChange={handleOnChangeYear}
            />
          </BtnCol>
          <BtnCol span={8} offset={5}>
            <ButtonAll type="primary">전체</ButtonAll>
            <ButtonYear>2022</ButtonYear>
          </BtnCol>
          <BtnCol span={9} />
        </BtnRow>

        <HonorRow>
          <Carousel
            className="slider variable-width"
            dots
            centerMode
            infinite
            centerPadding="180px"
            slidesToShow={4}
            slidesPerRow={1}
            slidesToScroll={1}
            speed={500}
            variableWidth
          >
            {HonorBBBARR}
          </Carousel>
        </HonorRow>
      </>
    </ContentWrapper>
  );
}

export default HonorOfBBBContent;
