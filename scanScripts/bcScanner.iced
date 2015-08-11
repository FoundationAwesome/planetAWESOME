# port rpc 61224

coinawesomed = require 'bitcoin'
colors = require 'colors'
request = require('request')
config = require './BCScanConfig'


db = require '../scanScripts/scanDB.iced'
# iframelyDB = require '../scanScripts/iframelyDB.iced'

# await db.iframely.getValues 'iframely', defer e, resp
# console.log 'IFRAMELY... RESP IS',resp
# for r in resp
# 	unless r.txid
# 		console.log r

# url = 'http://smbc-comics.com/index.php?id=3524'
# await db.iframely.get 'iframely-'+url, defer e, r
# console.log e,r

# return ''


# utils = require 'utils' put here convHex and urlCleaner

convertHexToString = (hex) ->
   str = ''
   i = 0
   while i < hex.length
     str += String.fromCharCode(parseInt(hex.substr(i, 2), 16))
     i += 2
   str

urlCleaner = (url) ->
	cleanUrl = url
	# cleanUrl = if url.substring(0, 7) == 'http://' or url.substring(0, 8) == 'https://' then url else 'http://' + url
	if cleanUrl.charAt(cleanUrl.length - 1) == '/'
		cleanUrl = cleanUrl.substring(0, cleanUrl.length - 1)
	cleanUrl


client = new coinawesomed.Client({
  host: 'localhost',
  port: 61224,
  user: config.user, #'awesome'
  pass: config.pass, 
  # timeout: 3000
})

FIRSTBLOCKHASH = '7791339d66bb0ee3d5cc62cfefb5d1d55c26f47d8666966258e67d76e2e0e371'
BLOCKHASH5k = '0d9ea4d86f6c59a0f76fa376b0d50203cb8722ccc8fc87b80a1eea816d403ab9'
BLOCKHASH10k = 'f8f5dfae1dd19e56cd9fd29cd78b7ea5321e59b227fa2d858831debb913e89d4'
BLOCKHASH14k = '37116dc7e27803a485fad0204a93657286d4c4f1bef7712608217586e01f3f18'
BLOCKHASH15k = 'c5cf787c9a65b10acea556ba7da8a739d1e38b201870463f39aaeaee8fa208be'
BLOCKHASH16k = '98529cb4d4e2c395c00058292ea241ab854386dcc1fd435f9019dbc6c801f240'

BLOCKHASH18862 = '7a06728f19f94d804bfd998e3ef8eec683dde45b70cf658491bc32b02165f8c4'

BLOCKNUMSTART = BLOCKHASH18862

# await client.cmd 'gettransaction', '83de7bea1bc0f7a4e16678f33c1b77772444938a709d1100803acef4b443eb8f', defer err, inputTx, resHeaders
# console.log 'INPuuuuuuUT TX', inputTx, err, resHeaders


getSendersAddrs = (tx, cb) ->
	unless tx 
		cb 'ERROR no tx given for sender\'s address'
	# console.log tx
	addresses = []
	 
	# await for input in tx.vin
	input = tx.vin[0]

	await client.cmd 'gettransaction', input.txid, defer err, inputTx, resHeaders

	# console.log 'INPUT TX'.rainbow.bold, inputTx.txid, err, resHeaders
	if err
		cb err
	else
		addresses.push(inputTx['vout'][input['vout']]['scriptPubKey']['addresses'][0])
		cb null, addresses
	# await client.cmd 'decoderawtransaction', txid, defer err, rawtx, resHeaders
	# raw_tx = decoderawtransaction(getrawtransaction(txid))
	# for(input in raw_tx['vin']) {
	#   input_raw_tx = decoderawtransaction(getrawtransaction(input['txid']))
	#   addresses.push(input_raw_tx['vout'][input['vout']]['scriptPubKey']['addresses'][0])
	# }
	# addresses


processNullDataOut = (tx) ->
	#console.log 'Block', block.height, block.hash, txhash
	#console.log '\n\u9############## new data tx is ', tx.txid
	asm = tx.vout[1].scriptPubKey.asm

	await getSendersAddrs tx, defer e, froms
	from = froms[0]
	to = tx.vout[0].scriptPubKey.addresses[0]
	amount = parseInt(Math.round(tx.vout[0].value*10)/10)

	console.log new Date(tx.time*1000), from, '-->', to, amount

	# time = Date.now()
	#console.log(asm)

	try 
		data = convertHexToString(asm.split(' ')[1])
		console.log data.green.bold + ' ' + tx.txid + ', amount: ' + amount
	catch e 
		console.log 'ERROR converting'.red.bold
		console.log e
	try
		decoded = JSON.parse(data)
		#console.log 'data is ', decoded
	catch e 
		console.log 'ERROR parsing'.red.bold
		console.log e 
	try
		data = tx.data = {}		
		# URL
		url = decoded.u
		# console.log url
		if url
			url = urlCleaner url

			triple = 
				subject: from
				predicate: tx.txid
				object: url
				amount: amount

			await db.graph.put triple, defer e
			if e
				console.log e
			# else 
			# 	console.log 'SAVED'.green
			# console.log triple

			data = tx.data = {}
			data.from = from
			data.to = to
			data.url = url
			data.amount = amount


			tags = decoded.t
			if tags and tags.length
				data.tags = tags
				for tag in tags
					triple = 
						subject: tag
						predicate: tx.txid
						object: url
					await db.graph.put triple, defer e
					console.log e if e
					# else
					# 	console.log 'SAVED2'.green
					# ##
					# console.log triple
					await db.flat.get 'tags', defer e, t
					t = {AWE: {}, tx: {}} if e

					if t.AWE[tag] and t.tx[tag]
						t.AWE[tag] += amount
						t.tx[tag]++
					else 
						t.AWE[tag] = amount
						t.tx[tag] = 1
					await db.flat.put 'tags', t, defer e

					# console.log t



			await db.iframely.get 'iframely-'+url, defer e, r
			# console.log db.iframely
			if e  # does not exist in local db
				console.log 'fetching data from iframely API...'
				await request 'http://iframe.ly/api/iframely?url=' + url + '&api_key=661bdc5d11b42cede92384', defer error, response, body
				unless error and response.statusCode is 200
					rJSON = JSON.parse body
					console.log 'DATA is [ifrml]',rJSON
					await db.iframely.put 'iframely-'+url, rJSON, defer e
					console.log e if e
				else 
					console.log 'ERROR iframely'.red.bold, error, response.statusCode
			else 
				console.log 'CACHED'.rainbow.bold, r



		fbid = decoded.fbid
		twid = decoded.TWid
		BCTuid = decoded.BCTuid

		data.fbid = fbid if fbid
		data.twid = twid if twid
		data.BCTuid = BCTuid if BCTuid



		console.log 'processed', tx.txid
		console.log tx.data

		await db.flat.put 'tx-'+tx.txid, tx, defer e
		if url
			await db.flat.get 'url-'+url, defer err, txidObj
			if err # not exists
				txidObj = {}
			txidObj[tx.txid] = true
			await db.flat.put 'url-'+url, txidObj, defer e
			console.log e if e
		console.log 'ERROR'.red, e if e


		
		# cb null, 'OK'

		# await db.flat.put url, data, defer er
		# if er
		# 	console.log er
	catch e
		console.log 'ERROR cleaning'.red.bold
		console.log e


# goes recursively from start-hash till end of chain over all transactions
getBlockRec = (hash) ->
	await client.cmd 'getblock', hash, defer err, block, resHeaders
	if (err) 
		return console.log(err)
	# console.log ''
	# console.log('Block', block.height, block.hash)
	#console.log block

	for txhash in block.tx
		await client.cmd 'gettransaction', txhash, defer err, tx, resHeaders
		if (err) 
			getBlockRec block.previousblockhash
			return console.log(err)
		#console.log tx
		#console.log tx.vout
		# for out in tx.vout
			# if out.scriptPubKey.type == 'nulldata'
			# 	console.log convertHexToString out.scriptPubKey.asm

		# SPECIAL CASE FOR COINAWESOME ONLY where vout #1 only matters
		if tx.vout[1] and tx.vout[1].scriptPubKey.type == 'nulldata'
			processNullDataOut tx #, defer e, hmm
			# console.log e, hmm

	#console.log 'next block hash'.blue.bold, block.nextblockhash
	if block.nextblockhash
		getBlockRec block.nextblockhash
	else
		await db.flat.put 'lastBlockHash', block.hash, defer e
		if e 
			console.log e
		console.log "NO MORE BLOCKS after ".yellow.bold, block.hash


sync = () ->
	console.log "SYNCING WITH CHAIN NOW".bold.rainbow
	await db.flat.get 'lastBlockHash', defer e, hash
	unless e 
		console.log 'last synced block was', hash, new Date()
		getBlockRec hash
	else 
		getBlockRec BLOCKNUMSTART 


setInterval(sync, 30000)
##

sync()


#######################

# await db.flat.getValues 'tx', defer e, r
# console.log r.length

# await db.flat.get 'url-'+'https://soundcloud.com/platform/hidden-spheres-waiting-boiler?fb_ref=Default', defer e, txid
# console.log 'HERE', txid,e 


# # ## # ## GET
# # await db.graph.get {predicate: '4cbc4000e55aea52f3b82eb1f9628e12eadae7d470a20766b957481a9b011c0a'}, defer e, list
# # # await db.graph.get {object: 'http://blog.bitcoin-traveler.com'}, defer e, list
# # console.log list
# # #####


# await db.flat.get 'tx-4cbc4000e55aea52f3b82eb1f9628e12eadae7d470a20766b957481a9b011c0a', defer e, txh
# console.log e, txh






# console.log __dirname#.split("/")
# .pop() 



# await db.flat.getValues '', defer e, r
# console.log r.length
# await
# 	for tx, i in r 
# 		if tx.data and tx.data.url
# 			console.log i, tx.data.url

# 			db.iframely.get 'iframely-' + tx.data.url, defer e, ri
# 			unless e 
# 				console.log 'CACHED RESP'.green, ri
# 			else 
# 				console.log 'ERROR iframely cache', e
# 			tx.iframely = ri

# testtx = r[7]
# console.log 'find out what is this', testtx
# console.log 'URL',testtx.data.url
# if testtx.data and testtx.data.url
# 	db.iframely.get 'iframely-' + testtx.data.url, defer e, ris
# 	unless e 
# 		console.log 'XXX RESP'.blue, ris
# 	else 
# 		console.log 'ERROR iframely cache', e

# await db.iframely.getValues '', defer e, resp
# for r in resp
# 	unless r.txid
# 		console.log r
# console.log e, resp
# console.log db.iframely



# await client.cmd 'getbalance', '*', 6, defer err, balance, resHeaders
# if (err) 
# 	return console.log(err)
# console.log('Balance:', balance);
