const express = require('express')

const app = express()
const PORT = 1212

app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
    res.send('hello world!👋')
})

app.get('/add/:x/:y', (req, res) => {
    const x = parseInt(req.params.x)
    const y = parseInt(req.params.y)
    res.send(`${x + y}`)
})
app.get('/subtract/:x/:y', (req, res) => {
    const x = parseInt(req.params.x)
    const y = parseInt(req.params.y)
    res.send(`${x - y}`)
})
app.get('/multiply/:x/:y', (req, res) => {
    const x = parseInt(req.params.x)
    const y = parseInt(req.params.y)
    res.send(`${x * y}`)
})
app.get('/divide/:x/:y', (req, res) => {
    const x = parseInt(req.params.x)
    const y = parseInt(req.params.y)
    res.send(`${x / y}`)
})
app.get("/*", (req, res) => {
    const x = parseInt(req.params.x)
    const y = parseInt(req.params.y)
    res.send(`${req.params}`)
  })

app.listen(PORT, () => {
    console.log(`you've arrive at your destination`)
})