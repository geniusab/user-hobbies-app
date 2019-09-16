import React from 'react'
import { connect } from 'react-redux'
import UserItem from '../UserItem'
import { selectedUserRequest } from '../../redux/reducers/hobbies/actions'
import { deleteLoadRequest } from '../../redux/reducers/users/actions'

import './styles.scss'
import User from '../../interfaces/User.interface'

type UseListProps = {
  users: User[]
  selected: Number | String
  deleteUser: Function
  deleteLoadRequest: Function
  selectedUserRequest: Function
  loading: boolean
}

const UseList: React.FC<UseListProps> = (props: UseListProps) => {
  const { users, selected, selectedUserRequest, deleteLoadRequest, loading } = props
  const elements = users.map(item => {
    return (
      <li key={item.id}>
        <UserItem
          loading={loading}
          selected={selected}
          user={item}
          onDeleted={() => deleteLoadRequest(item.id)}
          onSelected={() => selectedUserRequest(item.id)}
        />
      </li>
    )
  })
  const content = elements ? elements : <h4>not found users</h4>

  return <ul className="list-group user-list">{content}</ul>
}
// UsersState type
const mapStateToProps = (state: any) => ({
  users: state.users.users,
  selected: state.hobbies.selected,
  loading: state.users.loading,
})

export default connect(
  mapStateToProps,
  { selectedUserRequest, deleteLoadRequest },
)(UseList)
