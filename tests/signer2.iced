# module.exports.init = ->
console.log '####################'
console.log '### INIT AWESOME ###'
console.log '### TEST SUITE 2 ###'
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
Networks.defaultNetwork = Networks.testnet
Transaction = bitcore.Transaction


alias = 'yanislav'

privKeyWIF = 'cTD9Q8B1knQwNo4Eu19iYDeYdYJpfTuHyGH2d5KNvdDW9sLdmEZq' # testnet compressed
privateKey = new bitcore.PrivateKey(privKeyWIF);

address = new bitcore.PrivateKey(privKeyWIF).toAddress().toString()
console.log 'address is'.rainbow, address.bold.cyan

signatureB64 = bitcoreMessage(alias).sign(privateKey)#signAlias(privKeyWIF, alias)
# sig in bin to be embeded into blockchain
sigHex = new Buffer(signatureB64, 'base64').toString('hex')
signatureBin = atob(signatureB64)

console.log 'alias', alias.bold, alias.length
console.log 'signature in base64'.blue.bold, signatureB64, signatureB64.length
console.log 'signature in hex   '.yellow.bold, sigHex.underline.yellow, sigHex.length
console.log 'signature in binary'.yellow, signatureBin.grey, signatureBin.length

### VERIFY ###
afterBtoa =  btoa signatureBin
msg = bitcoreMessage(alias)
verified = msg.verify address, afterBtoa
if verified
  console.log 'VERIFIED'.green.bold, alias
else
  console.log 'NOT VERIFIED'.red.bold, alias
console.log ''


console.log '#####################################'

explorers = require('bitcore-explorers')
client = new explorers.Insight()

await client.getUnspentUtxos address, defer err, utxos
# console.log('UTXOs:', utxos)
# console.log ''
unless err 
  transaction = new Transaction()
    .from(utxos)           # Feed information about what unspent outputs one can use
    .to(address, 1234)
    .addData(new Buffer(sigHex, 'hex'))
    .fee(668)
    .change(address)       # Sets up a change address where the rest of the funds will go
    .sign(privKeyWIF)      # Signs all the inputs it can

  console.log 'inputs  is', JSON.parse(transaction.toJSON()).inputs
  console.log 'outputs  is', JSON.parse(transaction.toJSON()).outputs
  console.log 'script is', JSON.parse(transaction.toJSON()).outputs[1].script.underline

  transaction = transaction.serialize ({disableDustOutputs: true})
  # console.log transaction
  console.log 'broadcasting...'.rainbow
  await client.broadcast transaction, defer err, txid
  if err
    console.log err.red.bold
  else 
    console.log 'SUCCESS'.green.bold, txid

    console.log 'fetching now same tx from blockchain API to verify...'
    await request 'https://test-insight.bitpay.com/api/tx/'+txid, defer err, res, data
    if err
      throw err
    else
      txdata = JSON.parse data
      asm = txdata.vout[1].scriptPubKey.asm
      console.log asm.underline
      sig = asm.split(' ')[1]
      sigB64 = new Buffer(sig, 'hex').toString('base64')
      sigBin = atob sigB64

      console.log 'signature in hex   '.bold.yellow.underline, sig.yellow.underline, sig.length
      console.log 'signature in base64'.bold.blue, sigB64, sigB64.length
      console.log 'signature in binary'.grey, sigBin.grey, sigBin.length

      # console.log address, alias, sigBin
      msg = bitcoreMessage(alias)
      verified = msg.verify address, btoa sigBin

      if verified
        console.log 'VERIFIED'.green.bold, alias
      else
        console.log 'NOT VERIFIED'.red.bold, alias
      console.log ''
else 
  console.log "ERROR fetching unspent outputs. INSIGHT OFFLINE?"



# ∀ ∀ ∀


