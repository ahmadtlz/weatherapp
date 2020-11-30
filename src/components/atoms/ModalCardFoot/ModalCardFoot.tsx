import React, { FC, ReactNode } from 'react';
import styled from 'styled-components';

interface ModalCardFootProps {
  children :ReactNode
}

const ModalCardFootStyle = styled.div`
  align-items: center;
  background-color: whitesmoke;
  display: flex;
  flex-shrink: 0;
  justify-content: flex-start;
  padding: .5em;
  position: relative;
  `;

const ModalCardFoot:FC<ModalCardFootProps> = ({ children }:ModalCardFootProps) => (
  <ModalCardFootStyle>
    {children}
  </ModalCardFootStyle>
);

export default ModalCardFoot;
