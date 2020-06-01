exports.handler = function(event, context, callback) {
  const response = {
    body: '{"query":{"testqs":"1","works":"true","id":"12345"}}',
    isBase64Encoded: false,
    statusCode: 200,
    headers: {
      'content-type': 'application/json; charset=utf-8',
      'custom-header': 'mycustomheader',
      'set-cookie': 'mycookie=abc, yourcookie=def'
    },
    level: 'info'
  }
  callback(null, response)
}
