import { race } from 'redux-saga/effects';

import React from 'react';

import styled from 'styled-components';
import SearchForm from '../organisms/SearchForm';
import Title from '../atoms/Title/Title';

const SearchWeatherContainerStyle = styled.div`
  height:20em;
  width:100vw;
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  background-color:#efefef
`;

const SearchWeatherContainer:React.FC = () => (
  <SearchWeatherContainerStyle>
    <Title title="Enter city name and press search button" />
    <SearchForm />
  </SearchWeatherContainerStyle>
);

export default SearchWeatherContainer;
