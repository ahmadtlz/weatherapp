import React, { FC } from 'react';

import SearchBtn from './SearchBtn.styled';

export interface SearchBtnNameProps {
  name:string;
}
const SearchButton:FC<SearchBtnNameProps> = ({ name }:SearchBtnNameProps) => (
  <SearchBtn>
    {name}
  </SearchBtn>
);

export default SearchButton;
