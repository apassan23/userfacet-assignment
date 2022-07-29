import React, { useState } from 'react'
import MyDropDown from './MyDropDown'
import { Form, Button } from 'react-bootstrap'

const BookSlot = ({ onSubmit }) => {
  const days = useState([
    'Monday',
    'TuesDay',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday',
  ])
  const startTimes = useState([
    '9 AM',
    '10 AM',
    '11 AM',
    '2 PM',
    '3 PM',
    '4 PM',
  ])
  const endTimes = useState(['10 AM', '11 AM', '12 PM', '3 PM', '4 PM', '5 PM'])

  const [day, setDay] = useState('')
  const [startTime, setStartTime] = useState('')
  const [endTime, setEndTime] = useState('')

  return (
    <Form
      onSubmit={(event) => {
        event.preventDefault()
        onSubmit({ day, start_time: startTime, end_time: endTime })
      }}
    >
      <h1>Book Slot</h1>
      Day:{' '}
      <MyDropDown
        items={days}
        title="Friday"
        handleChange={(day) => setDay(day)}
      />
      Start Time:{' '}
      <MyDropDown
        items={startTimes}
        title="9 AM"
        handleChange={(startTime) => setStartTime(startTime)}
      />
      End Time:{' '}
      <MyDropDown
        items={endTimes}
        title="10 AM"
        handleChange={(endTime) => setEndTime(endTime)}
      />
      <Button type="submit" className="btn btn-block my-5">
        Book
      </Button>
    </Form>
  )
}

export default BookSlot
