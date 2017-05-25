import React, { Component } from 'react'

import StudentsPage from '../components/StudentsPage'

import { fetchStudents, createStudent, deleteStudent }  from '../api'

class StudentsContainer extends Component {

  constructor(){
    super()
    this.state = {
      students: []
    }

    this.handleAddStudent = this.handleAddStudent.bind(this)
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
  }

  render(){
    return (
      < StudentsPage students={this.state.students} onSubmit={this.handleAddStudent} onDelete={this.handleDeleteStudent} onUpdate={this.handleUpdateStudent}/>
    )
  }
}

export default StudentsContainer
