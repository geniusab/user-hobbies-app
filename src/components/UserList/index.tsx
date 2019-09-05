import React, { useEffect, useState } from 'react'

import { connect } from 'react-redux'

import './styles.scss'
import UserItem from '../UserItem/UserItem'
import ListUser from '../../interfaces/ListUsers'
import { deleteUser } from '../../redux/actions'
import User from '../../interfaces/User.interface'

const UseList = (props: any): any => {
  const [selected, setSelected] = useState<string | number>(null)
  const { users, deleteUser } = props

  const onItemSelected = (id: string | number): void => {
    setSelected(id)
  }

  // useEffect(() => {
  //     onItemSelected(selected)
  // }, [selected])

  const elements = users.map((item: any) => {
    return (
      <li key={item.id}>
        <UserItem selected={selected} user={item} onDeleted={() => deleteUser(item.id)} onSelected={() => onItemSelected(item.id)} />
      </li>
    )
  })
  const content = elements.length ? elements : <h4>not found users</h4>

  return <ul className="list-group user-list">{content}</ul>
}

const mapStateToProps = (state: any) => ({ users: state.users })

// UserCardList.defaultProps = {
//     onItemSelected: () => {},
//     deleteUser: () => {}
// };

export default connect(
  mapStateToProps,
  { deleteUser },
)(UseList)
