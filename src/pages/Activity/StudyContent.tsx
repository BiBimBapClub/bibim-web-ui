import React, { ChangeEventHandler, useState } from 'react';
import styled from 'styled-components';
import ContentWrapper from '../../components/common/ContentWrapper';
import Dropdown from '../../components/common/Dropdown';

const ClassificationDiv = styled.div`
  width: 100%;
  height: 60px;
  padding: 2.5px;
`;

const SelectDiv = styled.div`
  display: flex;
  width: 100%;
  margin: 20px 0;
  height: 55px;
`;

const SelectTitle = styled.div`
  width: 45px;
  height: 55px;
  line-height: 55px;
`;

const yearList = ['전체', '2020', '2021', '2022'];
const fieldList = ['전체', 'Frontend', 'Backend', 'Infra', 'Algorithm'];

function StudyContent(): React.ReactElement {
  // 여기서 페이지 변경하는 로직 만들면 되지 않을까

  const [currentSelectYear, setCurrentSelectYear] = useState('');
  const [currentSelectField, setCurrentSelectField] = useState('');

  const handleOnChangeYear: ChangeEventHandler<HTMLSelectElement> = (e) => {
    const { target } = e;
    console.log(currentSelectYear);
    if (target.value === '전체') {
      setCurrentSelectYear('');
    } else {
      setCurrentSelectYear(target.value);
    }
  };

  const handleOnChangeField: ChangeEventHandler<HTMLSelectElement> = (e) => {
    const { target } = e;
    console.log(currentSelectField);
    if (target.value === '전체') {
      setCurrentSelectField('');
    } else {
      setCurrentSelectField(target.value);
    }
  };

  return (
    <ContentWrapper
      title="스터디"
      subTitle="분야 별로 튜터와 함께 성장해 나가요"
    >
      <ClassificationDiv>
        <SelectDiv>
          <SelectTitle>년도 : </SelectTitle>
          <Dropdown dropdownList={yearList} onChange={handleOnChangeYear} />
          <SelectTitle>분야 : </SelectTitle>
          <Dropdown dropdownList={fieldList} onChange={handleOnChangeField} />
        </SelectDiv>
      </ClassificationDiv>
    </ContentWrapper>
  );
}

export default StudyContent;
