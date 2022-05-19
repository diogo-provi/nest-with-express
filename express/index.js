const express = require('express')
const app = express()
const port = 5555

app.get('/v1/users', (req, res) => {
  res.status(200).json([{
    "id": 1,
    "name": "Diogo",
    "age": 26
  }])
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
