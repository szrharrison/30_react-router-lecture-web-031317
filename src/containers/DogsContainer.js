import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'

import NavBar from '../components/NavBar'
import StudentList from '../components/StudentList'
import StudentForm from '../components/StudentForm'

export default class DogsContainer  extends Component {
  constructor() {
    super()
    this.state = {
      dogs: ['Fido', 'Misty']
    }
  }

  handleSubmit(dog) {
    this.setState(prev => ({dogs: [...prev.dogs, dog]}))
  }

  render(){
    return (
      <div>
        <StudentList students={ this.state.dogs } />
        <StudentForm  onSubmit={ this.handleSubmit.bind(this) } />
      </div>
    )
  }
}
