import React, { Component } from 'react';
export default class MainContainer extends Component {
  state = {
        items: []
    }
   getNews = async () => {

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
    this.getNews().then((data) => console.log(data,'from famous quotes'));
  } 



render(){
const itemsList = this.state.items.map((items, index)=>{
return <li key={index}>{items}</li>
  })
    return (
         <div className="ItemsList">
         
         <h3>Items</h3>
         <ul>{itemsList}</ul>
         </div>
      )
	
  }

}
