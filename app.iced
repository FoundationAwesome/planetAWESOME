express = require('express')
session = require('express-session')
path = require('path')
favicon = require('serve-favicon')
logger = require('morgan')
cookieParser = require('cookie-parser')
bodyParser = require('body-parser')
routes = require('./routes/index')
routesBitid = require('./routes/bitid')
app = express()
# view engine setup
app.set 'views', path.join(__dirname, 'views')
app.set 'view engine', 'jade'
app.use(session({ 
  secret: 'keyboasdfasdfasdftyktk6767676ard asdfasdfadsfds cat'
  cookie: { maxAge: 6000000 }
  # key: 'express.sid'
  # store: new (session.MemoryStore)
  }))
# uncomment after placing your favicon in /public
#app.use(favicon(__dirname + '/public/favicon.ico'));
# app.use logger('dev')
app.use bodyParser.json()
app.use bodyParser.urlencoded(extended: false)
app.use cookieParser()
app.use require('less-middleware')(path.join(__dirname, 'public'))
app.use express.static(path.join(__dirname, 'public'))
# app.use require('less-middleware')(path.join(__dirname, 'jqpreview'))
# app.use express.static(path.join(__dirname, 'jqpreview'))
app.use '/', routes
app.use '/', routesBitid
# catch 404 and forward to error handler
app.use (req, res, next) ->
  err = new Error('Not Found')
  err.status = 404
  next err
  return
# error handlers
# development error handler
# will print stacktrace
if app.get('env') == 'development'
  app.use (err, req, res, next) ->
    res.status err.status or 500
    res.render 'error',
      message: err.message
      error: err
    return
# production error handler
# no stacktraces leaked to user
app.use (err, req, res, next) ->
  res.status err.status or 500
  res.render 'error',
    message: err.message
    error: {}
  return
module.exports = app
