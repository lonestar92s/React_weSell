import React, { Component } from 'react';
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
return <li key={index}>{items.item_name} ${items.item_price}</li>
  })
    return (
         <div className="App">
         <h3>Items</h3>
         <ul className="App">{itemsList}</ul>
         </div>
      )
	
  }

}
         
