import React from 'react';
import Hornedbeast from './Hornedbeast';
import bull from './Assests/bull.jpeg'
import pronghorn from './Assests/pronghorn.jpeg'
import elk from './Assests/elksnow.jpeg'

class Main extends React.Component {
  render () {
    return(
      <>
        <Hornedbeast title={'Elk'} imageUrl={elk} description={'Image of an Elk'} />
        <Hornedbeast title={'ProngHorn'} imageUrl={pronghorn} description={'Image of an Pronghorn'} />
        <Hornedbeast title={'Bull'} imageUrl={bull} description={'Image of a calm Bull'}/>
      </>
    )
  }
}

export default Main;
