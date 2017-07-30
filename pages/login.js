import React, {Component} from 'react'
import axios from 'axios'
import Layout from '../components/Layout'



const instance = axios.create({baseURL: 'http://localhost:3000/api/v1/'})


class Login extends Component {
	
	constructor(props) {
		super(props)
		this.state = {
			email: '',
			password: ''
		}
		this.handleChange = this.handleChange.bind(this)
		this.handleSubmit = this.handleSubmit.bind(this)
	}

	componentDidMount() {
		axios.defaults.headers.common['Authorization'] = 'JWT ' + window.localStorage.getItem('cnd.token');
	}

	handleChange(e) {
		const value = e.target.value
		this.setState({
			[e.target.name]: value
		})
	}

	signIn(email, password) {
		instance.post(`login`, {email: email, password: password}).then((response) => {
			this.setState({
				loggedIn: true
			});
			window.localStorage.setItem('cnd.token', response.data.token);
      window.location.replace('/');
      axios.defaults.headers.common['Authorization'] = 'JWT ' + localStorage.getItem('cnd.token');

		}).catch((error) => {
			console.log(error);
		})
	}

	handleSubmit(e) {
		e.preventDefault();
		this.signIn(this.state.email, this.state.password)
	}

	render() {
		return(
			<Layout>
				<h2>Login</h2>
        <form onSubmit={this.handleSubmit}>
        	<input 
            type="email" 
            name="email" 
            placeholder={`Enter your email`}
            onChange={this.handleChange}
            value={this.state.email || ''} 
            />
          <input 
            type="password"
            name="password"
            placeholder={`Enter your password`}
            onChange={this.handleChange}
            value={this.state.password || ''}
            />
          <input type="submit" value={`Submit`}/>
        </form>
			</Layout>
		)
	}
}


export default Login