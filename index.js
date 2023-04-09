const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('Hello World!')
})
app.get('/dog', (req, res) => {
    res.json({'sound': '멍멍'})
})
app.get('/cat', (req, res) => {
    res.json({'sound': '야옹'})
})
app.get('/user/:id', (req, res) => {
    const q = req.params
    console.log(q)
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})