import React, { FC, ReactNode, FormEvent } from 'react';
import FormStyle from './Form.styled';

interface Props {
  children:ReactNode;
  onSubmit:(e:FormEvent<HTMLFormElement>)=>void;
};
const Form:FC<Props> = ({ children, onSubmit }:Props) => (
  <FormStyle onSubmit={onSubmit}>
    {children}
  </FormStyle>
);

export default Form;
