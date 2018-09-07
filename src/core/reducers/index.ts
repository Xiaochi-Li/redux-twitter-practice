import {combineReducers} from "redux";
import authenUser from "./authedUserReducer"
import tweetsReducer from "./tweetsReducer"
import usersReducer from "./usersReducer"

export default combineReducers(
  {
    authenUser,
    usersReducer,
    tweetsReducer,
  });