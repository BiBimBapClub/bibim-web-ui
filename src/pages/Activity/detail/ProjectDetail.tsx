/* eslint-disable no-console */
import React from 'react';
import styled from 'styled-components';
import {
  // CardGrid,
  DetailInnerDiv,
  DetailRouteP,
  DetailTemplateDiv,
} from '../Styled';
// import CardTemplate from './CardTemplate';

const ProjectTitleP = styled.p`
  width: 100%;
  font-size: 40px;
  margin-bottom: 10px;
`;

const UsedStackP = styled.p`
  width: 100%;
  font-size: 20px;
  overflow: hidden;
  text-overflow: ellipsis;
`;


// const OtherProjectP = styled.p`
//   width: 100%;
//   margin: 0;
//   font-size: 40px;
//   margin-bottom: 20px;
// `;

// const OtherProjectsDiv = styled.div`
//   width: 100%;
//   height: 100%;
// `;

function ProjectDetail(): React.ReactElement {
  const projectName = 'hello';
  const usedStack = [
    'Spring',
    'AWS',
    'GCP',
    'MySQL',
    'Javascript',
    'Typescript',
    'React.js',
    'Svelte.js',
    'Vue.js',
    'Express',
    'FastAPI',
    'Node.js',
    'Yarn',
    'Vite',
    'CRA',
    'Docker',
    'git',
    'k8s',
  ];
  return (
    <DetailTemplateDiv>
      <DetailRouteP>{`프로젝트 > ${projectName}`}</DetailRouteP>
      <DetailInnerDiv>
        <ProjectTitleP>{projectName}</ProjectTitleP>
        <UsedStackP>{usedStack.toString()}</UsedStackP>
      </DetailInnerDiv>
      {/* <OtherProjectsDiv>
        <OtherProjectP>다른 프로젝트 보기</OtherProjectP>
        <CardGrid>
          <CardTemplate
            onClick={() => console.log('onClick other Project')}
            cardName="공부"
            week="2"
            year="2022"
            pageType="project"
            teamLeaderName="서형상"
            teamName="팀 서형상"
            usedStack={['Spring', 'AWS', 'GCP', 'MySQL']}
          />
          <CardTemplate
            onClick={() => console.log('onClick other Project')}
            cardName="공부"
            week="2"
            year="2022"
            pageType="project"
            teamLeaderName="서형상"
            teamName="팀 서형상"
            usedStack={['Spring', 'AWS', 'GCP', 'MySQL']}
          />
          <CardTemplate
            onClick={() => console.log('onClick other Project')}
            cardName="공부"
            week="2"
            year="2022"
            pageType="project"
            teamLeaderName="서형상"
            teamName="팀 서형상"
            usedStack={['Spring', 'AWS', 'GCP', 'MySQL']}
          />
          <CardTemplate
            onClick={() => console.log('onClick other Project')}
            cardName="공부"
            week="2"
            year="2022"
            pageType="project"
            teamLeaderName="서형상"
            teamName="팀 서형상"
            usedStack={['Spring', 'AWS', 'GCP', 'MySQL']}
          />
          <CardTemplate
            onClick={() => console.log('onClick other Project')}
            cardName="공부"
            week="2"
            year="2022"
            pageType="project"
            teamLeaderName="서형상"
            teamName="팀 서형상"
            usedStack={['Spring', 'AWS', 'GCP', 'MySQL']}
          />
        </CardGrid>
      </OtherProjectsDiv> */}
    </DetailTemplateDiv>
  );
}

export default ProjectDetail;
