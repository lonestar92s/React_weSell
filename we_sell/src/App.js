import React, { Component } from 'react';
import './App.css';
import Home from './Home/Home';
import Items from './Items/Items';
import PrivacyPolicy from './PrivacyPolicy/PrivacyPolicy'
import MainContainer from './MainContainer/MainContainer'
import { Header, Icon, Image, Menu, Segment, Sidebar } from 'semantic-ui-react'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom'


class App extends Component {
  
      
render() {
    return (
     <Router> 
      <div className="App"> 
        
        <nav>
        <Link to='/'>Home<Icon name="home" /></Link>{' '}
        <Link to='/items'>My Items</Link>{' '}
        <Link to='/privacypolicy'>Privacy Policy</Link>{' '}
        </nav>
      <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/item/:id" component={Items} />
      <Route path="/items" component={MainContainer} />
      <Route path="/privacypolicy" component={PrivacyPolicy} />
      </Switch>
      

      </div>
     </Router> 
        
        
        
        
    );
  }
}
export default App;