import {combineReducers} from "redux";
import authenUserReducer from "./authedUser"
import tweetsReducer from "./tweets"
import usersReducer from "./users"

export default combineReducers(
  {
    authenUserReducer,
    usersReducer,
    tweetsReducer,
  });