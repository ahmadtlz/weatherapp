import React, { FC } from 'react';
import styled from 'styled-components';

export interface Props {
  message:string ;
}

const ModalCardTitleStyle = styled.p`
  color: white;
  flex-grow: 1;
  flex-shrink: 0;
  font-size: 1.5rem;
  line-height: 1;
`;
const ModalCardTitle:FC<Props> = ({ message }:Props) => (
  <ModalCardTitleStyle>
    {message}
  </ModalCardTitleStyle>
);

export default ModalCardTitle;
