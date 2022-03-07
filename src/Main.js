import React from 'react';
import Hornedbeast from './Hornedbeast';
import data from './data.json'

class Main extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      beasts: data
    }
  }
  render () {
    let animalArray = this.state.beasts.map((animal, index) => (
      <Hornedbeast
        src={animal.image_url}
        title={animal.title}
        description={animal.description}
        horns={animal.horns}
        show={this.props.show}
      />
    ));
    return(
      <>
      {animalArray}
      </>
    )
  }
}

export default Main;
