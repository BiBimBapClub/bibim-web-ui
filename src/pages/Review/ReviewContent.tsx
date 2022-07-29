import React, { ChangeEventHandler, useState } from 'react';
import styled from 'styled-components';
import { Row, Col } from 'antd';
import Dropdown from '../../components/common/Dropdown';
import ContentWrapper from '../../components/common/ContentWrapper';
// import styled from 'styled-components';

const ReviewBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const ReviewBar = styled.div`
  background-color: black;
  color: white;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 312px;
  margin-top: 50px;
  border-radius: 156px;
  align-items: center;
  justify-content: center;
  font-size: 24px;
`;
const InfoRow = styled(Row)`
  display: flex;
  flex-direction: row;
  width: 100%;
`;

const studyList = ['전체', '2022', '2021', '2020'];
function ReviewContent(): React.ReactElement {
  // 여기서 페이지 변경하는 로직 만들면 되지 않을까
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
  return (
    <ContentWrapper title="후기" subTitle="부원들의 후기를 확인해 보세요">
      <ReviewBox>
        <Dropdown dropdownList={studyList} onChange={handleOnChangeYear} />
        <ReviewBar>
          <InfoRow>
            <Col span={4}>홍길동</Col>
            <Col span={16}>1학기 Android 스터디 참여</Col>
            <Col span={2}>깃</Col>
            <Col span={2}>멜</Col>
          </InfoRow>
        </ReviewBar>
      </ReviewBox>
    </ContentWrapper>
  );
}

export default ReviewContent;
