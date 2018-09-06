export const RECEIVE_USERS = "RECIVE_USERS";

export function receiveUsers(users: any) {
  return {
    type: RECEIVE_USERS,
    users
  }
}
