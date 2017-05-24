import React from 'react'
import { Route, Link, Switch } from 'react-router-dom'

import StudentForm from './StudentForm'
import StudentShow from './StudentShow'

function StudentsPage(props) {
  const nameEls = props.students.map( (student, i) =>
    <li key={i}><Link to={`/students/${student.id}`}>{student.name}</Link></li>
  )

  return (
      <div>
        <div className='col-md-4'>
          <ul>
            { nameEls }
          </ul>
          <Switch>
            < Route path="/students/new" />
            < Route path="/students" render={() => <Link to="/students/new">Add Student</Link>} />
          </Switch>
        </div>

        <div className='col-md-8'>
          <Switch>
            <Route path="/students/new" render={() => < StudentForm  onSubmit={ props.onSubmit }/>}/>
            <Route path="/students/:id" render={ ({match}) => {
              const student = props.students.find(student => student.id === parseInt(match.params.id))
              return < StudentShow student={student} onDelete={ props.onDelete }/>
            } }/>
          </Switch>
        </div>
      </div>
  )
}

export default StudentsPage
