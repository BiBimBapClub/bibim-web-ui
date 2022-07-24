/* eslint-disable no-console */
import React, { ChangeEventHandler, MouseEventHandler, useState } from 'react';
import ContentWrapper from '../../components/common/ContentWrapper';
import Dropdown from '../../components/common/Dropdown';
import CardTemplate from './detail/CardTemplate';
import ProjectDetail from './detail/ProjectDetail';
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
          <CardTemplate
            onClick={handleOnClickCard}
            cardName="장준서 바보"
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
            teamName="그나그밥"
          />
          <CardTemplate
            onClick={handleOnClickCard}
            cardName="김재우 바보"
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
            teamName="그나그밥"
          />
        </CardGrid>
        <ProjectDetail />
      </>
    </ContentWrapper>
  );
}

export default ProjectContent;
