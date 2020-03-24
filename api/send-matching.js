import axios from 'axios'

export default (req, res) => {
  const url = process.env.VUE_APP_API_URL + '/NeedHelps/sendMatching'

  if (req.method === 'POST') {
    res.setHeader('Content-Type', 'application/json')

    return axios.post(url, req.body)
      .then((response) => {
        res.statusCode = response.status
        res.end()
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
