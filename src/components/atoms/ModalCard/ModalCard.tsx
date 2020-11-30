import React, { FC, ReactNode } from 'react';
import styled from 'styled-components';

interface ModalCardProps {
  children :ReactNode
}

const ModalCardStyle = styled.div`
  margin: 0 1.3em;
  max-height: calc(100vh - 10em);
  overflow: auto;
  position: relative;
  width: 25em;
  `;

const ModalCard:FC<ModalCardProps> = ({ children }:ModalCardProps) => (
  <ModalCardStyle>
    {children}
  </ModalCardStyle>
);

export default ModalCard;
