import React, { Component } from 'react';
import './App.css';
import Home from './Home/Home';


import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

class App extends Component {
  
      
render() {
    return (
     <Router> 
      <div className="App-header">
        <nav>
        <Link to='/'>Home</Link>{' '}
        <Link to='/items'>Items</Link>{' '}
        <Link to='/profile'>My Profile</Link>{' '}
        </nav>
      <Route exact path="/" component={Home} />
      </div>
     </Router> 
        
    );
  }
}
export default App;