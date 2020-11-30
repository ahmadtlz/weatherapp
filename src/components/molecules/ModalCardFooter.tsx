import React, { FC } from 'react';
import { Button } from '../atoms/Button/SearchBtn.styled';
import ModalCardFoot from '../atoms/ModalCardFoot/ModalCardFoot';

interface Props {
  onClose:()=>void
}
const ModalCardFooter:FC<Props> = ({ onClose }:Props) => (
  <ModalCardFoot>
    <Button onClick={onClose}>Close</Button>
  </ModalCardFoot>
);

export default ModalCardFooter;
