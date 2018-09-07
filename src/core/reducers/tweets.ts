import { RECEIVE_TWEETS } from "../actions/tweets"
// import {formatTweet} from "../../utils/helpers";

export default function tweets(state = {}, action: any) {
  switch (action.type) {
    case RECEIVE_TWEETS:

      return {
        ...state,
        tweets: action.tweets
          // .map((tweet:any)=>{
          //   formatTweet(
          //     )
          // }
        // ),
      }
    default:
      return state;
  }
}