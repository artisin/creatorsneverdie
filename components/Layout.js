import Head from 'next/head'
import stylesheet from '../styles/main.scss'

import Header from './Header'

import React, {Component} from 'react'


class Layout extends Component {
	constructor(props) {
		super(props);
		this.state = {
			loggedIn: false
		}
	}

	componentDidMount() {
		this.setState({
			loggedIn: localStorage.getItem('cnd.token') ? true : false
		});
	}

	render() {
		return(
			<div>
				<Head>
				<title>CREATORS NEVER DIE</title>
				<style dangerouslySetInnerHTML={{ __html: stylesheet }} />
				<meta name='viewport' content='initial-scale=1.0, width=device-width' />
				</Head>
				<Header loggedIn={this.state.loggedIn} />
				{ this.props.children }
			</div>
		)
	}
}


export default Layout