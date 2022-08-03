import React, { ChangeEventHandler, useState } from 'react';
import { Row, Col, Button } from 'antd';
import styled from 'styled-components';
import Slider from 'react-slick';
import Dropdown from '../../components/common/Dropdown';
import ContentWrapper from '../../components/common/ContentWrapper';

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
  background-color: #364d79;
`;
const Carousel = styled(Slider)`
  width: 100%;
  height: 540px;
`;

const HonorBox = styled.div`
  background-color: coral;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-size: 40px;
  width: 150px;
  height: 501px;
  border-left: 30px;
  border-right: 30px;
  border-color: #364d79;
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
  // const settings = {
  //   className: 'center',
  //   centerMode: true,
  //   infinite: true,
  //   centerPadding: '60px',
  //   slidesToShow: 3,
  //   speed: 500,
  // };
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
          >
            <HonorBox>
              <h3>스터디</h3>
              <div />
              <h5>컴퓨터공학과</h5>
              <h2>이름</h2>
              <h6>전화번호</h6>
              <h6>전화번호</h6>
              <h6>전화번호</h6>
            </HonorBox>
            <HonorBox>
              <h3>스터디2</h3>
              <div />
              <h5>컴퓨터공학과</h5>
              <h2>이름</h2>
              <h6>전화번호</h6>
              <h6>전화번호</h6>
              <h6>전화번호</h6>
            </HonorBox>
            <HonorBox>
              <h3>스터디3</h3>
              <div />
              <h5>컴퓨터공학과</h5>
              <h2>이름</h2>
              <h6>전화번호</h6>
              <h6>전화번호</h6>
              <h6>전화번호</h6>
            </HonorBox>
            <HonorBox>
              <h3>스터디4</h3>
              <div />
              <h5>컴퓨터공학과</h5>
              <h2>이름</h2>
              <h6>전화번호</h6>
              <h6>전화번호</h6>
              <h6>전화번호</h6>
            </HonorBox>
            <HonorBox>
              <h3>스터디5</h3>
              <div />
              <h5>컴퓨터공학과</h5>
              <h2>이름</h2>
              <h6>전화번호</h6>
              <h6>전화번호</h6>
              <h6>전화번호</h6>
            </HonorBox>
          </Carousel>
        </HonorRow>
      </>
    </ContentWrapper>
  );
}

export default HonorOfBBBContent;
