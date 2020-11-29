import { race } from 'redux-saga/effects';

import React from 'react';

import SearchContainerStyle from './SearchContainer.styled';
import SearchForm from '../organisms/SearchForm';
import Title from '../atoms/Title/Title';

const SearchWeatherContainer:React.FC = () => (
  <SearchContainerStyle>
    <Title title="Enter city name and press search button" />
    <SearchForm />
  </SearchContainerStyle>
);

export default SearchWeatherContainer;
