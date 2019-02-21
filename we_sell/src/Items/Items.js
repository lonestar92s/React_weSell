import React, { Component } from 'react'



export default class AddItems extends Component {
    render() {
        return (
            <div className="App">
			 <h1>Item Info</h1>
			  <section>
			    <div className="list">{this.props.location.state.item_brand} {this.props.location.state.item_name}</div>
			   </section>
			</div>
        )
    }
}