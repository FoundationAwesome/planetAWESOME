crypto = require('crypto')
EXPIRATION_DELAY = 600
# Expiration delay (in seconds)
Nonce = (sid) ->
  @sid = sid
  @uid = null
  # Initializes a value for the nonce (let's call that the nonce id)
  @nid = crypto.randomBytes(8).toString('hex')
  # Sets the creation date
  @created = Date.now()
  return
Nonce::expired = ->
  Date.now() - (@created) > EXPIRATION_DELAY * 1000
Nonce::__defineGetter__ 'id', ->
  @nid
module.exports = Nonce

