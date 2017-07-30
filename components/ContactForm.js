import React, { Component } from 'react'
import Link from 'next/link'
import axios from 'axios'

const instance = axios.create({baseURL: 'http://localhost:3000/api/v1'})


class ContactForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			fullname: '',
			email: '',
			msg: ''
		}

		this.handleSubmit = this.handleSubmit.bind(this)
		this.handleChange = this.handleChange.bind(this)
	} 

	componentDidMount(){
		this.setState({
			fullname: '',
			email: '',
			msg: ''
		})
	}

	submitForm(data) {
		instance.post('sendMail', data).then((response) => {
			console.log(response)
		}).catch((error) => {
			console.log(error)
		})
	}

  handleChange(e) {
    const value = e.target.value
    this.setState({
      [e.target.name]: value
    })
  }

	handleSubmit(e) {
		e.preventDefault()
		this.submitForm(this.state)
		e.target.fullname.value = ''
		e.target.email.value = ''
		e.target.msg.value = ''

	}

	render() {
		return (
			<div className="ContactForm">
				<form onSubmit={this.handleSubmit}>
					<div className="field">
						<input 
						className="input" 
						type="text" 
						placeholder="fullname" 
						name="fullname"
						onChange={this.handleChange} />
					</div>
					<div className="field">
						<input 
						className="input" 
						type="email" 
						placeholder="email" 
						name="email"
						onChange={this.handleChange} />
					</div>
					<div className="field">
						<textarea 
						className="textarea" 
						placeholder="msg...." 
						name="msg"
						onChange={this.handleChange} />
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