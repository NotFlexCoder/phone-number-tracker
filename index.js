const express = require('express')
const fetch = require('node-fetch')
const app = express()

app.get('/', async (req, res) => {
  const number = req.query.number
  if (!number) {
    return res.status(400).send('Missing number parameter')
  }

  try {
    const response = await fetch(`https://call-tracker-api.vercel.app/?number=${encodeURIComponent(number)}`)
    const data = await response.text()
    res.send(data)
  } catch (err) {
    res.status(500).send('Error fetching from API')
  }
})

module.exports = app
