import React, { Component } from 'react'
import Link from 'next/link'
import axios from 'axios'
const instance = axios.create({baseURL: 'http://localhost:3000/api/v1'})

class PortfolioList extends Component {
	constructor(props) {
		super(props);
	}

	static async getInitialProps() {
		const res = await instance.get('listPages')
		const pages = res.data
		return { pages: pages }
	}

	render() {
		return (
			<div className="PortfolioList">
			</div>
		)
	}
}

export default PortfolioList