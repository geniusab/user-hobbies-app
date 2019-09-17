import React, { FunctionComponent } from 'react'
import User from '../../interfaces/User.interface'
import './styles.scss'

type UserItemProps = {
  user: User
  selected: string | number
  onDeleted: (event: React.MouseEvent) => void
  onSelected: (event: React.MouseEvent) => void
  loading: boolean
}

const UserItem: FunctionComponent<UserItemProps> = (props: UserItemProps) => {
  const { user, onDeleted, onSelected, selected, loading } = props
  let classNames = 'item-label'
  if (selected === user.id) classNames += ' selected'
  return (
    <div className="user-item">
      <span className={classNames} onClick={onSelected}>
        {user.name}
      </span>
      <button type="button" disabled={loading} onClick={onDeleted} className="btn btn-danger">
        <i className="fa fa-trash-o" />
      </button>
    </div>
  )
}

export default UserItem
