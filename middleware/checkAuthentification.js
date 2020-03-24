import axios from 'axios'
import accessToken from '~/helpers/accessToken'

export default ({ req, res, app, redirect }) => {
  if (req) {
    if (req.headers.cookie.includes('access_token')) {
      return axios.get(app.$env.VUE_APP_API_URL + '/Users/' + req.cookies.user_id + '/exists', {
        params: {
          access_token: req.cookies.access_token
        }
      }).then((response) => {
        if (response.statusCode === 401) {
          return redirect('/login')
        }
      }).catch(() => {
        return redirect('/login')
      })
    } else {
      return redirect('/login')
    }
  } else {
    const token = accessToken()

    if (token === undefined) {
      return redirect('/login')
    }
  }
}
