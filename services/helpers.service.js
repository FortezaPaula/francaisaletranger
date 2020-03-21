import axios from 'axios'

export default class HelpersService {
  get api () {
    return axios.create({
      baseURL: `${process.env.apiUrl}/Helpers`
    })
  }

  async get () {
    const response = await this.api.get()
    return response.data
  }
}
