import axios from 'axios'

export default class HelpersService {
  get api () {
    const API_URL = process.env.NUXT_ENV_API_URL
    return axios.create({
      baseURL: `${API_URL}/Helpers`
    })
  }

  async get () {
    const response = await this.api.get()
    return response.data
  }
}
