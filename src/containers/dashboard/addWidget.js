import { connect } from 'react-redux';

import { showUsersWidget } from "./actions";
import AddModal from '../../components/AddModal'

export default connect(
  ({ data }) => ({ ...data }),
  { showUsersWidget }
)(AddModal)
