import * as React from 'react';
import { connect } from "react-redux";

import { handlleToggleLike } from "../../core/actions/tweets"

// import { connect } from "react-redux";

import {
  Avatar,
  Icon,
  List
} from "antd";

interface ITweetsListItemProps {
  tweet: any
}

const TweetsListItem: React.SFC<ITweetsListItemProps> = (props: any) => {
  const { tweet } = props;
  const handleClickToogle = () => {
    props.dispatch(handlleToggleLike(tweet.id))
  }
  return (
    <List.Item>
      <List.Item.Meta
        title={tweet.name}
        avatar={<Avatar src={tweet.avatar} />}
        description={tweet.timestamp}
      />
      <div>
        <a onClick={handleClickToogle} >
          {tweet.hasLiked ?
            <Icon type="heart" theme="filled" style={{ color: "#eb2f96" }} /> :
            <Icon type="heart" theme="twoTone" twoToneColor="#eb2f96" />}
        </a>
        <p>
          {tweet.text}
        </p>
      </div>
    </List.Item>
  )
}

export default connect()(TweetsListItem)