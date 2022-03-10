import React from 'react';
import DropdownButton from 'react-bootstrap/DropdownButton'
import { Dropdown, Form } from 'react-bootstrap'


class Header extends React.Component {
  // To do Define Method that gets called on onChange, Create function to filter number of horns, lift state of filtered array to app.js, setSate of allbeast in app.js//

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
        <Form>
          <Form.Group>
            <Form.Label>How Many Horns Do You Wanna See on Your Animal?</Form.Label>
            <Form.Control as='select' id="userHorns" onChange={(event) => this.props.selectHorns(event.target.value)}>
              <option value='all'>All Horns</option>
              <option value='1'>1</option>
              <option value='2'>2</option>
              <option value='3'>3</option>
              <option value='100'>100</option>
            </Form.Control>
          </Form.Group>
        </Form>
      </>
    )
  }
}

export default Header;
