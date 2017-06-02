import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'

import NavBar from './NavBar'
import StudentsContainer from '../containers/StudentsContainer'
import LogInForm from './LogInForm'
import { logIn } from '../api'
import isAuthenticated from '../hocs/isAuthenticated'
import isRouted from '../hocs/isRouted'

class Main extends Component {
  constructor(props) {
    super(props)

    this.state = {
      loggedIn: false
    }

    this.handleLogin = this.handleLogin.bind(this)
  }

  handleLogin(account) {
    return logIn(account)
      .then( data => {
        sessionStorage.setItem('jwt', data.token)
        sessionStorage.setItem('user', data.account.username)
        return data
      } )
      .then( data => this.setState({ loggedIn: true}) )
  }

  render() {
    const AuthedStudentsContainer = isAuthenticated(StudentsContainer)
    const RoutedLogInForm = isRouted(LogInForm, {onSubmit: this.handleLogin} )

    let title

    if(this.state.loggedIn) {
      title = `Welcome ${this.state.user}`
    } else {
      title = 'Student Lister'
    }
    return (
      <div>
        <NavBar title={title} color="black" onLogOut={ () => sessionStorage.clear() } />
        <Switch>
          <Route path="/students" component={AuthedStudentsContainer} />
          <Route exact path="/about"  render={() => <h1>This is an app about dogs and students</h1>} />
          <Route exact path="/login"  component={RoutedLogInForm}/>
        </Switch>
      </div>
    )
  }
}

export default Main
