import User from '../interfaces/User.interface'

export default class AppService {
  _apiBase = 'https://5d728c255acf5e001473109f.mockapi.io/users'

  async read(id: string = '') {
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
    return response
  }

  async add(data: any) {
    const response = await fetch(this._apiBase, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data.payload),
    }).then(res => res.json())
    return response
  }

  async delete(id: string) {
    const response = await fetch(`${this._apiBase}/${id}`, {
      method: 'DELETE',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    }).then(res => res.json())
    return response
  }
  // todo dynamic
  async addHobby(data: any, userId: any) {
    const response = await fetch(`${this._apiBase}/${userId}/hobbies`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data.payload),
    }).then(res => res.json())
    return response
  }
}
