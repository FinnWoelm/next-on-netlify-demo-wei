exports.handler = function(event, context, callback) {
  const response = {
    body: '{"query":{"testqs":"1","works":"true","id":"12345"}}',
    isBase64Encoded: false,
    statusCode: 200,
    multiValueHeaders: {
      'Content-Type': [ 'application/json' ],
      'content-length': [ 52 ]
    },
    level: 'info'
  }
  callback(null, response)
}
