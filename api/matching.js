import axios from 'axios'

export default (req, res) => {
  const url = process.env.VUE_APP_API_URL + '/NeedHelps/matching'

  if (req.method === 'GET') {
    return axios.get(url + req.url)
      .then((response) => {
        res.statusCode = response.status
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
  } else {
    res.end()
  }
}
