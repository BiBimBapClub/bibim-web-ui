/* eslint-disable no-console */
import React, { ChangeEventHandler, useState } from 'react';
import ContentWrapper from '../../components/common/ContentWrapper';
import CardList from './detail/CardList';
import Dropdown from '../../components/common/Dropdown';
import StudyDetail from './detail/StudyDetail';
import { CardGrid, ClassificationDiv, SelectDiv, SelectTitle, WriteDiv, WriteBtn } from './Styled';

const yearList = ['전체', '2020', '2021', '2022'];
const fieldList = ['전체', 'Frontend', 'Backend', 'Infra', 'Algorithm'];

function StudyContent(): React.ReactElement {
  const [currentSelectYear, setCurrentSelectYear] = useState('');
  const [currentSelectField, setCurrentSelectField] = useState('');
  // const [clickedCard, setClickedCard] = useState('');
  // const [cardDetail, setCardDetail] = useState(<p> </p>);
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

  // const handleOnClickCard: MouseEventHandler<HTMLDivElement> = (e) => {
  //   const { currentTarget } = e;
  //   console.log(currentTarget);
  //   setCardDetail(<StudyDetail />);
  //   // router로 작동되는게 바람직할 것으로 보임.
  //   // 글마다 글 id가 있어서 div에 할당했다가 클릭했을 때, id로 db 조회해서 세부 정보 얻어오는 방식으로 만들어야할 듯.
  // };
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
          <WriteDiv><WriteBtn>글쓰기</WriteBtn></WriteDiv>
        </ClassificationDiv>
        <StudyDetail />
        <CardGrid>
          <CardList />
        </CardGrid>
      </>
    </ContentWrapper>
  );
}

export default StudyContent;
