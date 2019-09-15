import React from 'react'
import { connect } from 'react-redux'
import UserItem from '../UserItem'
import { deleteLoadRequest, deleteUser, selectedUser } from '../../redux/reducers/actions'
import { UsersState } from '../../redux/reducers/reducer'
import './styles.scss'
import User from '../../interfaces/User.interface'

type UseListProps = {
  users: User[]
  selected: Number | String
  deleteUser: Function
  deleteLoadRequest: Function
  selectedUser: Function
  loading: boolean
}

const UseList: React.FC<UseListProps> = (props: UseListProps) => {
  console.log(props)
  const { users, selected, deleteUser, selectedUser, deleteLoadRequest, loading } = props
  const elements = users.map(item => {
    return (
      <li key={item.id}>
        <UserItem
          loading={loading}
          selected={selected}
          user={item}
          onDeleted={() => deleteLoadRequest(item.id)}
          onSelected={() => selectedUser(item.id)}
        />
      </li>
    )
  })
  const content = elements ? elements : <h4>not found users</h4>

  return <ul className="list-group user-list">{content}</ul>
}

const mapStateToProps = (state: UsersState) => ({
  users: state.users,
  selected: state.selected,
  loading: state.loading,
})

export default connect(
  mapStateToProps,
  { deleteUser, selectedUser, deleteLoadRequest },
)(UseList)
