import React, { FunctionComponent } from 'react'
// interface
import User from '../../../interfaces/User.interface'
// styles
import { Button, UserName, UserWrap } from './styles'

type UserItemProps = {
  user: User
  selected: string | number
  onDeleted: (event: React.MouseEvent) => void
  onSelected: (event: React.MouseEvent) => void
  loading: boolean
}

const UserItem: FunctionComponent<UserItemProps> = (props: UserItemProps) => {
  const { user, onDeleted, onSelected, selected, loading } = props

  return (
    <UserWrap selected={selected === user.id}>
      <UserName onClick={onSelected}>{user.name}</UserName>
      <Button type="button" disabled={loading} onClick={onDeleted} className="btn btn-danger">
        <i className="fa fa-trash-o" />
      </Button>
    </UserWrap>
  )
}

export default UserItem
