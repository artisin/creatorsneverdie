import React, {Component} from 'react'
import Layout from '../components/Layout'
import Main from '../components/Main'
import PortfolioList from '../components/PortfolioList'
import ContactForm from '../components/ContactForm'

class Index extends Component {
	render() {
		return(
			<Layout>
				<Main />
				<h2>Our Work</h2>
				<PortfolioList />
				<h2>Contact Us</h2>
				<p>You're so close to success. Don't stop now!</p>
				<ContactForm />
			</Layout>
		)
	}
}


export default Index