import * as React from 'react';
import { connect } from "react-redux";

import {
  Layout,
  List
} from "antd";

import TweetsListItem from './TweetsListItem';

const {Content} = Layout;
// interface IHomePageProps {}

const HomePage: React.SFC<{}> = (props: any) => {

  const renderTweetsList = (tweet:any) => (
    <TweetsListItem tweet={tweet}/>
    // <List.Item>
    //   <List.Item.Meta
    //   title={tweet.name}
    //   avatar={<Avatar src={tweet.avatar} />}
    //   description={tweet.timestamp}
    //   />
    //   <div>
    //     {tweet.hasLiked ?
    //     <Icon type="heart" theme="filled" style={{color:"#eb2f96"}} onClick={()=>handlleToggleLike(tweet.id)}/>:
    //     <Icon type="heart" theme="twoTone" twoToneColor="#eb2f96" onClick={()=>handlleToggleLike(tweet.id)}/>}
    //     <p>
    //       {tweet.text}
    //     </p>
    //   </div> 
    // </List.Item>
  )


  return (<Content style={{ background: '#fff', padding: 60,margin: 60, minHeight: 280, textAlign:'left'}}>
  <List 
    size="large"
    dataSource={props.tweets}
    renderItem={renderTweetsList}/>
  </Content>)
};

const mapStateToProps = (state: any) => {
  return {tweets: state.tweetsReducer.tweets}
}

export default connect(mapStateToProps)(HomePage)
