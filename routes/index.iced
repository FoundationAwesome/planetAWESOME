express = require('express')
router = express.Router()
_ = require 'lodash'
color = require 'colors'
timeago = require 'timeago'
# ipfs = require '../scripts/ipfs'

db = require '../scripts/db'

dbAwesome = require '../scanScripts/scanDB.iced'
# await dbAwesome.flat.getValues 'tx', defer e, likes
# unless e
# 	console.log 'HELL YA', likes

getTransactions = (txids, cb) ->
	out = []
	await 
		# for k,i in keywords
		for txid, i in txids
			# search k, defer out[i]
			dbAwesome.flat.get 'tx-'+txid, defer error, out[i]
	out.sort (a,b) -> return a.time - b.time
	cb null, out


TipMapCache = null
tipMapCacheLast = 0
tipMapBuilding = false
iList = []

getTipMap = (x, cb) ->
	cb null, TipMapCache 

	# if Date.now() - tipMapCacheLast > 60*1000
	# 	console.log '                                ', Date.now() - tipMapCacheLast
	# 	unless tipMapBuilding
	# 		tipMapCacheLast = Date.now()
	# 		buildTipMap()
	# else
	# 	console.log 'CACHE HIT'.green.bold

buildTipMap = () ->
	tipMapBuilding = true
	console.log 'BUILDING NEW TIPMAP...........'.yellow.bold
	await dbAwesome.iframely.getValues 'iframely', defer e, iList
	for data in iList
		if data.meta 
			unless data.meta.site
				data.meta.site = data.url.split('/')[2]
	await dbAwesome.flat.getValues 'tx', defer e, r
	console.log 'transaction count'.rainbow.bold, r.length
	console.log 'iframelies count'.rainbow.bold.underline, iList.length

	await dbAwesome.flat.getKeyValues 'url', defer e, tipMap
	# console.log 'total urls tipped:'.rainbow.bold, tipMap

	urlTxCount = {}
	for url, txStubs of tipMap
		if not url or not txStubs
			console.log 'BOLD RED'.bold.red, url
		txids = _.keys txStubs
		# console.log txids
		count = txids.length
		# console.log count
		urlTxCount[url] = count
		txStubs.txList = []
		txStubs.tagsList = []
		txStubs.totalAWE = 0

		await getTransactions txids, defer et, txStubs.txList

		# console.log 'txList.length', txStubs.txList.length

		txStubs.timeSubm = txStubs.txList[0].time
		txStubs.timeAgoSubm = timeago (new Date (txStubs.timeSubm*1000))
		txStubs.timeLast = txStubs.txList[txStubs.txList.length-1].time
		txStubs.timeAgoLast = timeago (new Date (txStubs.timeLast*1000))
		# console.log 'HELL'.red.bold, txStubs.txList
		# if txStubs.txList.length > 1
		# 	console.log 'SHOULD BE NEG'.red.bold, txStubs.timeSubm, txStubs.timeSubm - txStubs.txList[1].time
		# console.log 'TXLIST'.rainbow.bold, txStubs.txList

		for tx in txStubs.txList
			if tx.data
				txStubs.totalAWE += tx.data.amount
				if tx.data.tags
					# console.log url, tx.data.tags
					txStubs.tagsList = _.union txStubs.tagsList, tx.data.tags
					# console.log url, txStubs.tagsList

		# for tx in txStubs.txList

		# console.log txStubs.tagsList

		# await dbAwesome.iframely.getValues 'iframely', defer e, iList
		# console.log 'total iframelies',iList.length
		iMap = {}
		for el in iList
			# if el.meta
			# 	# console.log el.meta
			# 	if el.meta.description and el.meta.description.length >= 400
			# 		el.meta.description = el.meta.description.substr 0, 400 + '...'

			iMap[el.url] = el

		txStubs.urlData = iMap[url]
		txStubs.txCount = urlTxCount[url]



	# console.log tipMap
	# for tip, i of tipMap
	# 	console.log tip
	# 	console.log i
	# console.log urlTxCount


	# await dbAwesome.iframely.getValues 'iframely', defer e, iList
	# console.log 'total iframelies',iList.length
	# iMap = {}
	# for el in iList
	# 	iMap[el.url] = el

	# for tx in r
	# 	if tx.data and tx.data.url
	# 		# console.log 'URL is', tx.data.url
	# 		tx.iframely = iMap[tx.data.url]
	# 		# console.log tx
	# 		# console.log tx.iframely
	# 	#else 
	# 	#	tx = undefined

	# # console.log tipMap
	# i = 0
	# for url, tip of tipMap
	# 	if i < 2
	# 		console.log tip

	# console.log "ACHTUNG ACHTUNG".red.bold
	# console.log tipMap['http://adage.com']
	# console.log "ACHTUNG ACHTUNG".red.bold
	# console.log tipMap['http://cointelegraph.com/news/114542/the-cannabis-industry-is-truly-begging-to-be-disrupted-by-cryptocurrency']

	console.log 'BUILD NEW TIPMAP'.yellow.bold.underline

	TipMapCache = tipMap
	tipMapBuilding = false
	# unless e
	# 	cb null, tipMap
	# else cb e



getTags = (x, cb) ->
	await dbAwesome.flat.get 'tags', defer e, tags
	tags = tags.tx
	# list = {"you": 100, "me": 75, "foo": 116, "bar": 15};
	tagsSorted = Object.keys(tags).sort (a,b) -> return tags[a]-tags[b]
	tags = tagsSorted.reverse()
	cb null, tags
	

router.get '/t/:tag', (req, res) ->
	tag = req.params.tag
	console.log tag

	newTipMap = {}

	## check if tag exists in tagList
	# await db.flat.get 'tags', defer e, tags

	await getTipMap '', defer e, tipMap
	console.log e if e

	for url, tip of tipMap
		# console.log tag, tip, tip.tagsList
		if _.contains tip.tagsList, tag
			newTipMap[url] = tip

	# console.log newTipMap

	await getTags '', defer et, tagsSorted

	res.render 'reddit', {tips: newTipMap, tags: tagsSorted} #, txs: r, counts: urlTxCount}


sortBy = (map, field, cb) ->
	sorted = Object.keys(map).sort (a,b) -> return map[field] - map[field]
	cb sorted
	# list = []
	# for key, val in map

pageItems = (tipMap, req, cb) ->
	page = parseInt req.query.page
	unless page
		page = 0
	perPage = 33

	urls = _.keys tipMap
	console.log 'PAGE = ', page
	tipMapPaged = {}
	for url, i in urls
		if i < (page+1) * perPage and i >= page * perPage
			tipMapPaged[url] = tipMap[url]

	cb tipMapPaged


router.get '/tags', (req, res) ->
	# page = parseInt req.query.page
	# unless page
	# 	page = 0

	# await getTipMap '', defer e, tipMap
	# tipMap = _.sortBy(tipMap, 'timeSubm').reverse()

	# console.log 'total TIPS'.rainbow.bold, _.keys(tipMap).length

	# await pageItems tipMap, req, defer tipMapPaged
	await getTags '', defer et, tagsSorted
	res.render 'tags', { tags: tagsSorted } 
	return

router.get '/', (req, res) ->
	page = parseInt req.query.page
	unless page
		page = 0

	await getTipMap '', defer e, tipMap
	tipMap = _.sortBy(tipMap, 'timeSubm').reverse()

	console.log 'total TIPS'.rainbow.bold, _.keys(tipMap).length

	await pageItems tipMap, req, defer tipMapPaged

	await getTags '', defer et, tagsSorted
	res.render 'reddit', {tips: tipMapPaged, tags: tagsSorted, pageType: 'new', pageNum: page} 
	return

router.get '/best', (req, res) ->
	page = parseInt req.query.page
	unless page
		page = 0

	await getTipMap '', defer e, tipMap
	tipMap = _.sortBy(tipMap, 'totalAWE').reverse()

	console.log 'total TIPS'.rainbow.bold, _.keys(tipMap).length

	await pageItems tipMap, req, defer tipMapPaged

	await getTags '', defer et, tagsSorted
	res.render 'reddit', {tips: tipMapPaged, tags: tagsSorted, pageType: 'best', pageNum: page} 
	return

router.get '/new', (req, res) ->
	page = parseInt req.query.page
	unless page
		page = 0

	await getTipMap '', defer e, tipMap

	# console.log tipMap


	# await sortBy tipMap, 'timeSubm', defer sorted
	# console.log sorted

	tipMap = _.sortBy(tipMap, 'timeSubm').reverse()
	# console.log 'THIS IS IT'.green.bold, tipMap

	await pageItems tipMap, req, defer tipMap

	# await dbAwesome.flat.get 'tags', defer e, tags
	# tags = tags.tx
	# # list = {"you": 100, "me": 75, "foo": 116, "bar": 15};
	# tagsSorted = Object.keys(tags).sort (a,b) -> return tags[a]-tags[b]
	# tagsSorted.reverse()
	# # console.log tagsSorted

	# _.sortBy tags, (n) -> 
	# 	console.log n
	# 	return -n
	# console.log tags

	await getTags '', defer et, tagsSorted

	res.render 'reddit', {tips: tipMap, tags: tagsSorted, pageType: 'new', pageNum: page} #, txs: r, counts: urlTxCount}
	# res.render 'AWall', {tips: tipMap} #, txs: r, counts: urlTxCount}
	# res.render 'AWall', txs: r
	console.log 'rendered'.green.bold
	return


router.get '/url/:url?', (req, res) ->
	
	url = ''
	if req.query.url
		url = decodeURIComponent req.query.url
	else 
		url = req.params.url
	console.log url.bold.blue
	await getTags '', defer et, tagsSorted

	await getTipMap '', defer e, tipMap
	for dbUrl, tip of tipMap
		if dbUrl is url
			# console.log 'found DBurl'.green.bold
			# console.log tip
			res.render 'submission', {tip: tip, tags: tagsSorted}
			return
	res.render 'submission', {tip: null, tags: tagsSorted}
	return





# refreshCache = () ->
# 	if Date.now() - tipMapCacheLast > 60*1000
# 		console.log Date.now() - tipMapCacheLast
# 		console.log tipMapCacheLast
# 		return 'cool'
# 	else 
# 		tipMapCacheLast = Date.now()
# 		await getTipMap '', defer e, tipMap
# 		TipMapCache = tipMap

# refreshCache()

lastBlockHash = false
sync = () ->
	# console.log "SYNCING WITH CHAIN NOW".bold.rainbow
	await dbAwesome.flat.get 'lastBlockHash', defer e, hash
	unless e 
		console.log 'last synced block was', hash, 'checked '+new Date()
		unless lastBlockHash is hash
			buildTipMap()
			lastBlockHash = hash
		else
			console.log 'in sync.'.green

sync()
setInterval(sync, 30000)

module.exports = router
