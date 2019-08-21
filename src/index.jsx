import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './styles.less';

class App extends Component {
  render() {
    return <div>Hello </div>;
  }
}

var mountNode = document.getElementById('app');
ReactDOM.render(<App />, mountNode);

// import React, { Component } from 'react';
// import ReactDOM from 'react-dom';

// import Navbar from './src/Navbar.jsx';
// import './src/styles.css';

// class App extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {};
//   }

//   render() {
//     return (
//       <div>
//         <Navbar />
//         <div className='box' />
//       </div>
//     );
//   }
// }

export default App;

// ReactDOM.render(<App />, document.getElementById('app'));
