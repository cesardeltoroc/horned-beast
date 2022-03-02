import React from 'react';
import './App.css';
import Header from './Header'
import Hornedbeast from './Hornedbeast'
import Main from './Main'
import Footer from './Footer'



class App extends React.Component {
  render () {
    return (
      <div className="App">
        <Header />
        <Main />
        <Hornedbeast />
        <Footer />
      </div>
    );
  }
}

export default App;
