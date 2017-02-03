import React from 'react';
import { message, Button } from 'antd';


// 基于https://github.com/react-component/notification/blob/master/src/Notification.jsx


const info = function () {
  message.success('This is a normal message');
};

export default class Message extends React.Component {
  render() {
    return (
      <Button type="primary" onClick={info}>Display normal message</Button>
    )
  }
}
