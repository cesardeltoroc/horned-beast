import React from 'react';
import { Modal, Button, Image } from 'react-bootstrap';


class SelectedBeast extends React.Component {
  render (){
    return (
      <>
      <Modal
        show={this.props.show}
        onHide={this.props.handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>{this.props.selectedBeast.title}</Modal.Title>
        </Modal.Header>
        <Image src={this.props.selectedBeast.image_url}/>
        <Modal.Footer>
          <Button variant="secondary" onClick={this.props.handleClose}>Close</Button>
        </Modal.Footer>
      </Modal>
      </>
    )
  }
} 

export default SelectedBeast;
