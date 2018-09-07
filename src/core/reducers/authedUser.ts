import { SET_AUTHENED_USER } from "../actions/authedUser";

export default function authenUser(state = null, action: any) {
  switch (action.type) {
    case SET_AUTHENED_USER:
      return action.id;
    default:
      return state;
  }
}