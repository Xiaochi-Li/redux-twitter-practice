import * as React from 'react';
import '../css/App.css';

import { Route, Switch } from "react-router";
import { HomePage } from "./HomePage/HomePage";
import { Nav } from "./Nav/Nav";
import { NewTweet } from "./NewTweet/NewTweet";

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <Nav/>
        <Switch>
          <Route exact={true} path="/" component={HomePage}/>
          <Route path="/NewTweet" component={NewTweet}/>
        </Switch>
      </div>
    );
  }
}

export default App;
