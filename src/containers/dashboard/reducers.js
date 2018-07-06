import {CHANGE_POSITION, LOAD_DATA, SHOW_USERS_WIDGET, EDIT_WIDGET} from "./types"

const initialState = {
  usersWidgetVisible: true,
  widgetPosition: 1,
  editData: {
    numberOfUsers: 5,
    activity: 'highest'
  }
}

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case LOAD_DATA:
      return { ...state, ...payload }
    case CHANGE_POSITION:
      return { ...state, widgetPosition: payload }
    case SHOW_USERS_WIDGET:
      return { ...state, usersWidgetVisible: payload }
    case EDIT_WIDGET:
      return { ...state, editData: payload }
    default:
      return state;
  }
}
