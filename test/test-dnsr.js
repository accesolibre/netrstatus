var test = require('tape')
var dnsr = require('../src/node_modules/dnsr/index.js')

test('resolve google.com', function (t) {
  t.plan(4)

  var opts = {
    uri: 'https://encrypted.google.com'
  }

  dnsr(opts, function (err, stats) {
    t.error(err, 'not error')
    t.ok(stats, 'stats exists')
    t.ok(stats.resolution, 'resolved addresses exists')
    t.ok(stats.nameservers, 'dns used are returned')
  })
})
