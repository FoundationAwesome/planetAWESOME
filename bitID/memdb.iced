User = require('./user')
Nonce = require('./nonce')
# Simple in-memory database for the sake of example
Crudify = (Schema) ->
  @db = {}
  @Schema = Schema
  return
Crudify::get = (id) ->
  @db[id]
Crudify::find = (check) ->
  for id of @db
    `id = id`
    m = @db[id]
    if check(m)
      return m
  return
Crudify::create = ->
  self = this
  _arguments = arguments
  S = ->
    self.Schema.apply this, _arguments
  S.prototype = @Schema.prototype
  model = new S
  @db[model.id] = model
  model

Crudify::delete = (id) ->
  delete @db[id]
  return

module.exports =
  users: new Crudify(User)
  nonces: new Crudify(Nonce)

