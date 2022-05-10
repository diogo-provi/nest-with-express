const express = require('express')
const app = express()
const port = 5555

app.get('/v1', (req, res) => {
  res.send('Hello World from Express!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
