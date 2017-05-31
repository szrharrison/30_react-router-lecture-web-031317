import React, { Component } from 'react'

export default class LoginForm extends Component {
  constructor(){
    super()
    this.state = {
      username: '',
      password: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(prop, value){
    this.setState({
      [prop]: value
    })
  }

  handleSubmit(e){
    e.preventDefault()
    this.props.loginUser(this.state)
  }

  render(){
    return (
      <form onSubmit={this.handleSubmit}>
        <input type='text' value={this.state.username} onChange={ e => this.handleChange('username', e.target.value)}/>
        <input type='password' value={this.state.password} onChange={ e => this.handleChange('password', e.target.value)} />
        <input type='submit' value="Log In" />
      </form>
    )
  }
}
