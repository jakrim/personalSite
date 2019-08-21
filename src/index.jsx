import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Navbar from './Navbar.jsx';
import './styles.less';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div>
        <Navbar />
        <div className='box' />
      </div>
    );
  }
}

var mountNode = document.getElementById('app');
ReactDOM.render(<App />, mountNode);

export default App;
