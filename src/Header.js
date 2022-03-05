import React from 'react';
import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown'

class Header extends React.Component {
  render() {
    return (
      <>
        <h1>Animal Horn Gallery</h1>
        <div className='navBar'>
          <DropdownButton id="dropdown-basic-button" title="hOmE / WeLcOmE">
            <Dropdown.Item href="https://www.linkedin.com/in/cesardeltoroc/">LinkedIn</Dropdown.Item>
            <Dropdown.Item href="https://github.com/cesardeltoroc">Github</Dropdown.Item>
          </DropdownButton>
        </div>

      </>
    )
  }
}

export default Header;
