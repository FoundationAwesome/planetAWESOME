debug = require('debug')('bitid-js-demo')
express = require('express')
http = require('http')
# path = require('path')
url = require('url')
logger = require('morgan')
bodyParser = require('body-parser')
# partials = require('express-partials')
Bitid = require('bitid')
db = require('../bitID/memdb')

router = express.Router()

# sessionConfig = 

# port = process.env.PORT or 3001
siteURL = process.env.SITEURL or 'http://localhost:3000'
callbackURL = siteURL + '/callback'

console.log callbackURL
# view engine setup

ensureAuthenticated = (req, res, next) ->
  if req.user
    console.log 'user is ', req.user
    return next()
  else
    res.redirect '/login'
  return

deserializeUser = (req, res, next) ->
  req.user = db.users.get(req.session.uid)
  console.log req.user
  next()
  return


# app.use bodyParser.json()
# app.use bodyParser.urlencoded()
# app.use express.cookieParser()
# app.use express.session(sessionConfig)
# app.use partials()
router.use deserializeUser

router.use (req, res, next) ->
  res.locals.currentUser = req.user
  next()
  return

# app.locals.callbackIndexPath = '/callback'

# router.locals.callbackIndexUrl = callbackURL

router.get '/logout', (req, res) ->
  req.session.uid = null
  res.redirect '/'
  return

router.get '/login', (req, res) ->
  if req.user
    return res.redirect('/user')
  nonce = db.nonces.find((nonce) ->
    nonce.sid == req.sessionID
  ) or db.nonces.create(req.sessionID)
  bitid = new Bitid(
    nonce: nonce.id
    callback: callbackURL
    unsecure: true)
  console.log "BITID is", bitid, callbackURL
  res.render 'bitid/login',
    nonce: nonce.id
    bitid: bitid
  return

router.get '/user', ensureAuthenticated, (req, res) ->
  res.render 'bitid/user', req.user
  return

router.post '/callback', (req, res) ->
  params = req.body
  address = params.address
  bitid = new Bitid(
    uri: params.uri
    signature: params.signature
    address: address
    callback: callbackURL)
  console.log 'sig', params.signature, 'addr', address
  if !bitid.uriValid()
    console.log 'invalid bitid url'
    res.json 401, message: 'BitID URI is invalid or not legal'
  else if !bitid.signatureValid()
    console.log 'invalid sig'
    res.json 401, message: 'Signature is incorrect'
  else
    nonce = db.nonces.get(bitid.nonce)
    console.log 'nonce', nonce
    if !nonce
      res.json 401, message: 'NONCE is illegal'
    else if nonce.expired()
      res.json 401, message: 'NONCE has expired'
    else
      console.log "BITID SUCCESS".green.bold, params.address.blue.bold, nonce.id
      user = db.users.find((user) ->
        user.address == address
      ) or db.users.create(address)
      console.log 'user is...'.green.bold, user
      nonce.uid = user.id
      # res.render 'bitid/user', 
      #   address: address
      res.status(200).json
        address: address
        nonce: nonce.id
  return

router.get '/auth', (req, res) ->
  console.log 'user is ',user
  if req.user
    return res.status(200).json auth: true
  nonce = db.nonces.find((nonce) ->
    nonce.sid == req.sessionID
  )
  if nonce and nonce.uid
    user = db.users.get(nonce.uid)
    req.session.uid = user.id
    user.signinCount++
    db.nonces.delete nonce.id
    res.status(200).json auth: true
  else
    res.status(200).json auth: false
  return


module.exports = router
