import { race } from 'redux-saga/effects';

import React from 'react';

import SearchWeatherContainerStyle from './SearchWeatherContainer.styled';
import SearchForm from '../organisms/SearchForm';
import Title from '../atoms/Title/Title';

const SearchWeatherContainer:React.FC = () => (
  <SearchWeatherContainerStyle>
    <Title title="Enter city name and press search button" />
    <SearchForm />
  </SearchWeatherContainerStyle>
);

export default SearchWeatherContainer;
