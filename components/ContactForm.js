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
					<div className="field">
						<input className="input" type="text" placeholder="fullname" name="fullname" />
					</div>
					<div className="field">
						<input className="input" type="email" placeholder="email" name="email" />
					</div>
					<div className="field">
						<textarea className="textarea" placeholder="msg...." name="message" />
					</div>
					<div>
						<input className="button" type="submit" />
					</div>
				</form>
			</div>
		)
	}
}

export default ContactForm