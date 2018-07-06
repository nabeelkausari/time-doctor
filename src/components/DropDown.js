import React from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import EditWidget from '../containers/dashboard/widgets/editUsersWidget';

export default class DropDown extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false,
      editVisible: false
    };
  }

  toggle() {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
    }));
  }

  showEdit = () => this.setState({ editVisible: !this.state.editVisible })

  render() {
    return (
      <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
        <DropdownToggle/>
        <DropdownMenu>
          <DropdownItem onClick={this.showEdit}>Edit Widget</DropdownItem>
          <DropdownItem onClick={() => this.props.deleteWidget(false)}>Delete Widget</DropdownItem>
        </DropdownMenu>
        <EditWidget toggle={this.showEdit} modal={this.state.editVisible}/>
      </Dropdown>
    );
  }
}
