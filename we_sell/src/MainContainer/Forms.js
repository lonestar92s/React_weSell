import React, { Component } from 'react';
 


export default class Forms extends Component {
    state = {
        item_id: '',
        item_name: '',
        item_price: '',
        item_brand: '',
        item_category: '',
        image_url: ''
    }
    handleSubmit = (event) => {
        let item = {
            item_id: this.state.item_id,
            item_name: this.state.item_name,
        	item_price: this.state.item_price,
            item_brand: this.state.item_brand,
        	item_category: this.state.item_category,
            username: this.state.username
        }
        
        this.props.addItem(item)
        event.preventDefault();
        fetch('http://localhost:9000/items/', {
            method: 'post',
            headers: { 
            	'Accept': 'application/json',
            	'Content-Type': 'application/json' },
                body: JSON.stringify({
                "item_id": this.state.item_id,
                "item_name": this.state.item_name,
        		"item_price": this.state.item_price,
                "item_brand": this.state.item_brand,
        		"item_category": this.state.item_category,
                "image_url": this.state.image_url
            })
        });
    };
    handleChange = (event) => {
    this.setState({
    	[event.currentTarget.name] : event.currentTarget.value
    })
  }

    render() {
        return (
      <form onSubmit={this.handleSubmit} id="form-input" className="ui focus input">
        <input type='number' step='1' autoComplete="off" name="item_id" placeholder="Item ID" value={this.state.item_id} onChange={this.handleChange} required="required"  />
        <input type='text' autoComplete="off" name="item_name" placeholder="Item Name" value={this.state.item_name} onChange={this.handleChange} required="required" />
        <input type='text' autoComplete="off" name="item_brand" placeholder="Item Brand" value={this.state.item_brand} onChange={this.handleChange} required="required"  />
        <input type='text' autoComplete="off" name="item_category" placeholder="Item Category" value={this.state.item_category} onChange={this.handleChange} required="required"  />
        <input type='number' step='1' autoComplete="off" name="item_price" placeholder="Item Price" value={this.state.item_price} onChange={this.handleChange} required="required"  />
        <input type='url' autoComplete="off" name="image_url" placeholder="Image URL" value={this.state.image_url} onChange={this.handleChange} required="required" />
        <input type='submit' value="Submit" />
      </form>
        )
    }
}
        