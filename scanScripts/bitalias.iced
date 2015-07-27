bc = require 'bitcore'
require 'colors'

console.log "HELLO BITALIAS"


hdPrivKey = new bc.HDPrivateKey()


hdPrivKeyO = hdPrivKey.toObject() #JSON.parse JSON.stringify hdPrivKey

console.log 'ChainCode is', hdPrivKeyO.chainCode, typeof hdPrivKeyO.chainCode
hdPrivKeyO.chainCode = '0000000000000000000000000000000000000000000000000000000000000000'
delete hdPrivKeyO.fingerPrint
delete hdPrivKeyO.checksum
delete hdPrivKeyO.xprivkey

console.log hdPrivKeyO


exPriv = new bc.HDPrivateKey(hdPrivKeyO)
console.log 'ORIG', hdPrivKey
console.log 'NEW ', exPriv
console.log 'SIMP', exPriv.privateKey.toAddress()
console.log 'SIM0', exPriv.derive(0).privateKey.toAddress()


keyExt = new bc.PrivateKey hdPrivKeyO.privateKey
keySimple = hdPrivKey.derive(0).privateKey

addrSimple = keySimple.toAddress().toString()

# # console.log hdPrivKey._getDerivationIndexes(0)

console.log 'FIRST ADDR', addrSimple
# console.log 'CHAINCODE ', hdPrivKeyO.chainCode


# derived = hdPrivKey.derive(0)#.derive(1,true)
# # derived = hdPrivKey.derive(6,false).derive(1,true)
# # derived2 = hdPrivKey.derive("m/6/1'")
# # derivedHard = hdPrivKey.derive(6, true)
# console.log 'DERIVED    '.bold.green, derived
# # console.log 'DERIVED2   '.bold.green, derived2
# # console.log 'DERIVEDhard'.bold, derivedHard
# console.log 'DERIVED CHAINCODE     ', derived.toObject().chainCode
# # console.log 'DERIVED CHAINCODE hard', derivedHard.toObject().chainCode
# # console.log 'DERIVED', derived
# # console.log 'DERIVED', derived


