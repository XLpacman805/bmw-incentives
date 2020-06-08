const express = require('express')
const axios = require('axios').default;
const cors = require('cors')
const app = express()
const port = 4000

app.use(cors())

app.get('/', (req, res) => {
  axios.get('https://www.bmwusa.com/bin/services/offers?zipCode=93010')
    .then(result => res.json(result.data.offers))
    .catch(err => res.json({error: err.toString()}))
})

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))