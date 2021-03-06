import { RECEIVE_USERS } from "../actions/users";

export default function usersReducer(state = {}, action: any) {
  switch (action.type) {
    case RECEIVE_USERS:
      return {
        ...state,
        users: action.users,
      }
    default:
      return state;
  }
}