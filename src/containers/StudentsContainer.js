import React, { Component } from 'react'

import StudentsApp from '../components/StudentsApp'

import { fetchStudents, createStudent }  from '../api'

class StudentsContainer extends Component {

  constructor(){
    super()
    this.state = {
      students: []
    }

  }

  componentDidMount(){
    fetchStudents()
      .then( students => this.setState({
        students: students
      }) )
  }

  handleAddStudent(name){
    createStudent(name)
      .then( student => this.setState( prevState =>  ({ students: [...prevState.students, student] }) ))
      .catch(e => console.log(e))
  }

  render(){
    return (
      < StudentsApp students={this.state.students} onSubmit={this.handleAddStudent.bind(this)} />
    )
  }
}

export default StudentsContainer
