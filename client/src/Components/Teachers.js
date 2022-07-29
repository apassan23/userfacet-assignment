import React from 'react'
import TeacherCard from './TeacherCard'

const Teachers = ({ teachers }) => {
  return (
    <div>
      {teachers.map((teacher) => (
        <TeacherCard key={teacher._id} {...teacher} />
      ))}
    </div>
  )
}

export default Teachers
