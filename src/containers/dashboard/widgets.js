import { connect } from 'react-redux';

import { loadData, showUsersWidget, changePosition } from "./actions";
import Widgets from '../../components/Widgets'

export default connect(
  ({ data }) => ({ ...data }),
  { loadData, showUsersWidget, changePosition }
)(Widgets)
