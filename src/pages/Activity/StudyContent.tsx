/* eslint-disable no-console */
import React, { ChangeEventHandler, useState } from 'react';
import ContentWrapper from '../../components/common/ContentWrapper';
import ContentBox from '../../components/common/ContentBox';
import Dropdown from '../../components/common/Dropdown';
import { CardGrid, ClassificationDiv, SelectDiv, SelectTitle } from './Styled';

const yearList = ['전체', '2020', '2021', '2022'];
const fieldList = ['전체', 'Frontend', 'Backend', 'Infra', 'Algorithm'];

function StudyContent(): React.ReactElement {
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
      <>
        <ClassificationDiv>
          <SelectDiv>
            <SelectTitle>년도 : </SelectTitle>
            <Dropdown dropdownList={yearList} onChange={handleOnChangeYear} />
            <SelectTitle>분야 : </SelectTitle>
            <Dropdown dropdownList={fieldList} onChange={handleOnChangeField} />
          </SelectDiv>
        </ClassificationDiv>
        <CardGrid>
          <ContentBox
            title="종만북 알고리즘 스터디"
            imgsrc="../../components/common/image/bibim_logo.png"
            green="1회"
            language={['python', 'C++', 'JAVA']}
          >
            <div>
              <span>백준 9867</span>
            </div>
          </ContentBox>
        </CardGrid>
      </>
    </ContentWrapper>
  );
}

export default StudyContent;
