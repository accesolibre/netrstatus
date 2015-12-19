var test = require('tape')
var netspeed = require('../src/node_modules/netspeed/index.js')

test('do a network speed test', function (t) {
  t.plan(3)

  netspeed(function (err, res) {
    t.error(err, 'no error')
    t.ok(res, 'there is a response')
    t.ok(res.client.ip, 'there is the client ip')
  })
})
