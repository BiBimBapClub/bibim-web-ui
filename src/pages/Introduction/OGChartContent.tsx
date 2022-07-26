import React, { ChangeEventHandler, useState } from 'react';
import { Row, Col, Button } from 'antd';
import styled from 'styled-components';
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
const MemBox = styled.div`
  width: 411px;
  height: 241px;
  display: flex;
  flex-direction: row;
  background-color: white;
`;
const MemText = styled.div`
  display: flex;
  flex-direction: column;
  width: 65%;
`;
const MemImg = styled.img`
  background-color: #d9d9d9;
  display: flex;
  flex-direction: column;
  width: 35%;
`;
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
const yearList = ['전체', '2020', '2021', '2022'];

function OGChartContent(): React.ReactElement {
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

  // 여기서 페이지 변경하는 로직 만들면 되지 않을까
  return (
    <ContentWrapper title="조직도" subTitle="조직 간부">
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
        <CommonRow>
          <CommonCol span={8}>
            <MemBox>
              <MemText>
                <h5>회장</h5>
                <h3>조윤혁</h3>
                <h6>M 010-1234-5678</h6>
                <h6>E Naverking@naver.com</h6>
                <h6>G GithubKing@Gihub.com</h6>
              </MemText>
              <MemImg src="" />
            </MemBox>
          </CommonCol>
        </CommonRow>
      </>
    </ContentWrapper>
  );
}

export default OGChartContent;
