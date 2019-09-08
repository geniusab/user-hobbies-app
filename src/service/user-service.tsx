export default class AppService {
  _apiBase = 'https://www.mockapi.io/projects/5d728c255acf5e00147310a0/users'

  async read(id?: string) {
    const response = await fetch(`${this._apiBase}${id}`)
    if (!response.ok) {
      throw new Error(`Could not fetch ${id}, received ${response.status}`)
    }
    const body = await response.json()
    return body
  }

  async getUser(id: string) {
    const response = await fetch(`${this._apiBase}/${id}`)
    if (!response.ok) {
      throw new Error(`Could not fetch ${id}, received ${response.status}`)
    }
    const body = await response.json()
    return body
  }

  async list() {
    const response = await this.read()
    return response.results
  }
}
