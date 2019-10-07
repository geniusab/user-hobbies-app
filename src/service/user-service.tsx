import User from '../interfaces/User.interface'
import Hobby from '../interfaces/Hobby.interface'

export default class AppService {
  _apiBase = 'https://5d728c255acf5e001473109f.mockapi.io/users'

  async read(id: string = '') {
    const response = await fetch(`${this._apiBase}/${id}`)
    if (!response.ok) {
      throw new Error(`Could not fetch ${id}, received ${response.status}`)
    }
    return await response.json()
  }

  async list() {
    return await this.read()
  }

  async add(data: User) {
    return await fetch(this._apiBase, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    }).then(res => res.json())
  }

  async delete(id: string) {
    return await fetch(`${this._apiBase}/${id}`, {
      method: 'DELETE',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    }).then(res => res.json())
  }

  async addHobby(data: Hobby, userId: string) {
    return await fetch(`${this._apiBase}/${userId}/hobbies`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    }).then(res => res.json())
  }

  async deleteHobby(id: string, userId: string) {
    return await fetch(`${this._apiBase}/${userId}/hobbies/${id}`, {
      method: 'DELETE',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    }).then(res => res.json())
  }
}
