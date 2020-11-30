import React, { FC, ReactNode } from 'react';
import styled from 'styled-components';

interface ModalCardHeadProps {
  children :ReactNode
}

const ModalCardHeadStyle = styled.div`
  align-items: center;
  background-color: #f14668 ;
  display: flex;
  flex-shrink: 0;
  justify-content: flex-start;
  padding: 1.4em;
  position: relative;
  border-bottom: 1px solid #dbdbdb;
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  `;

const ModalCardHead:FC<ModalCardHeadProps> = ({ children }:ModalCardHeadProps) => (
  <ModalCardHeadStyle>
    {children}
  </ModalCardHeadStyle>
);

export default ModalCardHead;
