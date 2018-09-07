import { setAuthenedUser } from "./authedUser";
import { receiveTweets } from "./tweets";
import { receiveUsers } from "./users";

import { getInitialData } from "../../utils/api";
import { formatTweet } from "../../utils/helpers";

const AUTHED_ID = 'tylermcginnis'

export function handleInitialData(dispatch: any) {
  return getInitialData().then((initialData: any) => {
    const {users, tweets} = initialData;
    dispatch(receiveUsers(users));
    dispatch(receiveTweets(formatTweets(tweets, users)));
    dispatch(setAuthenedUser(AUTHED_ID));
  })
}

function formatTweets(tweets: any, users: any) {
  return Object.keys(tweets).map((tweetID: any) => {
    const tweet = tweets[ tweetID ]
    return formatTweet(
      pickTweetsData(tweet),
      pickAuthorData(users[ tweet.author ]),
      AUTHED_ID,
      getParentTweet(tweets[ tweet.replyingTo ]))
  })
}

function pickTweetsData(tweet: any) {
  return {
    id: tweet.id,
    likes: tweet.likes,
    replies: tweet.replies,
    text: tweet.text,
    timestamp: tweet.timestamp
  }
}

function pickAuthorData(author: any) {
  return {
    name: author.name,
    avatarURL: author.avatarURL
  };
}

function getParentTweet(tweet: any) {
  return !tweet ? null : {
    author: tweet.author,
    id: tweet.id
  }
}
