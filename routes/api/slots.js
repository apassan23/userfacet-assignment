const router = require('express').Router()
const Availability = require('../../models/Availability')

router.post('/book', (req, res) => {
  const { full_name, email } = req.body

  Availability.findOne({ full_name, email })
    .then((slot) => {
      const { weekday, start_time, end_time } = req.body

      if (!weekday || !start_time || !end_time)
        return res
          .status(400)
          .json({ msg: 'no weekday, start time, or end time provided' })

      const days = Object.keys(slot.availability)
      const idx = days.findIndex((day) => weekday === day)
      if (idx === -1)
        return res.status(404).json({
          slot_confirmed: 'false',
          reason: 'Teacher is not available on this day',
        })

      let slots = slot.availability[days[idx]]
      slots.forEach((item) => {
        console.log(item)
        if (item.start_time === start_time && item.end_time === end_time)
          return res.status(200).json({
            slot_confirmed: 'true',
            weekday,
            start_time,
            end_time,
            date: '1 August 2022',
          })
      })

      return res.status(404).json({
        slot_confirmed: false,
        reason: `No Slot Available between ${start_time} and ${end_time}`,
      })
    })
    .catch((err) => res.status(500).json({ msg: 'Internal Server Error' }))
})

router.post('/', (req, res) => {
  const newSlot = new Availability({ ...req.body })

  newSlot.save().then((slot) => res.status(200).json(slot))
})

router.get('/', (req, res) => {
  Availability.find().then((items) => res.status(200).json(items))
})

module.exports = router
