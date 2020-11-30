import React, { FC } from 'react';
import styled from 'styled-components';
import SearchButton from '../atoms/Button/SearchButton';
import TextInput, { TextInputProps } from '../atoms/input/TextInput';

const SearchStyle = styled.div`
  display:flex;
  justify-content:center;
  align-items:center;
`;

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
