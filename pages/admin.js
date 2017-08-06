import React, { Component } from 'react'
import Link from 'next/link'
import Layout from '../components/Layout'
import axios from 'axios'
import Router from 'next/router'

const instance = axios.create({baseURL: 'http://localhost:3000/api/v1'})

class Admin extends Component {
  /**
   * Runs before constructor and passes recived props
   */
  static async getInitialProps() {
    const res = await instance.get('listPages');
    const pages = res.data;
    return { pages };
  }
  constructor(props) {
    super(props);
    //used to reset form as well
    this.staticStuc = {
      title: '',
      content: [
        {className: '', body: ''}
      ]
    };
    //assign 'getInitialProps' props to state
    this.state = {
      ...props,
      ...this.staticStuc
    };
    this.deletePage = this.deletePage.bind(this);


    this.addInput = this.addInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleNestedChange = this.handleNestedChange.bind(this);
  }

  componentDidMount() {
    axios.defaults.headers.common['Authorization'] = 'JWT ' + localStorage.getItem('cnd.token');
    this.setState({
      title: '',
      content: [
        {className: '', body: ''}
      ]
    });
  }



  handleChange(e) {
    const value = e.target.value;
    this.setState({
      [e.target.name]: value
    });
  }

  handleNestedChange(e) {
    const newStateContent = this.state.content;
    newStateContent[e.target.id][e.target.name] = e.target.value;
    this.setState({
      content: newStateContent
    });
  }


  addInput() {
    const newInput = { className: '', body: ''};
    this.setState({content: this.state.content.concat(newInput)});
  }



  deletePage(id) {
    instance.delete(`deletePage/${id}`).then((response) => {
      //on response from db that the page is deleted
      //we now need to reflect those changes to our local state
      if (response && response.data) {
        self.setState({pages: response.data});
      }
      // no need to push a new route state since we on admin
      // Router.push('/admin')
    }).catch((error) => {
      console.log(error);
    });
  }

  createPage(data) {
    const self = this;
    instance.post('createPage', data).then((response) => {
      //on response from db that the page is created
      //we now need to reflect those changes to our local state
      //and reset the form input
      if (response && response.data) {
        const staticStuc = Object.assign({}, self.staticStuc);
        self.setState({
          ...staticStuc,
          pages: response.data
        });
      }
      // no need to push a new route state since we on admin
      // Router.push('/admin')
    }).catch((error) => {
      console.log(error);
    });
  }


  handleSubmit(e) {
    e.preventDefault();
    this.createPage({
      title: this.state.title,
      content: this.state.content,
    });
  }



  render() {
    const self = this;

    const pages = this.state.pages.map((page, i) => {
      return (
        <div key={i}>
          <h2>{page.title}</h2>
          {/*
              THE DAMN BUGS LOCATIONS
              Explanation: This onClick event needed to be wrapped in a fucntion.
              To make a long story short, the reason why you saw the page for a
              temporary moment before it houdini'ed the fuck out of existence was
              because in fact this code was deleting the page. So the page was
              "disappearing" since it was being deleted.
           */}
          <button onClick={() => self.deletePage(i)}>Delete</button>
        </div>
      );
    });

    const contentInputs = this.state.content.map((content, i)=> {
      return (
        <div key={i}>
          <input
            type="text"
            name="className"
            id={`${i}`}
            placeholder="Class name"
            onChange={this.handleNestedChange}
            value={content.className || ''}
          />
          <input
            type="text"
            name="body"
            placeholder="Body"
            id={`${i}`}
            onChange={this.handleNestedChange}
            value={content.body || ''}
          />
        </div>
      );
    });
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
              value={this.state.title}
              onChange={this.handleChange}
              />
            <p>Content</p>
              {contentInputs}
              <button type="button" onClick={this.addInput}>Add</button>
              <input type="submit" value={`Submit`}/>
          </form>
          {pages}
        </div>
      </Layout>
    )
  }
}

export default Admin
