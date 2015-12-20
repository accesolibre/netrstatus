var async = require('async')
var dnsr = require('dnsr')
var netspeed = require('netspeed')
var trace = require('trace')
var webr = require('webr')

function run (opts, callback) {
  async.series([
    function (cb) { dnsr(opts, cb) },
    function (cb) { trace(opts, cb) },
    function (cb) { webr(opts, cb) }
  ], callback)
}
exports.run = run

exports.dnsr = dnsr
exports.netspeed = netspeed
exports.trace = trace
exports.webr = webr
