import Hobby from './Hobby.interface'

export default interface User {
  id?: string | number
  name?: string
  createdAt?: Date
  hobbies?: Array<Hobby>
}
