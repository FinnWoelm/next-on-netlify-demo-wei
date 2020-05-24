exports.handler = function(event, context, callback) {
  const response = {
    body: '{"query":{"testqs":"1","works":"true","id":"12345"}}',
    isBase64Encoded: false,
    statusCode: 200,
    multiValueHeaders: {
      'content-type': [ 'application/json; charset=utf-8' ],
      'content-length': [ 52 ],
      'custom-header': ['test']
    },
    headers: {
      'content-type': 'application/json; charset=utf-8'
    },
    level: 'info'
  }
  callback(null, response)
}
