import React, { Component } from 'react';
import { Button, Modal} from 'antd';
import styles from './style.module.scss';

class App extends Component {
  info() {
    Modal.info({
      title: 'This is a notification message',
      content: (
        <div>
          <p>some messages...some messages...</p>
          <p>some messages...some messages...</p>
        </div>
      ),
      onOk() {},
    });
  }
  
  success() {
    Modal.success({
      content: 'some messages...some messages...',
    });
  }
  
  error() {
    Modal.error({
      title: 'This is an error message',
      content: 'some messages...some messages...',
    });
  }
  
  warning() {
    Modal.warning({
      title: 'This is a warning message',
      content: 'some messages...some messages...',
    });
  }

  render() {
    return (
      <div>
        <h1>
          Welcome To Antd Modal Demo
        </h1>
        <div className={styles.buttonContainer}>
          <Button onClick={this.info}>Info</Button>
          <Button onClick={this.success}>Success</Button>
          <Button onClick={this.error}>Error</Button>
          <Button onClick={this.warning}>Warning</Button>
        </div>
      </div>
    );
  }
}

export default App;
