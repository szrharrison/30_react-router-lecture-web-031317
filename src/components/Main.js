import React, {Component} from 'react'
import { Switch, Route, withRouter } from 'react-router-dom'

import { login } from '../api'

import NavBar from './NavBar'
import LoginForm from './LoginForm'
import StudentsContainer from '../containers/StudentsContainer'

import isAuthenticated from './hocs/isAuthenticated'

const authedStudentContainer = isAuthenticated(StudentsContainer)

class Main extends Component {

  handleLogin(params){
    login(params)
      .then(data => {
        sessionStorage.setItem('jwt', data.token)
        this.props.history.push('/students')
      })
  }

  logout(e){
    console.log(e)
    e.preventDefault()
    sessionStorage.removeItem('jwt')
    this.props.history.push('/login')
  }

  render(){
    return (
      <div>
        < NavBar title="Dog and Student Lister" color="black" logout={this.logout.bind(this)}/>
        <Switch>
          <Route exact path="/login" component={() => <LoginForm loginUser={this.handleLogin.bind(this)}/>} />
          < Route path="/students" component={authedStudentContainer} />
          < Route exact path="/about"  render={() => <h1>This is an app about dogs and students</h1>}/>
        </Switch>
      </div>
    )
  }
}

export default withRouter(Main)
