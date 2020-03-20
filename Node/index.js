const express = require('express')
const app = express()
const axios = require('axios')
const jwt = require('jsonwebtoken')
const passport = require('passport')
const   JwtStrategy = require('passport-jwt').Strategy,
        ExtractJwt = require('passport-jwt').ExtractJwt

const opts = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: 'secret'
}
passport.use(new JwtStrategy(opts, function(jwt_payload, done) {
    done(null, true)
}))

const restdbConf = {
    'baseURL': 'https://heroku-71b3.restdb.io/rest/',
    'headers': {
        'Content-Type': 'application/json',
        'x-apikey': '5df8eb15bf46220df655dc20',
        'Cache-Control': 'no-cache'
    }
}
const axiosRestdb = axios.create(restdbConf)

const bodyParser = require('body-parser')
const urlEncodedParser = bodyParser.urlencoded({ extended: false })

app.get('/', (req, res) => {
    const token = jwt.sign({ foo: 'bar' }, 'secret')
    res.json({token})
    // res.json({msg: 'Hello World!'})
})

app.get('/article/:id', (req, res) => {
    if (isNaN(req.params.id)) return res.json({error: 'NaN'})
    const id = parseInt(req.params.id)

    const query = { id }
    const url = '/article?q=' + JSON.stringify(query)
    axiosRestdb.get(url).then( response => {
        if (response.data[0] === undefined) res.json({})
        else res.json(response.data[0])
    }).catch( error => res.json({error}) )
})

app.get('/articles', (req, res) => {
    axiosRestdb.get('/article')
        .then( response => res.json(response.data) )
        .catch( error => res.json({error}) )
})

app.get('/add-article', (req, res) => {
    res.json({})
})

app.get('/remove-article', (req, res) => {
    res.json({})
})

app.get('/update-article', (req, res) => {
    res.json({})
})

app.get('/signin', (req, res) => {
    res.json({})
})

app.get('/private', passport.authenticate('jwt', { session: false }), (req, res) => {
    res.send(req.user.profile)
})

app.post('/login', urlEncodedParser, (req, res) => {
    res.json({})
    const email = req.body.email
    const password = res.body.password

    const query = {
        email,
        password
    }
    const url = '/user-blog?q=' + JSON.stringify(query)
    axiosRestdb.get(url).then( response => {
        res.json(response)
    }).catch( error => res.json({error}) )
})

app.listen(process.env.PORT, () => {
    console.log('Listening on port ' + process.env.PORT)
})