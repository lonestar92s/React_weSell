import React, { Component } from 'react'



export default class AddItems extends Component {
    render() {
        return (
            <div className="App">
			 <h1>Item Info</h1>
			  <section>
			    <div className="list"><div className="images"><img src={this.props.location.state.image_url} alt="IKEA Kivik Couch"/></div>{this.props.location.state.item_brand} {this.props.location.state.item_name}</div>
			   </section>
			</div>
        )
    }
}