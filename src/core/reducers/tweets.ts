import { RECEIVE_TWEETS } from "../actions/tweets";

export default function tweetsReducer(state = {}, action: any) {
  switch (action.type) {
    case RECEIVE_TWEETS:
      return {
        ...state,
        tweets: action.tweets,
      }
    default:
      return state;
  }
}