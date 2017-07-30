import React, { Component } from 'react'
import Link from 'next/link'

class Main extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="Main">
					<div className="bigLogo">
						<img src="/" />
					</div>
					<div className="captureText">
						<h2>Strategize your digital presence</h2>
						<p>Web & App Development // Social Media Management</p>
					</div>
			</div>
		)
	}
}

export default Main