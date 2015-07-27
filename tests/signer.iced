# module.exports.init = ->
console.log '####################'
console.log '### INIT AWESOME ###'
console.log '###  TEST SUITE  ###'
console.log '####################'
console.log ''

request = require('request')
# db = require 'db'
color = require 'colors'
# bitcoin = require 'bitcoinjs-lib'
# coinawesome = require 'coinawesomejs-lib'
# bigInt = require "node-biginteger"
# msgpack = require 'msgpack'
crypto = require('crypto')
_ = require 'lodash'
atob = require 'atob'
btoa = require 'btoa'

bitcore = require 'bitcore'
bitcoreMessage = require 'bitcore-message'
Networks = bitcore.Networks
######### for testnet now
Networks.defaultNetwork = Networks.testnet
Transaction = bitcore.Transaction


alias = require '../scripts/alias'
signAlias = alias.sign
verifyAlias = alias.verify


alias = 'satoshiiii'
console.log alias
# privateKey = new bitcore.PrivateKey();
privKeyWIF = 'cTD9Q8B1knQwNo4Eu19iYDeYdYJpfTuHyGH2d5KNvdDW9sLdmEZq' # testnet compressed
privateKey = new bitcore.PrivateKey(privKeyWIF);
# privKeyWIF = privateKey.toWIF()
# privKeyWIF = 'KwomKti1X3tYJUUMb1TGSM2mrZk1wb1aHisUNHCQXTZq5auC2qc3'
address = new bitcore.PrivateKey(privKeyWIF).toAddress().toString()
console.log 'address is'.rainbow, address

signatureB64 = bitcoreMessage(alias).sign(privateKey)#signAlias(privKeyWIF, alias)
# sig in bin to be embeded into blockchain
signatureBin = atob(signatureB64)

console.log 'alias', alias.bold, alias.length
console.log 'signature in base64'.blue.bold, signatureB64, signatureB64.length
console.log 'signature in hex   '.yellow.bold, new Buffer(signatureB64, 'base64').toString('hex')
console.log 'signature in binary'.yellow, signatureBin.grey, signatureBin.length

### VERIFY ###
afterBtoa =  btoa signatureBin
verified = verifyAlias address, alias, afterBtoa
if verified
  console.log 'VERIFIED'.green.bold, alias
else
  console.log 'NOT VERIFIED'.red.bold, alias
console.log ''


throw 'exception'


console.log '#####################################'
############################

explorers = require('bitcore-explorers')
client = new explorers.Insight()

await client.getUnspentUtxos address, defer err, utxos
# console.log('UTXOs:', utxos)
# console.log ''

transaction = new Transaction()
  .from(utxos)           # Feed information about what unspent outputs one can use
  .to(address, 1e5)      # Add an output with the given amount of satoshis
  .addData(signatureBin)
  # .addData(new Buffer(signatureBin, 'utf8'))
  # .addData(signatureB64)
  .fee(668)
  .change(address)       # Sets up a change address where the rest of the funds will go
  .sign(privKeyWIF)      # Signs all the inputs it can

console.log 'OUTPUTS are', JSON.parse(transaction.toJSON()).outputs[1].script

transaction = transaction.serialize ({disableDustOutputs: true})
# console.log 'INSPECTING... ', transaction.inspect()
# console.log transaction
console.log 'broadcasting...'
await client.broadcast transaction, defer err, txid
if err
  console.log err.red.bold
else 
  console.log 'SUCCESS'.green.bold, txid

  #txid = 4eebf34516a22cfa85d23a84e1141628b9a7a2906f882e97d815ab47d8733644

  await request 'https://test-insight.bitpay.com/api/tx/'+txid, defer err, res, data
  if err
    console.log err
  else
    txdata = JSON.parse data
    asm = txdata.vout[1].scriptPubKey.asm
    console.log asm
    sig = asm.split(' ')[1]
    sigB64 = new Buffer(sig, 'hex').toString('base64')
    sigBin = atob sigB64

    console.log 'signature in hex   '.bold.yellow, sig, sig.length
    console.log 'signature in base64'.bold.blue, sigB64, sigB64.length
    console.log 'signature in binary'.grey, sigBin.grey, sigBin.length

    console.log address, alias, sigBin
    verified = verifyAlias address, alias, btoa sigBin

    if verified
      console.log 'VERIFIED'.green.bold, alias
    else
      console.log 'NOT VERIFIED'.red.bold, alias
    console.log ''




# ∀ ∀ ∀











# hash = (a) ->
#   # console.log 'hashing '.red, a
#   hash = crypto.createHash('sha256').update(alias).digest("hex")#.substring(0,10)
#   # return ''+hash+hash+hash+hash+hash
#   #   hash = bitcoin.crypto.sha256(a)
#   #   console.log hash
#   #   bigInt.fromBuffer(1,hash).toString(16)



