var test = require('tape')
var webr = require('../src/node_modules/webr/index.js')

test('request google.com', function (t) {
  t.plan(5)

  var opts = {
    uri: 'https://encrypted.google.com',
    statusCode: 200
  }

  webr(opts, function (err, passed, stats) {
    t.error(err, 'not error')
    t.ok(passed, 'get was successful')
    t.equal(opts.statusCode, stats.statusCode, 'is 200 OK')
    t.ok(stats.httpVersion, 'HTTP version exists')
    t.ok(stats.headers, 'headers exists')
  })
})
