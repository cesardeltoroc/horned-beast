import React from 'react';
import Hornedbeast from './Hornedbeast';

class Main extends React.Component {
  render () {
    return(
      <>
        <Hornedbeast title={'Elk'} imageUrl={'https://www.fieldandstream.com/uploads/2021/10/29/ElkSnow.jpg?auto=webp'} description={'Image of an Elk'} />
        <Hornedbeast title={'ProngHorn'} imageUrl={'https://www.nps.gov/articles/000/images/Pronghorn-head.jpg'} description={'Image of an Pronghorn'} />
        <Hornedbeast title={'Bull'} imageUrl={'https://i.guim.co.uk/img/media/dbb1ceeb1177e9976b72d81f0b53f79b95fd9469/0_34_2304_1382/master/2304.jpg?width=1200&height=900&quality=85&auto=format&fit=crop&s=9908f785289108fd7aa17dfc3c7cd536'} description={'Image of a calm Bull'}
        />
      </>
    )
  }
}

export default Main;
