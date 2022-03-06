import React from 'react';
import { Modal } from 'bootstrap';
import data from './data.json'


class SelectedBeast extends React.Component {
render () {
  return (
    <Modal show={this.props.onShow} onHide={this.props.onClose} >
    <Modal.Header closeButton>{data.title}</Modal.Header>
  </Modal>
  )
}
}
 
export default SelectedBeast;
