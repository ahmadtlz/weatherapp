import React, { FC, FormEvent, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setAlert } from '../../store/modules/alert/alert.actions';
import { getWeatherStart } from '../../store/modules/weather/weather.actions';
import Form from '../atoms/Form/Form';
import Search from '../molecules/Search';

const SearchForm:FC = () => {
  const dispatch = useDispatch();
  const [city, setCity] = useState('');

  const changeHandler = (e:FormEvent<HTMLInputElement>) => {
    setCity(e.currentTarget.value);
  };

  const submitHandler = (e:FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (city.trim() === '') {
      dispatch(setAlert('City is required!'));
    }

    if (city.trim() !== '') {
      dispatch(getWeatherStart(city));
      setCity('');
    }
  };

  return (
    <Form onSubmit={submitHandler}>
      <Search
        value={city}
        onChange={changeHandler}
        placeholder="Enter City Name"
      />
    </Form>
  );
};

export default SearchForm;
