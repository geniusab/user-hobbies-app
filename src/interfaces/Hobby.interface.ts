import { Passion } from './Passion.interface'

export default interface Hobby {
  id?: string | number
  userId?: string | number
  hobby?: string
  createdAt?: Date | string
  passion?: Passion | string
}
