import React, { Component } from 'react'
import Link from 'next/link'

class Header extends Component {
	constructor(props) {
		super(props)
		this.state = {
			loggedIn: false
		}
		this.signOut = this.signOut.bind(this)
	}

	componentDidMount() {
		this.setState({
			loggedIn: localStorage.getItem('cnd.token') ? true : false
		});
	}

	signOut() {
    this.setState({
      loggedIn: false
    });
		window.localStorage.removeItem('cnd.token')
		window.location.replace('/');
	}

	render() {
		return (
			<div className="Header">
			<nav className="navbar is-transparent">
			  <div className="navbar-brand">
			  	<Link href="/">
			    <a className="navbar-item">
			     <h1>CREATORS NEVER DIE</h1>
			    </a>
			    </Link>

			    <div className="navbar-burger burger" data-target="navMenuExample">
			      <span></span>
			      <span></span>
			      <span></span>
			    </div>
			  </div>

			  <div id="navMenuExample" className="navbar-menu">

			    <div className="navbar-start">
			      <Link href="/portfolio">
			      	<a className="navbar-item">Portfolio</a>
			      </Link>
			      <Link href="/about">
			      	<a className="navbar-item">About</a>
			      </Link>
			      <Link href="/contact">
			      	<a className="navbar-item">Contact Us</a>
			      </Link>
						{!this.props.loggedIn ?
							<Link href="/login">
				      	<a className="navbar-item">Login</a>
							</Link> 
            :
	            <a className="navbar-item" onClick={this.signOut}>Log out</a>
	          }
						{this.props.loggedIn ?
							<Link href="/admin">
				      	<a className="navbar-item">Admin</a>
							</Link> 
            :
	            null
	          }    
			     </div>

			    <div className="navbar-end">
			    	<Link href="http://www.instagram.com/creatorsneverxx">
			      <a className="navbar-item" target="_blank">
			        Instagram
			      </a>
			      </Link>
			    	<Link href="http://www.twitter.com/creatorsneverxx">
				      <a className="navbar-item" target="_blank">
				        Twitter
				      </a>
			      </Link>
		      </div>

			  </div>

			</nav>
			</div>
		)
	}
}

export default Header