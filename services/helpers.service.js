import axios from 'axios'
import accessToken from '@/helpers/accessToken'

export default class HelpersService {
  constructor (apiUrl) {
    this.apiUrl = apiUrl
  }

  get api () {
    return axios.create({
      baseURL: `${this.apiUrl}/Helpers`
    })
  }

  async get () {
    const response = await this.api.get({
      params: {
        access_token: accessToken()
      }
    })
    return response.data
  }
}
