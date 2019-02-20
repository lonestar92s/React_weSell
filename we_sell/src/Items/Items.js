import React, { Component } from 'react'



export default class AddItems extends Component {
	render() {
		return (
			<div className="Items">
			<h1>Info</h1>
			<ul>
			<li>{this.props.location.state.item_name}</li>
			

			</ul>
			</div>
		)
	}
}