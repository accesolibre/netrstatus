var async = require('async')
var fs = require('fs')
var docopt = require('docopt').docopt
var version = require('../package.json').version
var nrs = require('./index.js')

var args = docopt(fs.readFileSync(__dirname + '/usage.txt', 'utf-8'),
                  { version: version })

if (args.test) {
  nrs.run({
    uri: args['<url>'],
    statusCode: parseInt(args['--status'], 10)
  }, function (err, res) {
    console.log('LOG: testing site', args['<url>'])
    console.error('ERR:', err)
    console.log('RES:', res)

    return
  })
}

if (args.speed) {
  nrs.netspeed(function (err, data) {
    console.log('ERR:', err)
    console.log('RES:', data)
    return
  })
}

if (args.check) {
  var sites = require('./default.json')
  async.eachSeries(sites, function (site, cb) {
    console.log('tests on ', site)
    nrs.run(site, function (err, res) {
      console.log('LOG: testing site', site.uri)
      console.error('ERR:', err)
      console.log('RES:', res)
      return cb(null, res)
    })
  }, function done () {
    console.log('finished')
  })
}
