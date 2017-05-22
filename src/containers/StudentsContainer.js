import React, { Component } from 'react'

import StudentList from '../components/StudentList'
import StudentForm from '../components/StudentForm'

import { fetchStudents, createStudent }  from '../api'

class StudentsContainer extends Component {

  constructor(){
    super()
    this.state = {
      names: []
    }

  }

  componentDidMount(){
    fetchStudents()
      .then( data => this.setState({
        names: data.map(student => student.name )
      }) )
  }

  handleAddStudent(name){
    this.setState( prevState =>  ({ names: [...prevState.names, name] }) )
    createStudent(name)
      .catch(e => this.setState(prevState => ({names: prevState.names.filter(person => person !== name)})))
  }

  render(){
    return (
      <div>
        < StudentList students={this.state.names} />
        < StudentForm  onSubmit={ this.handleAddStudent.bind(this) }/>
      </div>
    )
  }
}

export default StudentsContainer
