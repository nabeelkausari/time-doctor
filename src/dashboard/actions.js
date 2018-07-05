import {
  CHANGE_POSITION, LOAD_DATA, SHOW_USERS_WIDGET
} from "./types"
import data from '../data.json';

export const loadData = () => dispatch => {
  dispatch({ type: LOAD_DATA, payload: data })
}

export const changePosition = payload => {
  return { type: CHANGE_POSITION, payload }
}

export const showUsersWidget = payload => {
  return { type: SHOW_USERS_WIDGET, payload }
}
