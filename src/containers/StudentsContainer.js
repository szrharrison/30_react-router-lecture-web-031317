import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'

import StudentsPage from '../components/StudentsPage'

import { fetchStudents, createStudent, deleteStudent, updateStudent }  from '../api'

class StudentsContainer extends Component {

  constructor() {
    super()
    console.log("constructor!")
    this.state = {
      students: []
    }

    this.handleAddStudent    = this.handleAddStudent.bind(this)
    this.handleDeleteStudent = this.handleDeleteStudent.bind(this)
    this.handleUpdateStudent = this.handleUpdateStudent.bind(this)
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

  handleDeleteStudent(id){
    deleteStudent(id)
      .then( () => {
        this.setState( prevState => ({
          students: prevState.students.filter( student => student.id !== id)
        })
      )
      this.props.history.push('/students')
    })
  }

  handleUpdateStudent(student){
    updateStudent(student).then( () => {
      this.setState(prevState => {
        return {
          students: prevState.students.map(s => {
            if (s.id === student.id) {
              return student
            } else {
              return s
            }
          })
        }
      })
      this.props.history.push(`/students/${student.id}`)
    })
  }

  render(){
    console.log(this.state)
    return (
      < StudentsPage students={this.state.students} onSubmit={this.handleAddStudent} onDelete={this.handleDeleteStudent} onUpdate={this.handleUpdateStudent}/>
    )
  }
}

export default StudentsContainer
