import axios from 'axios'

export default class HelpersService {
  get api () {
    return axios.create({
      baseURL: `${this.$env.VUE_APP_API_URL}/Helpers`
    })
  }

  async get () {
    const response = await this.api.get()
    return response.data
  }
}
