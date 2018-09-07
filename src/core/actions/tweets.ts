export const RECEIVE_TWEETS = "RECEIVE_TWEETS";
export const TOGGLE_LIKE = "TOGGLE_LIKE";

export function receiveTweets(tweets: any) {
  return {
    type: RECEIVE_TWEETS,
    tweets
  }
}

function toggleLike(id: string,) {
  return {
    type: TOGGLE_LIKE,
    id
  }
}

export function handlleToggleLike(id: string) {
  return (dispatch: any, getState: any) => {
    // const { tweets } = getState().tweetsReducer
    // const targettweet = tweets.find((tweet: any) => tweet.id === id)
    dispatch(toggleLike(id));
    // const newTweet = {
    //   ...targettweet,
    //   hasLiked: !targettweet.hasLiked,
    //   likes: targettweet.hasLiked ? targettweet.likes-- : targettweet.likes++
    // }
  }
}