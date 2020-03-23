import accessToken from '~/helpers/accessToken'

export default ({ req, res, app, redirect }) => {
  if (req) {
    if (!req.headers.cookie.includes('access_token')) {
      return redirect('/login')
    }
  } else {
    const token = accessToken()

    if (token === undefined) {
      return redirect('/login')
    }
  }
}
