import { RECEIVE_TWEETS } from "../actions/tweets"
// import {formatTweet} from "../../utils/helpers";

export default function tweetsReducer(state = {tweets: []}, action: any) {
  switch (action.type) {
    case RECEIVE_TWEETS:
      return {
        ...state,
        tweets: action.tweets
      }
    default:
      return {
        ...state
      };
  }
}