import axios from 'axios/index'

function canHelpAPI (req, res) {
  const url = process.env.VUE_APP_API_URL + '/Helpers'

  switch (req.method) {
    case 'POST':
      return axios.post(url, req.body)
        .then((response) => {
          res.statusCode = response.status
          res.end(JSON.stringify({ id: response.data.id }))
        })
        .catch((error) => {
          res.statusCode = error.response.status
          res.end()
        })
    case 'PUT':
      return axios.put(url + '/' + req.body.id, req.body)
        .then((response) => {
          res.statusCode = response.status
          res.end()
        })
        .catch((error) => {
          res.statusCode = error.response.status
          res.end()
        })
    case 'DELETE':
      return axios.delete(url + req.url)
        .then((response) => {
          res.statusCode = response.status
          res.end()
        })
        .catch((error) => {
          res.statusCode = error.response.status
          res.end()
        })
    case 'GET':
      return axios.get(url + req.url)
        .then((response) => {
          res.statusCode = response.status
          if (response.headers['x-total-count']) {
            res.setHeader('X-Total-Count', response.headers['x-total-count'])
          }
          res.end(JSON.stringify(response.data))
        })
        .catch((error) => {
          if (error.response) {
            res.statusCode = error.response.status
          } else {
            res.statusCode = 500
          }
          res.end(JSON.stringify(error.message))
        })
    default:
      res.end()
      break
  }
}

export default canHelpAPI
