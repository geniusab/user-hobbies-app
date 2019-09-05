import User from './User.interface'

export default interface ListUser {
  users: Array<User>
  onItemSelected?: Function
  deleteUser?: Function
  selectedUser?: Function
}
