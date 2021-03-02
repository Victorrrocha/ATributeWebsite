const express = require('express')
const app = express()
const port = 80
const path = require('path')

const films = require('./seeds/films')
const series = require('./seeds/series')

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, './views'))

app.use(express.static(__dirname + '/public')) //Adding the static elements


// app.get('/', (req, res) => {
//     res.render('tributePage')
// })

app.get('/', (req, res) => {
    res.render('films', { films })
})

app.get('/films/:id', (req, res) => {

    const id = req.params.id
    let filmObject = {};
    for (let film of films) {
        if (film.id == id) {
            filmObject = film
            break
        }
    }

    res.render('film', { filmObject })
})

app.get('/television', (req, res) => {
    res.render('television', { series })
})

app.get('/series/:id', (req, res) => {

    const id = req.params.id
    let serie = {};
    for (let tvserie of series) {
        if (tvserie.id == id) {
            serie = tvserie
            break
        }
    }

    res.render('serie', { serie })
})

app.get('/biography', (req, res) => {
    res.render('biography')
})

app.listen(process.env.PORT || port, () => {
    console.log(`Listening on port ${port}`)
})