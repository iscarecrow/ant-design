import React from 'react';
import Message from './Message';
import ModalTest from './ModalTest';
import CarouselTest from './CarouselTest';

const containerStyle = {
  height: '300px',
};

export default (props) => {

  return (
    <div style={containerStyle}>
      <Message {...props} />
      <ModalTest />
      <CarouselTest />
    </div>
  )
};
