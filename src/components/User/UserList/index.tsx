import React from 'react'
// interface
import User from '../../../interfaces/User.interface'
// redux
import { connect } from 'react-redux'
import { selectedUserRequest } from '../../../store/hobbies/actions'
import { deleteUserRequest } from '../../../store/users/actions'
// components
import UserItem from '../UserItem/index'
// styles
import { WrapList } from './styles'

type UseListProps = {
  users: User[]
  selected: number | string
  deleteUser: Function
  deleteUserRequest: Function
  selectedUserRequest: Function
  loading: boolean
}

const UseList: React.FC<UseListProps> = (props: UseListProps) => {
  const { users, selected, selectedUserRequest, deleteUserRequest, loading } = props
  const elements = users.map(item => {
    return (
      <li key={item.id}>
        <UserItem
          loading={loading}
          selected={selected}
          user={item}
          onDeleted={() => deleteUserRequest(item.id)}
          onSelected={() => selectedUserRequest(item.id)}
        />
      </li>
    )
  })
  const content = elements ? elements : <h4>not found users</h4>

  return <WrapList>{content}</WrapList>
}
// UsersState type
const mapStateToProps = (state: any) => ({
  users: state.users.users,
  selected: state.hobbies.selected,
  loading: state.users.loading,
})

export default connect(
  mapStateToProps,
  { selectedUserRequest, deleteUserRequest },
)(UseList)
