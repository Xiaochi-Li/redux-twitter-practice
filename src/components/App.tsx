import * as React from 'react';
import { connect } from "react-redux";
import '../css/App.css';

import { Layout } from "antd"
import { BrowserRouter,Route, Switch } from "react-router-dom";

import  HomePage  from "./HomePage/HomePage";
import { Nav } from "./Nav/Nav";
import { NewTweet}  from "./NewTweet/NewTweet";

import {handleInitialData} from "../core/actions/utilActions";

const {Header, Content} = Layout;

class App extends React.Component <{dispatch:any}>{
  public componentWillMount(){
    this.props.dispatch(handleInitialData);
  }
  public render() {
    return (
      <BrowserRouter>
      <Layout className="App">
        <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
          <Nav/>
        </Header>
        <Content style={{ padding: '0 50px', marginTop: 64 }}>
          <Switch>
            <Route path="/" component={HomePage}/>
            <Route path="/NewTweet" component={NewTweet}/>
          </Switch>
        </Content>
      </Layout>
      </BrowserRouter>
    );
  }
}

export default connect()(App);
