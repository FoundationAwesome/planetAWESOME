
levelup = require('level-party')

db = levelup(__dirname+'/db.bcScanner', {
   valueEncoding: 'json'
})

db.getValues = (prefix, cb) ->
	# console.log prefix, '<', '???', '<', prefix+'!'
	list = []
	db.createReadStream({
			gt: prefix,
			lt: prefix+'\xFF'
		})
		.on('data', (data) ->
			list.push data.value
			# console.log(data)#, '=', data.value)
		)
		.on('error', (err) ->
			console.log('Oh my!', err)
			cb err
			return
		)
		.on('close', () ->
			# console.log('Stream closed1')
			cb null, list
			return 
		)
		.on('end', () ->
			# console.log('Stream closed2')
		)

db.getKeyValues = (prefix, cb) ->
	# console.log prefix, '<', '???', '<', prefix+'!'
	obj = {}
	db.createReadStream({
			gt: prefix,
			lt: prefix+'\xFF'
		})
		.on('data', (data) ->
			key = data.key.substr(4)
			obj[key] = data.value
			# console.log(data)#, '=', data.value)
		)
		.on('error', (err) ->
			console.log('Oh my!', err)
			cb err
			return
		)
		.on('close', () ->
			# console.log('Stream closed1')
			cb null, obj
			return 
		)
		.on('end', () ->
			# console.log('Stream closed2')
		)

level = require 'level-browserify'
levelgraph = require 'levelgraph'
graphdb = levelgraph(level("../db.graph.scanner"))



# PouchDB = require('pouchdb');
# pouch = new PouchDB('../db.pouch.scanner');



iframelyData = require('level-party')(__dirname+'/db.iframely', {
   valueEncoding: 'json'
})

iframelyData.getValues = (prefix, cb) ->
	# console.log prefix, '<', '???', '<', prefix+'!'
	list = []
	iframelyData.createReadStream({
			gt: prefix,
			lt: prefix+'\xFF'
		})
		.on('data', (data) ->
			list.push data.value
			# console.log(data)#, '=', data.value)
		)
		.on('error', (err) ->
			console.log('Oh my!', err)
			cb err
			return
		)
		.on('close', () ->
			# console.log('Stream closed1')
			cb null, list
			return 
		)
		.on('end', () ->
			# console.log('Stream closed2')
		)


# console.log iframelyData
# await iframelyData.getValues '', defer e, resp
# console.log 'IFRAMELY... RESP IS2',resp

module.exports = 
	flat: db
	graph: graphdb
	iframely: iframelyData
	# pouch: pouch

# console.log __dirname
