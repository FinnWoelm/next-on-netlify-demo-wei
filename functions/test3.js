const getResponse = json => ({
  statusCode: 200,
  headers: {
    'Content-Type': 'application/json; charset=utf-8',
  },
  body: json,
});

exports.handler = function(event, context, callback) {
  const response = getResponse(JSON.stringify({ message: "hello world :)"}))
  callback(null, response)
}
