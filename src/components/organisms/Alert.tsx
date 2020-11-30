import React, { FC } from 'react';
import Modal from '../atoms/Modal/Modal';
import ModalBackground from '../atoms/ModalBackground/ModalBackground';
import ModalCard from '../atoms/ModalCard/ModalCard';
import ModalCardFooter from '../molecules/ModalCardFooter';
import ModalCardHeader from '../molecules/ModalCardHeader';

interface AlertProps {
  onClose :()=>void;
  message:string;
}
const Alert:FC<AlertProps> = ({ onClose, message }:AlertProps) => (
  <Modal>
    <ModalBackground onClose={onClose} />
    <ModalCard>
      <ModalCardHeader message={message} />
      <ModalCardFooter onClose={onClose} />
    </ModalCard>
  </Modal>
);

export default Alert;
