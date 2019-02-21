import React, { Component } from 'react';
import './App.css';
import Home from './Home/Home';
import Items from './Items/Items';
import PrivacyPolicy from './PrivacyPolicy/PrivacyPolicy'
import MainContainer from './MainContainer/MainContainer'




import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

class App extends Component {
  
      
render() {
    return (
     <Router> 
      <div className="App"> 
        <nav>
        <Link to='/'>Home</Link>{' '}
        <Link to='/items'>Items</Link>{' '}
        <Link to='/privacypolicy'>Privacy Policy</Link>{' '}
        </nav>
      <Route exact path="/" component={Home} />
      <Route path="/items" component={MainContainer} />
      <Route path="/privacypolicy" component={PrivacyPolicy} />
      <Route path="/item" component={Items} />
      

      </div>
     </Router> 
        
        
        
        
    );
  }
}
export default App;