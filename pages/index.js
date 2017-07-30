import React, {Component} from 'react'
import Layout from '../components/Layout'
import Main from '../components/Main'
import PortfolioList from '../components/PortfolioList'
import ContactForm from '../components/ContactForm'

class Index extends Component {
	render() {
		return(
			<Layout>
				<div className="Index container has-text-centered">
						<div className="MainWrapper">
							<Main />
						</div>
							
							<div className="WorkWrapper">
								<h2>Our Work</h2>
								<PortfolioList />
							</div>

							<div className="ContactWrapper">
								<h2>Contact Us</h2>
								<p>You're so close to success. Don't stop now!</p>
								<ContactForm />
							</div>
				</div>
			</Layout>
		)
	}
}


export default Index