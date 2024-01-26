const express = require('express')
const app = express()
const port = process.env.PORT || 8080

app.use(express.static("build"));

app.get('/frontpage', (req, res) => {
  res.send('Hello 2ITB!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
