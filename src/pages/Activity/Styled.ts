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
  place-items: center;
`;

export const DetailTemplateDiv = styled.div`
  width: 100%;
  margin-top: 100px;
`;

export const DetailRouteP = styled.p`
  width: 100%;
  font-size: 24px;
`;

export const DetailInnerDiv = styled.div`
  background-color: #424242;
  color: white;
  width: 100%;
  border-radius: 20px;
  padding 45px;
  margin-bottom : 100px;
`;
