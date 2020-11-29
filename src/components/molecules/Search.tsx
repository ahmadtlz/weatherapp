import React, { FC } from 'react';
import SearchButton from '../atoms/Button/SearchButton';
import TextInput, { TextInputProps } from '../atoms/input/TextInput';
import SearchStyle from './Search.styled';

const Search:FC<TextInputProps> = ({ onChange, placeholder, value }:TextInputProps) => (
  <SearchStyle>
    <TextInput
      onChange={onChange}
      placeholder={placeholder}
      value={value}
    />
    <SearchButton name="Search" />
  </SearchStyle>
);

export default Search;
