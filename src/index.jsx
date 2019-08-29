import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Navbar from './Navbar.jsx';
import SocialNav from './SocialNav.jsx';
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
        <SocialNav />
        <Navbar />
        <div className='intro'>
          <aside>
            <img src={faceShot} alt='profile picture' className='faceShot' />
            <p>Full Stack Javascript Developer in New York City/New Jersey</p>
          </aside>
          <p>Here's a short professional bio with my image on the right</p>
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
        <div className='portfolio'>
          <p>Here's a intro portfolio/projects worked on section</p>
        </div>
        <div className='footer'>
          <p>Here's a a footer</p>
          <SocialNav />
        </div>
      </div>
    );
  }
}

var mountNode = document.getElementById('app');
ReactDOM.render(<App />, mountNode);

export default App;
