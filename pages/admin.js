import React, { Component } from 'react'
import Link from 'next/link'
import Layout from '../components/Layout'
import axios from 'axios'
import Router from 'next/router'

const instance = axios.create({baseURL: 'http://localhost:3000/api/v1'})

class Admin extends Component {
	constructor(props) {
		super(props)
		this.state = {
			title: '',
			content: [
				{className: '', body: ''}
			]
		}
		this.deletePage = this.deletePage.bind(this)


		this.addInput = this.addInput.bind(this)
		this.handleSubmit = this.handleSubmit.bind(this)
		this.handleChange = this.handleChange.bind(this)
		this.handleNestedChange = this.handleNestedChange.bind(this)
	}

	componentDidMount() {
		this.setState({
			title: '',
			content: [
				{className: '', body: ''}
			]
		})
	}

	static async getInitialProps() {
		const res = await instance.get('listPages')
		const pages = res.data
		return { pages: pages }
	}

  handleChange(e) {
    const value = e.target.value
    this.setState({
      [e.target.name]: value
    })
  }

  handleNestedChange(e) {
    const newStateContent = this.state.content;
    newStateContent[e.target.id][e.target.name] = e.target.value;
    this.setState({
      content: newStateContent
    });
  }


  addInput() {
    const newInput = { className: '', body: ''}
    this.setState({content: this.state.content.concat(newInput)});
  }



  deletePage(id) {
    instance.delete(`deletePage/${id}`).then((response) => {
      Router.push('/admin')
    }).catch((error) => {
      console.log(error)
    })
  }

	createPage(page) {
    instance.post('createPage',page).then((response) => {
      Router.push({
      	pathname: '/admin'
      })
    }).catch((error) => {
      console.log(error)
    })
  }

  handleSubmit(e) {
    e.preventDefault();
    this.createPage(this.state);
  }




	render() {
		const pages = this.props.pages.map((page, i) => {
			return (
				<div key={i}>
					<h2>{page.title}</h2>
					<button onClick={this.deletePage(i)}>Delete</button>
				</div>
			)
		})


	  const contentInputs = this.state.content.map((content, i)=> {
     return (
        <div key={i}>
          <input 
            type="text" 
            name="className"
            id={`${i}`} 
            placeholder="Class name"
            onChange={this.handleNestedChange}
            value={this.state.content[0].className || ''}
          />
          <input 
            type="text" 
            name="body" 
            placeholder="Body"
            id={`${i}`}
            onChange={this.handleNestedChange}
            value={this.state.content[0].body || ''}
          />
        </div>
      )
    })
		return (
			<Layout>
				<div className="Admin">
					<h2>Admin</h2>
					<p>Create a new page</p>
					<form onSubmit={this.handleSubmit}>
	        	<input 
	            type="text" 
	            name="title" 
	            placeholder={`Enter the title`}
	            onChange={this.handleChange}
	            value={this.state.title} 
	            />
	          <p>Content</p>
	            {contentInputs}
	            <button onClick={this.addInput}>Add</button>
	          <input type="submit" value={`Submit`}/>
	        </form>
					{pages}
				</div>
			</Layout>
		)
	}
}

export default Admin