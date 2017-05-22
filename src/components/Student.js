import React from 'react'

function Student(props) {

  const student = props.students.find( student => student.id == props.match.params.id )

  return (
      <div>
        <h1>Student Profile</h1>
        <h3>{student.name}</h3>
        <p>Id: {student.id}</p>
      </div>
  )
}

export default Student
