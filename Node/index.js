const express = require('express')
const app = express()
const axios = require('axios');
/*
const bodyParser = require('body-parser')
const urlEncodedParser = bodyParser.urlencoded({ extended: false })
*/

axios.get("https://heroku-71b3.restdb.io/rest/users-blog?apikey=5df8eb15bf46220df655dc20").then( (response) => {
    // console.log(response.data)
}).catch( (error) => { console.log(error) })

app.get('/', (req, res) => {
    res.send("Hello, World!")
})

app.get('/article/:id', (req, res) => {
    console.log(req.params.id)
    res.send('Form route')
})

app.get('/articles', (req, res) => {
    res.send('Form route')
})

app.get('/add-article', (req, res) => {
    res.send('Form route')
})

app.get('/remove-article', (req, res) => {
    res.send('Form route')
})

app.get('/update-article', (req, res) => {
    res.send('Form route')
})

app.get('/sign-in', (req, res) => {
    res.send('Form route')
})

app.get('/log-in', (req, res) => {
    res.send('Form route')
})

app.listen(3000, () => {
    console.log('Listening on port 3000')
})