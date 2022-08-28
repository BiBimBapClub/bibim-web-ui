/* eslint-disable no-console */
import React, { ChangeEventHandler, useState, MouseEventHandler } from 'react';
import ContentWrapper from '../../components/common/ContentWrapper';
import Dropdown from '../../components/common/Dropdown';
import ContentBox from '../../components/common/ContentBox';
import { CardGrid, ClassificationDiv, SelectDiv, SelectTitle } from './Styled';

const yearList = ['전체', '2020', '2021', '2022'];
const fieldList = ['전체', 'Frontend', 'Backend', 'Infra', 'Algorithm'];

function ProjectContent(): React.ReactElement {
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
  const handleOnClickCard: MouseEventHandler<HTMLDivElement> = (e) => {
    const { currentTarget } = e;
    console.log(currentTarget);
    // router로 작동되는게 바람직할 것으로 보임.
    // 글마다 글 id가 있어서 div에 할당했다가 클릭했을 때, id로 db 조회해서 세부 정보 얻어오는 방식으로 만들어야할 듯.
  };

  return (
    <ContentWrapper title="프로젝트" subTitle="비빔밥 부원들의 멋진 프로젝트">
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
            onClick={handleOnClickCard}
            title="비빔밥 홈페이지 만들기"
            imgsrc="../../components/common/image/bibim_logo.png"
            week="8주간"
            leader="조윤혁"
            year="2022"
            language={['python', 'C++', 'JAVA']}
          >
            <div>
              <span>비빔밥 홈페이지를 만들어 보자구~</span>
            </div>
          </ContentBox>
        </CardGrid>
      </>
    </ContentWrapper>
  );
}

export default ProjectContent;
