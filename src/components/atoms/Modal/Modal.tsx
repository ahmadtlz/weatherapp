import React, { FC, ReactNode } from 'react';
import ModalStyle from './Modal.styled';

interface ModalProps {
  children:ReactNode
}
const Modal:FC<ModalProps> = ({ children }:ModalProps) => (
  <ModalStyle>
    {children}
  </ModalStyle>
);

export default Modal;
