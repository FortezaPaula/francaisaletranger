import axios from 'axios'

export default (req, res) => {
  if (req.method === 'POST') {
    res.setHeader('Content-Type', 'application/json')

    return axios.post(process.env.VUE_APP_API_URL + '/Users/login', req.body)
      .then((response) => {
        res.statusCode = response.status
        res.end(JSON.stringify(response.data))
      }).catch((error) => {
        if (error.response) {
          res.statusCode = error.response.status
        } else {
          res.statusCode = 500
        }
        res.end(JSON.stringify(error.message))
      })
  } else {
    res.end()
  }
}
