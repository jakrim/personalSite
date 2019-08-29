import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Navbar from './Navbar.jsx';
import faceShot from '../server/public/face-shot.jpg';
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

        <div className='intro'>
          <p>Here's a small intro section with image of myself on the right</p>
          <img src={faceShot} alt='profile picture' className='faceShot' />
        </div>
        <div className='contact'>
          <p>Above the fold contact section (need to google how) </p>
        </div>
        <div className='resume'>
          <p>
            Here's a intro resume section with skills, interests, companies I've
            worked for
          </p>
        </div>
        <div className='resume'>
          <p>Here's a intro portfolio/projects worked on section</p>
        </div>
      </div>
    );
  }
}

var mountNode = document.getElementById('app');
ReactDOM.render(<App />, mountNode);

export default App;
