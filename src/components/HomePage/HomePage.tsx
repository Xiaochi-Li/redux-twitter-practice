import * as React from 'react';
import { connect } from "react-redux";

import { Layout } from "antd";

const {Content} = Layout;
// interface IHomePageProps {}

const HomePage: React.SFC<{}> = (props: any) => {
  console.log(props.tweets)
  return <Content>{
    props.tweets.map((tweet: any) => {
      return <p key={tweet.id}>{tweet.id}</p>
    })
  }</Content>
};

const mapStateToProps = (state: any) => {
  return {tweets: state.tweetsReducer.tweets}
}

export default connect(mapStateToProps)(HomePage)
