import React, { ChangeEventHandler, useState } from 'react';
import ContentWrapper from '../../components/common/ContentWrapper';
import Dropdown from '../../components/common/Dropdown';
import CardTemplate from './detail/CardTemplate';
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
          <CardTemplate
            onClick={() => console.log('clicked!')}
            cardName="템플릿"
            week="1"
            year="2022"
            pageType="project"
            usedStack={[
              'C++',
              'JAVA',
              'Typescript',
              'Javascript',
              'Kotlin',
              'Python',
            ]}
            teamLeaderName="장준서"
          />
        </CardGrid>
      </>
    </ContentWrapper>
  );
}

export default ProjectContent;
