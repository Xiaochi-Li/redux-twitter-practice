import * as React from 'react';

import {Breadcrumb} from "antd";
import { Link } from "react-router-dom";

// interface NavProps {}

export const Nav: React.SFC<{}> = (props) => {
  return (
    <Breadcrumb>
      <Breadcrumb.Item>
        <Link to="/">Home</Link>
      </Breadcrumb.Item>
      <Breadcrumb.Item>
        <Link to="/NewTweet">New Tweet</Link>
      </Breadcrumb.Item>
    </Breadcrumb>
  )
};
