import React, { Component } from 'react';
import { Link } from 'react-router-dom'

import Forms from './Forms'
import '../App.css'

export default class MainContainer extends Component {
  state = {
        items: []
    }
     addItem = (item) => {
        let newItem = this.state.items
        newItem.push(item)
        this.setState({
            items: newItem
        })
    }
//Delete Item
    deleteItem = (item) => {
        let newItem = this.state.items
        newItem.splice(item, 1);
        this.setState({
            items: newItem
        })
    }

   getItems = async () => {

    try {
      const items = await fetch('http://localhost:9000/items/');
      const itemsJson = await items.json();
      this.setState({items: itemsJson});
      return itemsJson
    } catch (err) {
      console.log(err, 'error in catch block')
      return err
  }

}
   //delete
handleDelete = (itemToBeDeleted)=>{
    console.log(itemToBeDeleted);
    this.deleteItem(itemToBeDeleted.currentTarget.value)

  }

 componentDidMount(){
    this.getItems().then((data) => console.log(data,'from famous quotes'));
  } 



render(){
const itemsList = this.state.items.map((items, index)=>{
return <li className="card" key={index}><Link to={{pathname:`/item/${items.item_id}`, state:items}}>{items.item_id}. {items.item_name} ${items.item_price}</Link> <button className="ui button" value={index} onClick={this.handleDelete}>Delete</button></li>
  })
    return (
         <div className="App">
         <h1>Items</h1>
         <ol className="Grid">{itemsList}</ol>
         <Forms addItem ={this.addItem} />
         </div>
      )
	
  }

}
         
