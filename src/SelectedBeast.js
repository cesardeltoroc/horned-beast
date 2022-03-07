import React from 'react';
import { Modal } from 'bootstrap';
import ModalHeader from 'react-bootstrap/esm/ModalHeader';
import { ModalFooter } from 'react-bootstrap';
import Button from 'react-bootstrap/Button'
import Image from 'react-bootstrap/Image'



class SelectedBeast extends React.Component {
  render () {
    return (
      <Modal show={this.props.showSelectedBeast} onHide={this.props.handleClose}>
          <ModalHeader>{this.SelectedBeast.src}</ModalHeader>
          <Image>{this.props.src}</Image>
          <ModalFooter>
            <Button onClick={this.props.handleClose}> </Button>
          </ModalFooter>
      </Modal>
    )
  }
}

export default SelectedBeast
