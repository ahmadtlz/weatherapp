import React, { FC } from 'react';
import Alert from '../organisms/Alert';

interface AlertProps1 {
  onClose :()=>void;
  message:string;
}
const AlertContainer:FC<AlertProps1> = ({ onClose, message }:AlertProps1) => (
  <div style={{ display: 'flex', justifyContent: 'center' }}>
    <Alert
      onClose={onClose}
      message={message}
    />
  </div>

);

export default AlertContainer;
