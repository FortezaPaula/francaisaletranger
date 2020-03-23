import Cookies from 'universal-cookie'

export default ({ req, res, app, redirect }) => {
  if (req) {
    if (!req.headers.cookie.includes('access_token')) {
      return redirect('/login')
    }
  } else {
    const cookies = new Cookies()
    const token = cookies.get('access_token')

    if (token === undefined) {
      return redirect('/login')
    }
  }
}
