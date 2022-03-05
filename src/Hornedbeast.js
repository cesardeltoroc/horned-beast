import React from "react";
import Card from "react-bootstrap/Card"


class Hornedbeast extends React.Component {
  constructor (props){
    super(props)
    this.state = {
      clickedBeast: 0
    }
  }
    beastClick = () => {
    this.setState({
      clickedBeast: this.state.clickedBeast + 1
    })
  }
  render() {
    return (
      <div className="images">
        <Card className="imgHorn" style={{ width: '18rem' }}>
        <Card.Img onClick={this.beastClick}  src={this.props.src} title={this.props.name} description={this.props.description}/>
        <Card.Body className="cardBody">
          <Card.Title>{this.props.title}</Card.Title>
          <Card.Text> YOU ❤️ THIS IMAGE = {this.state.clickedBeast} </Card.Text>
        </Card.Body>
      </Card>
      </div>
    )
  }
}

export default Hornedbeast;
