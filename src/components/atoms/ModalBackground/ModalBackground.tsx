import React, { FC } from 'react';
import styled from 'styled-components';

const ModalClose = styled.div`
    bottom: 0;
    left: 0;
    position: absolute;
    right: 0; 
    top: 0;
    background-color: rgba(10, 10, 10, 0.486);
 
  `;
interface ModalBackgroundProps {
  onClose:()=>void;
}

const ModalBackground:FC<ModalBackgroundProps> = ({ onClose }:ModalBackgroundProps) => (
  <ModalClose onClick={onClose} />
);

export default ModalBackground;
