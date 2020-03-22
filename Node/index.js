const express = require('express')
const app = express()
const axios = require('axios')
const cors = require('cors')
const jwt = require('jsonwebtoken')
const passport = require('passport')
const   JwtStrategy = require('passport-jwt').Strategy,
        ExtractJwt = require('passport-jwt').ExtractJwt

const secret = 'secret'
const opts = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: secret
}
passport.use(new JwtStrategy(opts, function(jwt_payload, done) {
    const email = jwt_payload.user

    const query = { email }
    const url = '/users-blog?q=' + JSON.stringify(query)
    let user = false
    axiosRestdb.get(url).then( response => {
        if (response.data.length > 0)
            user = response.data[0]
    })

    done(null, user)
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
const urlEncodedParser = bodyParser.urlencoded({ extended: true })

app.use(cors())

app.get('/', (req, res) => {
    res.json({msg: 'Hello World!'})
})

app.post('/article/:id', (req, res) => {
    if (isNaN(req.params.id)) return res.json({error: 'NaN'})
    const id = parseInt(req.params.id)

    const query = { id }
    const url = '/article?q=' + JSON.stringify(query)
    axiosRestdb.get(url).then( response => {
        if (response.data[0] === undefined) res.json({})
        else {
            res.json(response.data[0])
        }
    }).catch( error => res.json({error}) )
})

app.post('/user/:id', (req, res) => {
    if (isNaN(req.params.id)) return res.json({error: 'NaN'})
    const id = parseInt(req.params.id)

    const query = { id }
    const url = '/users-blog?q=' + JSON.stringify(query)
    axiosRestdb.get(url).then( response => {
        if (response.data[0] === undefined) res.json({})
        else {
            res.json(response.data[0])
        }
    }).catch( error => res.json({error}) )
})

app.post('/articles', (req, res) => {
    const url = '/article'
    axiosRestdb.get(url)
        .then( response => res.json(response.data) )
        .catch( error => res.json({error}) )
})

app.post('/add-article', passport.authenticate('jwt', { session: false }), urlEncodedParser, (req, res) => {
    const title = req.body.title
    const body = req.body.body
    const author_id = req.body.author_id

    const data = {
        title,
        body,
        author_id
    }
    const url = '/article'
    axiosRestdb.post(url, data)
        .then( response => res.json(response.data) )
        .catch( error => res.json({error}) )
})

app.post('/remove-article', passport.authenticate('jwt', { session: false }), urlEncodedParser, (req, res) => {
    const id = req.body.id
    const url = '/article/' + id 
    axiosRestdb.delete(url)
        .then( response => res.json(response.data) )
        .catch( error => res.json({error}) )
})

app.post('/update-article', passport.authenticate('jwt', { session: false }), urlEncodedParser, (req, res) => {
    const id = req.body.id
    const title = req.body.title
    const body = req.body.body
    const author_id = req.body.author_id

    const data = {
        title,
        body,
        author_id
    }
    const url = '/article/' + id
    axiosRestdb.put(url, data)
        .then( response => res.json(response.data) )
        .catch( error => res.json({error}) )
})

app.post('/signin', urlEncodedParser, (req, res) => {
    const email = req.body.email
    const password = req.body.password
    const firstname = req.body.firstname
    const lastname = req.body.lastname

    const data = {
        email,
        password,
        firstname,
        lastname
    }
    const url = '/users-blog'
    axiosRestdb.post(url, data)
        .then( response => res.json(response.data) )
        .catch( error => res.json({error}) )
})

app.post('/login', urlEncodedParser, (req, res) => {
    const email = req.body.email
    const password = req.body.password

    const query = {
        email,
        password
    }
    const url = '/users-blog?q=' + JSON.stringify(query)
    axiosRestdb.get(url).then( response => {
        if (response.data.length > 0) {
            const user = response.data[0]
            delete user.password
            const userJwt = jwt.sign({ 
                user: user.email,
            }, secret)
            res.json( {jwt: userJwt} )
        } else res.json({ error: "wrong email or password" })
    }).catch( error => res.json({error}) )
})

app.post('/private', passport.authenticate('jwt', { session: false }), (req, res) => {
    res.json({status: 'connected'})
})

app.listen(process.env.PORT, () => {
    console.log('Listening on port ' + process.env.PORT)
})