exports.handler = function(event, context, callback) {
  const response = {
    body: '{"query":{"testqs":"1","works":"true","id":"12345"}}',
    statusCode: 200,
    headers: {
      'Content-Type': 'application/json; charset=utf-8'
    }
  }
  console.log(response)
  callback(null, response)
}
