const express = require('express')
const config = require('config')
const mongoose = require('mongoose')
const cors = require('cors')

const app = express()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

const PORT = process.env.PORT || 5000

mongoose
  .connect(process.env.mongoURI || config.get('mongoURI'), {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then(() => console.log('MongoDB Connected...'))
  .catch((err) => console.log(err))

app.use('/api/slots', require('./routes/api/slots'))

app.listen(PORT, () => console.log(`Server started at PORT ${PORT}`))
