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

  //bonus solution:
  app.get("/*", (req, res) => {
    let math = req.query.math
    let nums = req.params[0].split('/')
    nums = nums.map(num => parseInt(num))


    switch(math) {
        case 'add':
            res.send(`${nums.reduce((a, b) => a + b)}`)
            break
        case 'subtract': 
            res.send(`${nums.reduce((a, b) => a - b)}`])
            break
        case 'multiply':
            res.send(`${nums.reduce((a, b) => a * b)}`)
            break
        case 'divide':
                res.send(`${nums.reduce((a, b) => a / b)}`)
                break
    }
  })

app.listen(PORT, () => {
    console.log(`you've arrive at your destination`)
})