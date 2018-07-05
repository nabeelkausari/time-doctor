import { connect } from 'react-redux';
import { changePosition, showUsersWidget } from "./actions";

function mapsStateToProps(state) {
  return {
    ...state.data
  }
}

export default connect(mapsStateToProps, { changePosition, showUsersWidget })
