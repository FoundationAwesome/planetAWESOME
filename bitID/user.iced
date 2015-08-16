userCount = 0
###*
#  Constructor
#  Parameters:
#    address = bitcoin address associated to the user
#    name = user's name
###
User = (address) ->
  @address = address
  # Initializes the uid
  @uid = ++userCount
  # Sets some additional attributes
  @created = Date.now()
  @signinCount = 0
  return

User::__defineGetter__ 'id', ->
  @uid
module.exports = User
