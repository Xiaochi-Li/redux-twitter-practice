import * as React from 'react'
import {Button} from 'antd';

export default class App extends React.Component {
  
  render() {
    console.log(Button);
    return (
      <div>
        <Button type="primary">Test</Button>
      </div>
    )
  }
}