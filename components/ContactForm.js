import React, { Component } from 'react'
import Link from 'next/link'

class ContactForm extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="ContactForm">
				<form>
					<div>
						<input type="text" placeholder="fullname" name="fullname" />
					</div>
					<div>
						<input type="email" placeholder="email" name="email" />
					</div>
					<div>
						<textarea placeholder="msg...." name="message" />
					</div>
					<div>
						<input type="submit" />
					</div>
				</form>
			</div>
		)
	}
}

export default ContactForm