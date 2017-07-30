import React, { Component } from 'react'
import Link from 'next/link'
import Layout from '../components/Layout'
import ContactForm from '../components/ContactForm'

class Contact extends Component {
	render() {
		return (
			<Layout>
			<div className="Contact">
				<h2>Contact</h2>
				<ContactForm />
			</div>
			</Layout>
		)
	}
}

export default Contact