import React from 'react'

function StudentList(props) {
  const nameEls = props.students.map( (name, i) => <li key={i}>{name}</li>)

  return (
      <div className='col-md-4'>
        <ul>
          { nameEls }
        </ul>
      </div>
  )
}

export default StudentList
