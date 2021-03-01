const express = require('express')
const app = express()
const port = 80
const path = require('path')

const films = require('./seeds/films')

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, './views'))

app.use(express.static(__dirname + '/public')) //Adding the static elements


// app.get('/', (req, res) => {
//     res.render('tributePage')
// })

app.get('/', (req, res) => {
    res.render('films', { films })
})

app.get('/television', (req, res) => {
    res.render('television')
})

app.get('/biography', (req, res) => {
    res.render('biography')
})

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})