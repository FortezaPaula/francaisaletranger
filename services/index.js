import HelpersService from './helpers.service'

process.env = process.env || {}
const apiUrl = process.env.API_URL

const helpersService = new HelpersService({ apiUrl })

export {
  helpersService
}
