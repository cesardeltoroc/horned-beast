import React from "react";
import {Card} from "react-bootstrap"


class Hornedbeast extends React.Component {
  constructor (props){
    super(props)
    this.state = {
      clickedBeast: 0
    }
  }
    beastClick = () => {
    this.setState({clickedBeast: this.state.clickedBeast + 1},  this.props.handleShow(this.props.title))
  }
  render() {
    return (
      <div className="images">
          <Card className="imgHorn" style={{ width: '45em', height: 'MaxContent' }}>
            <Card.Img onClick={this.beastClick} style={{ height: '30em' }} src={this.props.src} />
            <Card.Body className="cardBody">
              <Card.Title>{this.props.title}</Card.Title>
              <Card.Text> {this.props.description} </Card.Text>
              <Card.Text> YOU ❤️ THIS IMAGE = {this.state.clickedBeast} </Card.Text>
            </Card.Body>
          </Card>
        </div>
    )
  }
}

export default Hornedbeast;
