import React from 'react';
import Hornedbeast from './Hornedbeast';

class Main extends React.Component {

  render () {
 
    let animalArray = this.props.beast.map((animal, index) => (
      <Hornedbeast
        src={animal.image_url}
        title={animal.title}
        description={animal.description}
        horns={animal.horns}
        handleShow={this.props.handleShow}
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
