const express = require('express')
const app = express()
const port = process.env.PORT || 8080

app.use(express.static("build"));

app.get('/frontpage/:navn', (req, res) => {

  let navn = req.params.navn;
  //This is an important comment

  //http://localhost:8080/frontpage/Joakim -> vg
  //http://localhost:8080/frontpage/Ahmad -> nrk
  if (navn == 'Ahmad') {
    res.redirect('https://www.nrk.no/');
  } else {
    res.redirect('https://www.vg.no/');
  }
  
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
