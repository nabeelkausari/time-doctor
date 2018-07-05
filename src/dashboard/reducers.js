import {CHANGE_POSITION, LOAD_DATA, SHOW_USERS_WIDGET} from "./types"

export default (state = {usersWidgetVisible: false}, { type, payload }) => {
  switch (type) {
    case LOAD_DATA:
      return { ...state, ...payload }
    case CHANGE_POSITION:
      return { ...state, widgetPosition: payload }
    case SHOW_USERS_WIDGET:
      return { ...state, widgetPosition: 1, usersWidgetVisible: payload }
    default:
      return state;
  }
}
