import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import AddItems from '../Items/Items'
import '../App.css'
export default class MainContainer extends Component {
  state = {
        items: []
    }
   getItems = async () => {

    try {
      const items = await fetch('http://localhost:9000/items');
      const itemsJson = await items.json();
      this.setState({items: itemsJson});
      return itemsJson
    } catch (err) {
      console.log(err, 'error in catch block')
      return err
  }

}


 componentDidMount(){
    this.getItems().then((data) => console.log(data,'from famous quotes'));
  } 



render(){
const itemsList = this.state.items.map((items, index)=>{
return <li key={index}><Link to={{pathname:'/item', state:items}}>{items.item_name}</Link></li>
  })
    return (
         <div className="App">
         <h1>Items</h1>
         <ul className="App">{itemsList}</ul>
         </div>
      )
	
  }

}
         
