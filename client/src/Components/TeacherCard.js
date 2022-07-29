import React from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const TeacherCard = ({ full_name, email, _id }) => {
  return (
    <Card>
      <Card.Body>
        <Card.Title>{full_name}</Card.Title>
        <Card.Text>{email}</Card.Text>
        <Link to={`/teacher/${_id}`}>View Details</Link>
      </Card.Body>
    </Card>
  )
}

export default TeacherCard
