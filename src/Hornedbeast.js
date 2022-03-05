import React from "react";
import Card from "react-bootstrap/Card"
import Button from "react-bootstrap/Button"



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
          <Card className="imgHorn" style={{ width: '30em', height: '45em'}}>
          <Card.Img  style={{height: '30em'}}src={this.props.src}  alt={this.props.description}/>
          <Card.Body className="cardBody">
            <Card.Title>{this.props.title}</Card.Title>
            <Card.Text> {this.props.description} </Card.Text>
            <Card.Text> YOU ❤️ THIS IMAGE = {this.state.clickedBeast} </Card.Text> 
           <Button variant="danger" onClick={this.beastClick}>Click Me</Button>
          </Card.Body>
        </Card>
      </div>
    )
  }
}

export default Hornedbeast;
