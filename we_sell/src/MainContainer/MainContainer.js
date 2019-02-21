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


 componentDidMount(){
    this.getItems().then((data) => console.log(data,'from famous quotes'));
  } 



render(){
const itemsList = this.state.items.map((items, index)=>{
return <li key={index}><Link to={{pathname:'/item', state:items}}>{items.item_category} {items.item_name} ${items.item_price}</Link></li>
  })
    return (
         <div className="App">
         <h1>Items</h1>
         <ul className="Grid">{itemsList}</ul>
         <Forms addItem ={this.addItem} />
         </div>
      )
	
  }

}
         
