import React from 'react';
import { Row, Col, Select, Button } from 'antd';
import styled from 'styled-components';
import ContentWrapper from '../../components/common/ContentWrapper';

const CommonRow = styled(Row)`
  width: 100%;
`;
const CommonCol = styled(Col)`
  width: 100%;
`;
const SelectorRow = styled(CommonRow)``;
const SelectorCol = styled(CommonCol)``;

const handleChange = (value: string) => {
  console.log(`selected ${value}`);
};
const ButtonAll = styled(Button)`
  margin: 0 10px 0 10px;
  background-color: #00ff80;
`;
const ButtonYear = styled(Button)`
  margin: 0 10px 0 10px;
`;
const { Option } = Select;
function OGChartContent(): React.ReactElement {
  // 여기서 페이지 변경하는 로직 만들면 되지 않을까
  return (
    <ContentWrapper title="조직도" subTitle="">
      <SelectorRow>
        <SelectorCol span={4}>
          <Select
            defaultValue="year"
            style={{ width: 120 }}
            onChange={handleChange}
          >
            <Option Value="year">년도</Option>
            <Option Value="2020">2020</Option>
            <Option Value="2021">2021</Option>
            <Option Value="2022">2022</Option>
          </Select>
        </SelectorCol>
        <SelectorCol span={4} offset={7}>
          <ButtonAll type="primary">전체</ButtonAll>
          <ButtonYear>2022</ButtonYear>
        </SelectorCol>
        <SelectorCol span={9} />
      </SelectorRow>
    </ContentWrapper>
  );
}

export default OGChartContent;
