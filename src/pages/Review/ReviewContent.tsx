import React, { ChangeEventHandler, useState } from 'react';
import styled from 'styled-components';
import { Row, Col, Modal } from 'antd';
import Dropdown from '../../components/common/Dropdown';
import ContentWrapper from '../../components/common/ContentWrapper';
// import styled from 'styled-components';

const ReviewBox = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
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
  const [visible, setVisible] = useState(false);
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
        <Modal
          title="Modal 1000px width"
          centered
          visible={visible}
          onOk={() => setVisible(false)}
          onCancel={() => setVisible(false)}
          width={2000}
          bodyStyle={{ height: 1200, fontSize: 30 }}
        >
          <p>some contents...</p>
          <p>some contents...</p>
          <p>some contents...</p>
        </Modal>
        <Dropdown dropdownList={studyList} onChange={handleOnChangeYear} />
        <ReviewBar onClick={() => setVisible(true)}>
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
