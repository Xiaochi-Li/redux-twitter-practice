export const SET_AUTHENED_USER = "SET_AUTHENED_USER";

export const setAuthenedUser = (id: string) => {
  return {
    type: SET_AUTHENED_USER,
    id
  }
}