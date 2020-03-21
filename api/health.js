function healthAPI (req, res) {
  res.statusCode = 200
  res.setHeader('Content-Type', 'application/json')
  res.end(JSON.stringify({ status: 'ok' }))
}

export default healthAPI
