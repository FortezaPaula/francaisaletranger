import Cookies from 'universal-cookie'

export default () => {
  const cookies = new Cookies()

  return cookies.get('access_token')
}
