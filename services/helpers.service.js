import axios from 'axios'

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
    const response = await this.api.get()
    return response.data
  }
}
