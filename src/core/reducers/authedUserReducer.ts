import { SET_AUTHENED_USER } from "../actions/authedUser";

export default function authenUserReducer(state = null, action: any) {
  switch (action.type) {
    case SET_AUTHENED_USER:
      return action.id;
    default:
      return state;
  }
}