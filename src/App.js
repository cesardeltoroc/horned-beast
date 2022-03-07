import React from 'react';
import './App.css';
import Header from './Header'
import Main from './Main'
import Footer from './Footer'
// import SelectedBeast from './SelectedBeast'




class App extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      show: false,

    }
  }

  openModal = () => {
    this.setState({show: false});
  }

  onShow = () => {this.setState({show: true});}
  handleClose = () => {this.setState({show: false});}

  render () {

    return (
      <div className="App">
        <Header />
        <Main allBeasts={this.state.allBeasts} showSelectedBeast={this.showSelectedBeast}/>
        <Footer />
        {/* <SelectedBeast selectedBeast={this.state.selectedBeast}showSelectedBeast={this.state.show} handleClose={this.onHide}/> */}
      </div>
    );
  }
}

export default App;
