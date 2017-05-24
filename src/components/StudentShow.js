import React from 'react'

export default function StudentShow(props){
  if (!props.student) {
    return null
  }

  return (
    <div>
      <h1>{props.student.name}</h1>
      <button className='btn btn-danger' onClick={() => props.onDelete(props.student.id)}>Delete This Student</button>
    </div>
  )
}
