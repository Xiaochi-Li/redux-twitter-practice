import { RECEIVE_TWEETS, TOGGLE_LIKE } from "../actions/tweets"
// import {formatTweet} from "../../utils/helpers";

export default function tweetsReducer(state = { tweets: [] }, action: any) {
  switch (action.type) {
    case RECEIVE_TWEETS:
      return {
        ...state,
        tweets: action.tweets
      }
    case TOGGLE_LIKE:
      const tweets = state.tweets.map((tweet: any) => {
        if (tweet.id === action.id) {
          console.log(tweet);
          return {
            ...tweet,
            hasLiked: !tweet.hasLiked,
            likes: tweet.hasLiked ? tweet.likes-1 : tweet.likes+1
          }
        }
        return tweet;
      }
      );
      return {
        ...state,
        tweets: [...tweets]
      }
    default:
      return {
        ...state
      };
  }
}