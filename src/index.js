const express = require('express')
const app = express()

app.get('/', (req, res) => {
    console.log(req.headers);
    res.send(req.headers)
})
app.post('/', (req, res) => {
    console.log(req.headers);
    res.send(req.headers)
})

app.listen(3000);