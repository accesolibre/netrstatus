var test = require('tape')
var trace = require('../src/node_modules/trace/index.js')

test('trace encrypted.google.com', function (t) {
  t.plan(4)

  var opts = {
    uri: 'https://encrypted.google.com'
  }

  trace(opts, function (err, probes) {
    t.error(err, 'no error')
    t.ok(probes, 'trace output exists')
    t.ok(probes[0].probe, 'there\'s a probe')
    t.ok(probes[0].hops, 'there are hops')
  })
})

test('trace cantv.net', function (t) {
  t.plan(2)

  var opts = { uri: 'http://cantv.net' }

  trace(opts, function (err, probes) {
    t.error(err, 'no error')
    t.ok(probes, 'trace output exists')
  })
})
