const express = require('express')
const app = express()
const port = process.env.PORT || 8080

app.use(express.static("build"));

app.get('/frontpage/:navn', (req, res) => {

  let navn = req.params.navn;
  //This is an important comment

  //http://localhost:8080/frontpage/Joakim -> vg
  //http://localhost:8080/frontpage/Ahmad -> nrk
  // 

  if (navn == 'Ahmad') {
    res.redirect('https://www.nrk.no/');
  } else {
    res.redirect('https://www.vg.no/');
  }
  
})

app.get('/andreassinquiz/:deltaker/:sporsmal/:svar', (req, res) => {

  let navn = req.params.deltaker;
  let sporsmal = req.params.sporsmal;
  let svar = req.params.svar;
  //This is an important comment

  //http://localhost:3000/Joakim/5/Oslo
  
  
});

app.post('/andreassinquiz/:sporsmol'), (req, res) => {
  let navn = req.params.sporsmol;
  let body = req.body;

  if (body.deltaker in deltakerliste) {
    console.log('Du har allerede svart på et spørsmål');
  } else {
    res.send('Du er ikke med i quizen')
  }

}


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
