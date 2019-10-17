import React from 'react';
import Signup from './containers/Signup'
import FighterContainer from './containers/FighterContainer'
import ShowdownContainer from './containers/ShowdownContainer'
import './App.css';

const App = () => (
  <div className="App">
    < Signup />
    < FighterContainer />
    < ShowdownContainer/>
  </div>
)
export default App;
