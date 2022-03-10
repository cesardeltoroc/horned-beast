import React from 'react';
import './App.css';
import Header from './Header'
import Main from './Main'
import Footer from './Footer'
import beast from './data.json'
import SelectedBeast from './SelectedBeast';

class App extends React.Component {
  constructor (props){
    super(props);
    this.state={
      beast: beast,
      show: false,
      selectedBeast: {},
    }
  }
  handleClose = () => {
    this.setState({show: false});
  }
  handleShow = (name) => {
    const selectedBeast = beast.find(beastobj => beastobj.title === name)
    this.setState({show:true, selectedBeast:selectedBeast});
  }
  selectHorns = (horns)  => {
    if(horns === 'all'){
      this.setState({beast})
    }else{
      const filterBeast = beast.filter(obj => obj.horns === parseInt(horns));
      this.setState({beast: filterBeast});
    }
  }
  render () {
  return (
        <div className="App">
          <Header beast={this.state.beast} selectHorns={this.selectHorns}/>
          <Main beast={this.state.beast} handleShow={this.handleShow} />
          <Footer />
          <SelectedBeast show={this.state.show} handleClose={this.handleClose} selectedBeast={this.state.selectedBeast} />
        </div>
    );
  }
}

export default App;
