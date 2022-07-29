import './App.css'
import Header from './Components/Header'
import { useEffect, useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Teachers from './Components/Teachers'
import BookSlot from './Components/BookSlot'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Alert } from 'react-bootstrap'

function App() {
  const [teachers, setTeachers] = useState({})
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [msg, setMsg] = useState('')

  useEffect(() => {
    const fetchTeachers = async () => {
      const res = await fetch('http://localhost:5000/api/slots/')
      const data = await res.json()

      setTeachers(data)
      setLoading(true)
    }

    fetchTeachers()
  }, [])

  const handleSubmit = (teacher) => {
    const bookSlot = async () => {
      const res = await fetch('http://localhost:5000/api/slots/book', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          body: teacher,
        },
      })
      const data = await res.json()
      if (res.status === 404) {
        setError(data.reason)
        return
      }

      setMsg('Slot Booked!')
    }

    bookSlot()
  }

  return (
    <Router>
      <Container className="App">
        <Header />
        {loading ? null : <Teachers teachers={teachers} />}
        <BookSlot onSubmit={handleSubmit} />
        {msg.length > 0 || error ? (
          <Alert variant={error ? 'danger' : 'success'}>
            {error ? error : msg}
          </Alert>
        ) : null}
      </Container>
    </Router>
  )
}

export default App
