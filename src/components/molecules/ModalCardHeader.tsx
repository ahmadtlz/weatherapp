import React, { FC } from 'react';
import ModalCardHead from '../atoms/ModalCardHead/ModalCardHeader';
import ModalCardTitle from '../atoms/ModalCardTitle/ModalCardTitle';

interface Props {
  message:string
}
const ModalCardHeader:FC<Props> = ({ message }:Props) => (
  <ModalCardHead>
    <ModalCardTitle message={message} />
  </ModalCardHead>
);

export default ModalCardHeader;
