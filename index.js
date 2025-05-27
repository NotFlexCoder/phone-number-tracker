const express = require('express')
const fetch = require('node-fetch')
const app = express()

app.get('/', async (req, res) => {
  const number = req.query.number
  if (!number) {
    return res.status(400).json({ error: 'Missing number parameter' })
  }

  try {
    const response = await fetch(`https://call-tracker-api.vercel.app/?number=${encodeURIComponent(number)}`)
    const data = await response.json()
    res.json(data)
  } catch (err) {
    res.status(500).json({ error: 'Error fetching from API' })
  }
})

module.exports = app
