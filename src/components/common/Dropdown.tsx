import React from 'react';
import styled from 'styled-components';

interface Props extends React.SelectHTMLAttributes<HTMLSelectElement> {
  dropdownList: string[];
}

const CustomSelect = styled.select`
  width: 155px;
  height: 55px;
  background-color: black;
  color: white;
  border-radius: 30px;
  text-align: center;
  margin-right: 20px;
`;

function Dropdown({ dropdownList, onChange }: Props): React.ReactElement {
  const dropdownContent = dropdownList.map((value: string) => (
    <option key={value} value={value}>
      {value}
    </option>
  ));

  return <CustomSelect onChange={onChange}>{dropdownContent}</CustomSelect>;
}

export default Dropdown;
