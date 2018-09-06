import * as React from 'react';
import '../css/App.css';

import Button from 'antd/lib/button';

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <Button type="primary">test</Button>
      </div>
    );
  }
}

export default App;
