import * as React from 'react';

import {Menu} from "antd";
import { Link } from "react-router-dom";

// interface NavProps {}

export const Nav: React.SFC<{}> = (props) => {
  return (
    <Menu
      theme="dark"
      mode="horizontal"
      defaultSelectedKeys={['1']}
      style={{ lineHeight: '64px' }}
    >
      <Menu.Item key={1}>
        <Link to="/" >Home</Link>
      </Menu.Item>
      <Menu.Item key={2}>
        <Link to="/NewTweet">New Tweet</Link>
      </Menu.Item>
    </Menu>
  )
};
