import {combineReducers} from "redux";
import authenUser from "./authedUser"
import tweets from "./tweets"
import users from "./users"

export default combineReducers(
  {
    authenUser,
    users,
    tweets,
  });