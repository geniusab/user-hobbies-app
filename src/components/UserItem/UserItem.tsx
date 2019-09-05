import React, { FunctionComponent } from 'react'
import User from '../../interfaces/User.interface'
import './styles.scss'

type UserItemProps = {
  user: User
  selected: any
  onDeleted: (event: React.MouseEvent) => void
  onSelected: (event: React.MouseEvent) => void
}

const UserItem: FunctionComponent<UserItemProps> = (props: UserItemProps) => {
  const { user, onDeleted, onSelected, selected } = props
  let classNames = 'item-label'
  if (selected === user.id) classNames += ' selected'
  return (
    <div>
      <span className={classNames} onClick={onSelected}>
        {user.first_name}
      </span>
      <button type="button" onClick={onDeleted} className="btn btn-danger">
        <i className="fa fa-trash-o" />
      </button>
    </div>
  )
}

export default UserItem
