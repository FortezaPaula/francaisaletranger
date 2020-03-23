import axios from 'axios/index'

function canHelpAPI (req, res) {
  const url = process.env.VUE_APP_API_URL + '/Helpers'
  if (req.method === 'POST') {
    return axios.post(url, req.body)
      .then((response) => {
        res.statusCode = response.status
        res.end(JSON.stringify({ id: response.data.id }))
      })
      .catch((error) => {
        res.statusCode = error.response.status
        res.end()
      })
  } else if (req.method === 'PUT') {
    return axios.put(url + '/' + req.body.id, req.body)
      .then((response) => {
        res.statusCode = response.status
        res.end()
      })
      .catch((error) => {
        res.statusCode = error.response.status
        res.end()
      })
  } else {
    res.end()
  }
}

export default canHelpAPI
