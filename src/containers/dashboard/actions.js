import {
  CHANGE_POSITION, EDIT_WIDGET, LOAD_DATA, SHOW_USERS_WIDGET
} from "./types"
import data from '../../config/data.json';

export const loadData = () => dispatch => {
  dispatch({ type: LOAD_DATA, payload: { data } })
}

export const changePosition = payload => {
  return { type: CHANGE_POSITION, payload }
}

export const showUsersWidget = payload => {
  return { type: SHOW_USERS_WIDGET, payload }
}

export const editWidget = payload => {
  return { type: EDIT_WIDGET, payload }
}
