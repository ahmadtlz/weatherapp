import { off } from 'process';
import React from 'react';
import TextInputStyle from './TextInput.styled';

export interface TextInputProps{
  onChange:((event: React.ChangeEvent<HTMLInputElement>) => void)
  placeholder:string;
  value:string;
}

const TextInput:React.FC<TextInputProps> = ({ onChange, placeholder, value }:TextInputProps) => (
  <TextInputStyle
    placeholder={placeholder}
    onChange={onChange}
    value={value}
    required
    autoComplete="off"
  />
);

export default TextInput;
