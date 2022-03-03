import React from 'react';
import { Dropdown } from 'react-bootstrap';

class Header extends React.Component {
  render() {
    return (
      <>
        <h1>Beast That Have Horns</h1>
        <Dropdown className='dropBar' color='black'>
          <Dropdown.Toggle variant="success" id="dropdown-basic">
            Menu
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item href="https://www.linkedin.com/in/cesardeltoroc/">LinkedIn</Dropdown.Item>
            <Dropdown.Item href="https://github.com/cesardeltoroc">Github</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </>
    )
  }
}

export default Header;
