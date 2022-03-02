
   
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
      <Card className="imgHorn" style={{ width: '18rem' }}>
        <Card.Img onClick={this.beastClick}  src={this.props.imageUrl} alt={this.props.title}/>
        <Card.Body>
          <Card.Title>{this.props.title}</Card.Title>
          <Card.Text> ❤️ = {this.state.clickedBeast}</Card.Text>
        </Card.Body>
      </Card>
    )
  }
}

export default Hornedbeast;
