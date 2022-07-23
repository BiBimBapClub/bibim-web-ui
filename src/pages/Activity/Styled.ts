import styled from 'styled-components';

export const ClassificationDiv = styled.div`
  width: 100%;
  height: 95px;
  margin-bottom: 20px;
  padding: 2.5px;
`;

export const SelectDiv = styled.div`
  display: flex;
  width: 100%;
  margin: 20px 0;
  height: 55px;
`;

export const SelectTitle = styled.div`
  width: 45px;
  height: 55px;
  line-height: 55px;
`;

export const CardGrid = styled.div`
  height: 100%;
  width: 100%;
  display: grid;
  grid-gap: 64px;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: minmax(270px, auto);
`;
