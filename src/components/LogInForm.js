import React, { Component } from 'react'

class LogInForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      username: '',
      password: ''
    }
    this.handleUsername = this.handleUsername.bind(this)
    this.handlePassword = this.handlePassword.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleUsername(event) {
    const username = event.target.value
    this.setState({
      username: username
    })
  }

  handlePassword(event) {
    const password = event.target.value

    this.setState({
      password: password
    })
  }

  handleSubmit(event) {
    event.preventDefault()
    this.props.onSubmit(this.state)
      .then( () => this.props.history.push('/students') )
  }

  render() {
    return (
      <form className="log-in" onSubmit={this.handleSubmit}>
        <label>Username:
          <input
            type="text"
            onChange={this.handleUsername}
            value={this.state.username}
          /></label>
        <label>Password:
          <input
            type="password"
            onChange={this.handlePassword}
            value={this.state.password}
          /></label>
        <button type="submit">log in</button>
      </form>
    )
  }
}

export default LogInForm
