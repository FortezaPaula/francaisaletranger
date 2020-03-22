import axios from 'axios'

const canHelpMiddleware = ({ req, res, app }) => {
  if (process.server && req.method === 'POST') {
    return axios.post(app.$env.VUE_APP_API_URL + '/Helpers', req.body)
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
