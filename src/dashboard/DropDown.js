import React from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import EditWidget from './EditWidget';

export default class Example extends React.Component {
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
        <DropdownToggle>
          ...
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem onClick={this.showEdit}>Edit Widget</DropdownItem>
          <DropdownItem>Delete Widget</DropdownItem>
        </DropdownMenu>
        <EditWidget toggle={this.showEdit} modal={this.state.editVisible}/>
      </Dropdown>
    );
  }
}
