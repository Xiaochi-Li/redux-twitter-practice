import { setAuthenedUser } from "./authedUser";
import { receiveTweets } from "./tweets";
import { receiveUsers } from "./users";

import { getInitialData } from "../../utils/api";
// import {formatTweet} from "../utils/helpers";

const AUTHED_ID = 'tylermcginnis'

export function handleInitialData(dispatch: any) {
  return getInitialData().then((initialData: any) => {
    const {users, tweets} = initialData;
    dispatch(receiveUsers(users));
    dispatch(receiveTweets(tweets));
    dispatch(setAuthenedUser(AUTHED_ID));
  })
}