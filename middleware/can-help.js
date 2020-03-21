const canHelpMiddleware = ({ req, res, $axios, redirect }) => {
  if (process.server && req.method === 'POST') {
    return $axios.post(process.env.API_URL + '/Helpers', req.body)
      .then((response) => {
        res.statusCode = response.status
        res.end()
      })
      .catch((error) => {
        res.statusCode = error.response.status
        res.end()
      })
  }
}

export default canHelpMiddleware
